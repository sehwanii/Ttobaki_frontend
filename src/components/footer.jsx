// Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>정보</h3>
          <ul>
            <li>솔브드 서포터</li>
            <li>업데이트</li>
            <li>이슈 트래커</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>컨텐츠</h3>
          <ul>
            <li>프로필 배지</li>
            <li>프로필 배경</li>
            <li>코드 교환</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>코인과 별조각</h3>
          <ul>
            <li>사용 내역</li>
            <li>환전</li>
            <li>코인샵</li>
            <li>인벤토리</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>커뮤니티 · 도구</h3>
          <ul>
            <li>Slack · Discord</li>
            <li>BOJ 스코어보드 툴</li>
            <li>BOJ Stack 디스크립션 툴</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>도움말</h3>
          <ul>
            <li>규칙</li>
            <li>기여 가이드라인</li>
            <li>고급 검색</li>
            <li>신규 배지/배경 등록 신청</li>
            <li>신규 아레나 제안</li>
            <li>이용 약관</li>
            <li>개인정보 처리방침</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>solved.ac © 2019 - 2024. <a href="#">한국어</a> · <a href="#">English</a> · <a href="#">日本語</a></p>
        <p>
          솔브드 · 대표 박수현<br />
          04136 서울특별시 마포구 대흥로20안길 15, 302호(대흥동, 마포허브)<br />
          사업자 등록번호 413-01-65278 · 통신판매업 신고 2023-서울마포-0839 · 010-8481-7347 · <a href="#">사업자정보 확인</a>
        </p>
        <p>
          'solved.ac', 'solved', '솔브드'는 <a href="https://shiftpsh.com">shiftpsh.com</a>의 상표입니다. 'Baekjoon Online Judge'는 주식회사 스타트링크의 상표입니다.
        </p>
        <div className="footer-icons">
          <span>Icons here</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;