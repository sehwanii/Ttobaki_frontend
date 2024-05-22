import React, { useState, useEffect } from 'react';
import '../styles/AudioRecorderPage.css';

const AudioRecorderPage = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessageTest = async () => {
      const pageId = "123";
      const data = "얼음";
      setMessage(data);
    };

    fetchMessageTest();
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.start();

      const audioChunks = [];
      recorder.ondataavailable = e => audioChunks.push(e.data);

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        await sendAudioToServer(audioBlob);
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
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.wav');
    try {
      const response = await fetch('http://your-server.com/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to upload audio');
      console.log('Audio uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  const saveRecording = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'recording.wav'; // 다운로드 파일 이름 설정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
            <button onClick={saveRecording}>Submit Recording</button> {/* 저장 버튼 추가 */}
          </>
        )}
      </div>
    </div>
  );
};

export default AudioRecorderPage;
