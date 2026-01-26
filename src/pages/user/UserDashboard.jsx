import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, BarChart3, Play, Settings, User, LogOut, BookOpen, Mic } from 'lucide-react';

export default function UserDashboard() {
    const navigate = useNavigate();
    const [userName] = useState('User'); // Will be dynamic with auth

    const dashboardCards = [
        {
            id: 'persona',
            title: 'Mascot Persona Studio',
            description: 'Create and customize your AI mascot\'s personality, voice, and knowledge base',
            icon: Sparkles,
            color: '#9333EA', // Purple
            bgColor: '#F3E8FF', // Light purple background
            action: () => navigate('/dashboard/persona'),
            stats: '3 Active Mascots'
        },
        {
            id: 'analytics',
            title: 'Engagement Analytics',
            description: 'View interaction reports, questions asked, and learning insights',
            icon: BarChart3,
            color: '#3B82F6', // Blue
            bgColor: '#DBEAFE', // Light blue background
            action: () => navigate('/dashboard/analytics'),
            stats: '127 Interactions This Week'
        },
        {
            id: 'story',
            title: 'Start Storytelling',
            description: 'Begin an immersive learning session with your AI mascot',
            icon: Play,
            color: '#F59E0B', // Amber
            bgColor: '#FEF3C7', // Light amber background
            action: () => navigate('/story'),
            stats: 'Ready to Learn'
        }
    ];

    const recentStories = [
        { id: 1, title: 'Space Explorer: Journey to Mars', mascot: 'Cosmo', duration: '12 min', date: '2 hours ago' },
        { id: 2, title: 'Ocean Adventures: Deep Sea Mysteries', mascot: 'Aqua', duration: '15 min', date: '1 day ago' },
        { id: 3, title: 'Math Magic: Numbers in Nature', mascot: 'Mathilda', duration: '10 min', date: '2 days ago' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-purple-600">
                                    MASCOTIC
                                </h1>
                                <p className="text-xs text-gray-500">AI Meta Human for Education</p>
                            </div>
                        </Link>

                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Settings className="w-5 h-5 text-gray-600" />
                            </button>
                            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                                <User className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-purple-900">{userName}</span>
                            </div>
                            <Link to="/" className="p-2 hover:bg-purple-50 rounded-lg transition-colors">
                                <LogOut className="w-5 h-5 text-purple-600" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, {userName}! 👋
                    </h2>
                    <p className="text-gray-600">
                        Ready to create magical learning experiences with your AI mascots?
                    </p>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {dashboardCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <button
                                key={card.id}
                                onClick={card.action}
                                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left overflow-hidden border border-gray-100"
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: card.bgColor }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: card.color }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {card.description}
                                </p>

                                {/* Stats */}
                                <div
                                    className="inline-block px-3 py-1 rounded-full"
                                    style={{ backgroundColor: card.bgColor }}
                                >
                                    <span className="text-xs font-semibold" style={{ color: card.color }}>
                                        {card.stats}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Recent Stories Section */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-purple-600" />
                            <h3 className="text-xl font-bold text-gray-900">Recent Stories</h3>
                        </div>
                        <button className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                            View All
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentStories.map((story) => (
                            <div
                                key={story.id}
                                className="flex items-center justify-between p-4 bg-purple-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer group border border-purple-100"
                                onClick={() => navigate(`/story/${story.id}`)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                                        <Mic className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                            {story.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Mascot: {story.mascot} • {story.duration} • {story.date}
                                        </p>
                                    </div>
                                </div>
                                <Play className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                    {[
                        { label: 'Total Stories', value: '24', icon: BookOpen, color: '#9333EA', bgColor: '#F3E8FF' },
                        { label: 'Learning Hours', value: '8.5', icon: Play, color: '#3B82F6', bgColor: '#DBEAFE' },
                        { label: 'Questions Asked', value: '156', icon: Mic, color: '#EC4899', bgColor: '#FCE7F3' },
                        { label: 'Active Mascots', value: '3', icon: Sparkles, color: '#F59E0B', bgColor: '#FEF3C7' }
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: stat.bgColor }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: stat.color }} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                        <p className="text-xs text-gray-600">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
