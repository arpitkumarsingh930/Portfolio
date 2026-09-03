import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Home } from '@/pages/Home';
import { ResumePreview } from '@/pages/ResumePreview';
import { RESUME_PREVIEW_PATH } from '@/constants';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={RESUME_PREVIEW_PATH} element={<ResumePreview />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
