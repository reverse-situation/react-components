import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/index.ts';
import App from './App';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
