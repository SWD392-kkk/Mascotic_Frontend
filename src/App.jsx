import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/user/UserDashboard';
import MascotPersonaStudio from './pages/user/MascotPersonaStudio';
import EngagementAnalytics from './pages/user/EngagementAnalytics';
import StorytellingMode from './pages/user/StorytellingMode';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import AITokenMonitoring from './pages/admin/AITokenMonitoring';
import MascotLibrary from './pages/admin/MascotLibrary';
import BusinessIntelligence from './pages/admin/BusinessIntelligence';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* User Dashboard Routes */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/dashboard/persona" element={<MascotPersonaStudio />} />
        <Route path="/dashboard/analytics" element={<EngagementAnalytics />} />

        {/* Immersive Storytelling Mode */}
        <Route path="/story" element={<StorytellingMode />} />
        <Route path="/story/:storyId" element={<StorytellingMode />} />

        {/* Admin System Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/tokens" element={<AITokenMonitoring />} />
        <Route path="/admin/library" element={<MascotLibrary />} />
        <Route path="/admin/bi" element={<BusinessIntelligence />} />
      </Routes>
    </Router>
  );
}

export default App;
