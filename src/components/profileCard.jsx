// ProfileCard.jsx
import React from 'react';
import '../styles/profileCard.css';

const ProfileCard = () => {
  const user_id = "sehwan"
  const user_rank = "가"
  const user_rating = "1250"
  return (
    <div className="profile-card">
      <div className="profile-main">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="path/to/avatar.png" alt="User Avatar" />
          </div>
          <div className="profile-details">
            <h2>{user_id}</h2>
            <div>
              진척도<span className="badge">{user_rank}</span> <span>{user_rating}</span>
            </div>
            <div>
              <span>평가</span><span className="badge">C</span> <span>101</span>
            </div>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat streak">
            <h3>스트릭</h3>
            <p>0일</p>
            <p>오늘 풀면 1일</p>
          </div>
          <div className="stat class">
            <h3>CLASS 6</h3>
            <div className="circle-progress">
              <span>35%</span>
            </div>
            <p>달성 시 RATING +10</p>
          </div>
          <div className="stat arena">
            <h3>아레나</h3>
            <p>개최 예정인 아레나가 없습니다</p>
          </div>
        </div>
      </div>
      <div className="profile-message">
        <p>오늘은 아직 문제를 풀지 않았어요</p>
        <a href="#!">문제 풀러 가기! &rarr;</a>
      </div>
      <div className="profile-footer">
        <p>BOJ 로그인 후, "설정 {'>'} 보기 {'>'} solved.ac 티어"에서 난이도 표시를 켜고 끌 수 있습니다.</p>
        <p>문제해결과 관련된 정보들이 추가될 예정입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard;