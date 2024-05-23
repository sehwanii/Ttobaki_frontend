import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 임포트
import '../styles/AudioRecorderPage.css';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../hooks/Auth.jsx';
import Nav  from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

const AudioRecorderPage = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null); // audioBlob 상태 추가
  const [message, setMessage] = useState("");
  const location = useLocation(); // useLocation 훅 사용
  const leveldata = location.state;
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const fetchMessageTest = async () => {
      if (leveldata) {
        const pageId = leveldata.id;
        const word = leveldata.word;
        console.log(leveldata);
        setMessage(word);
      }
    };

    fetchMessageTest();
  }, [leveldata]);

  const startRecording = async () => {
    console.log(accessToken);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.start();

      const audioChunks = [];
      recorder.ondataavailable = e => audioChunks.push(e.data);

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        setAudioBlob(audioBlob); // audioBlob 상태 설정
        console.log(audioUrl)
        console.log(audioBlob);
      };

      setRecording(true);
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
    
  };

  const sendAudioToServer = async (audioBlob) => {
    console.log(`leveldata : ${leveldata.id}`);
    const formData = new FormData();
    formData.append('question', leveldata.id); // 추가 데이터 전송
    formData.append('file', audioBlob, 'audio.wav');
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/upload/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to upload audio');
      console.log('Audio uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div>
      <Nav></Nav>
        <div className="center-flex">
          <div>
            {message && <h2>{message}</h2>}
            <h1>Audio Recorder</h1>
            {recording ? (
              <button onClick={stopRecording}>Stop Recording</button>
            ) : 
              audioUrl ? (
                <button onClick={startRecording}>Re Recording</button>
              ) : (
              <button onClick={startRecording}>Start Recording</button>
              )
            }
            {audioUrl && !recording && (
              <>
                <audio src={audioUrl} controls />
                <button onClick={() => sendAudioToServer(audioBlob)}>Submit Recording</button> {/* 저장 버튼 추가 */}
              </>
            )}
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default AudioRecorderPage;