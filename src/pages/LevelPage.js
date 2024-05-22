import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import '../styles/LevelPage.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const LevelPage = () => {
  const [levels, setLevels] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    fetchLevelsTest();
  }, []);

  const fetchLevelsTest = () => {
    const data = [
        { "id": 1, "name": "Beginner1", "accuracy": 75 },
        { "id": 2, "name": "Beginner2", "accuracy": 64 },
        { "id": 3, "name": "Beginner3", "accuracy": 37 },
        { "id": 4, "name": "Intermediate1", "accuracy": 11.7 },
        { "id": 5, "name": "Intermediate2", "accuracy": 0 },
        { "id": 6, "name": "Intermediate3", "accuracy": 75 },
        { "id": 7, "name": "Advanced1", "accuracy": 75 },
        { "id": 8, "name": "Advanced2", "accuracy": 75 },
        { "id": 9, "name": "Advanced3", "accuracy": 75 }
    ];
    setLevels(data);
  };

  const goToLevelDetail = (id) => {
    navigate(`/level/${id}`); // 이동할 URL 설정
  };

  return (
    <div>
        <div className="header">
            <h1>Levels</h1>
        </div>
        <div className="container">
        {levels.map((level) => (
            <div key={level.id} className="level-item">
            <h2>Level {level.id}: {level.name}</h2>
            <Doughnut
                data={{
                labels: ['Accuracy', 'Inaccuracy'],
                datasets: [{
                    label: 'Accuracy',
                    data: [level.accuracy, 100 - level.accuracy],
                    backgroundColor: ['#36A2EB', '#FF6384'],
                    hoverBackgroundColor: ['#36A2EB', '#FF6384']
                }]
                }}
                options={{
                maintainAspectRatio: true,
                responsive: true
                }}
            />
            <button onClick={() => goToLevelDetail(level.id)}>Go to Level {level.id} Details</button>
            </div>
        ))}
        </div>
    </div>
  );
};

export default LevelPage;

