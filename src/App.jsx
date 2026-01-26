import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentInterface from './pages/student/StudentInterface';
import MascotPersonaStudio from './pages/teacher/MascotPersonaStudio';
import AIStoryArchitect from './pages/teacher/AIStoryArchitect';
import TeacherAnalytics from './pages/teacher/TeacherAnalytics';
import SchoolSubscriptions from './pages/admin/SchoolSubscriptions';
import AITokenUsage from './pages/admin/AITokenUsage';
import MascotLibrary from './pages/admin/MascotLibrary';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentInterface />} />

        {/* Teacher Routes */}
        <Route path="/teacher" element={<MascotPersonaStudio />} />
        <Route path="/teacher/persona" element={<MascotPersonaStudio />} />
        <Route path="/teacher/stories" element={<AIStoryArchitect />} />
        <Route path="/teacher/analytics" element={<TeacherAnalytics />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<SchoolSubscriptions />} />
        <Route path="/admin/subscriptions" element={<SchoolSubscriptions />} />
        <Route path="/admin/tokens" element={<AITokenUsage />} />
        <Route path="/admin/library" element={<MascotLibrary />} />
      </Routes>
    </Router>
  );
}

export default App;
