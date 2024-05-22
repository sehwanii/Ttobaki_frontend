import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LevelDetailPage = () => {
  const { id } = useParams();  // URL로부터 id 추출
  const [levelDetail, setLevelDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLevelDetail = async () => {
      try {
        const response = await fetch(`http://your-server.com/api/levels/${id}`);
        const data = await response.json();
        if (response.ok) {
          setLevelDetail(data);
        } else {
          throw new Error(data.message || 'Something went wrong');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching level detail:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLevelDetail();
  }, [id]);  // 의존성 배열에 id를 포함하여 id가 변경될 때마다 데이터를 다시 불러옴

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Level Details</h1>
      {levelDetail ? (
        <div>
          <h2>Level {levelDetail.id}: {levelDetail.name}</h2>
          <p>Accuracy: {levelDetail.accuracy}%</p>
        </div>
      ) : (
        <p>No details available for this level.</p>
      )}
    </div>
  );
};

export default LevelDetailPage;
