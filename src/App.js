import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import LevelPage from './pages/LevelPage';
import LevelDetailPage from './pages/LevelDetailPage';
import AudioTest from './pages/AudioRecorderPage';
import PrivateRoute from './PrivateRoute';
import { accessTokenState } from './hooks/Auth';
import { useRecoilValue } from 'recoil';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/levels" element={<PrivateRoute><LevelPage /></PrivateRoute>} />
          <Route path="/level/:id" element={<PrivateRoute><LevelDetailPage /></PrivateRoute>} />
          <Route path="/audiotest/*" element={<PrivateRoute><AudioTest /></PrivateRoute>} />
          {/* <Route path="/난이도별" element={<난이도별 />} />
          <Route path="/유형별" element={<유형별 />} />
          <Route path="/테스트" element={<테스트 />} />
          <Route path="/랭킹" element={<랭킹 />} /> </PrivateRoute>
</PrivateRoute>
</PrivateRoute>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;