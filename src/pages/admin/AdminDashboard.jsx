import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Users, Activity, Database, BarChart3, Settings, LogOut, TrendingUp, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
    const navigate = useNavigate();

    const adminCards = [
        {
            id: 'users',
            title: 'User Management',
            description: 'Manage user accounts, permissions, and access control',
            icon: Users,
            color: '#3B82F6', // Blue
            bgColor: '#DBEAFE',
            action: () => navigate('/admin/users'),
            stats: '1,247 Active Users'
        },
        {
            id: 'tokens',
            title: 'AI Token Monitoring',
            description: 'Track Gemini API usage, TTS consumption, and system health',
            icon: Activity,
            color: '#10B981', // Green
            bgColor: '#D1FAE5',
            action: () => navigate('/admin/tokens'),
            stats: '78% Token Usage'
        },
        {
            id: 'library',
            title: 'Mascot Library',
            description: 'Manage 3D/2D mascot templates and background assets',
            icon: Database,
            color: '#9333EA', // Purple
            bgColor: '#F3E8FF',
            action: () => navigate('/admin/library'),
            stats: '45 Templates'
        },
        {
            id: 'bi',
            title: 'Business Intelligence',
            description: 'Analytics, reports, and data-driven insights',
            icon: BarChart3,
            color: '#F59E0B', // Amber
            bgColor: '#FEF3C7',
            action: () => navigate('/admin/bi'),
            stats: 'View Reports'
        }
    ];

    const systemHealth = [
        { metric: 'API Uptime', value: '99.8%', status: 'healthy', color: '#10B981' },
        { metric: 'Avg Response Time', value: '1.8s', status: 'healthy', color: '#10B981' },
        { metric: 'Token Usage', value: '78%', status: 'warning', color: '#F59E0B' },
        { metric: 'Active Sessions', value: '342', status: 'healthy', color: '#10B981' }
    ];

    const recentActivity = [
        { action: 'New user registered', user: 'john.doe@example.com', time: '2 min ago', type: 'user', color: '#3B82F6' },
        { action: 'High token usage alert', user: 'System', time: '15 min ago', type: 'alert', color: '#F59E0B' },
        { action: 'New mascot template uploaded', user: 'admin@mascotic.com', time: '1 hour ago', type: 'library', color: '#9333EA' },
        { action: 'BI report generated', user: 'System', time: '2 hours ago', type: 'report', color: '#10B981' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                                <Settings className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-blue-600">
                                    Admin System
                                </h1>
                                <p className="text-xs text-gray-500">MASCOTIC Management Console</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Settings className="w-5 h-5 text-gray-600" />
                            </button>
                            <Link to="/" className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                                <LogOut className="w-5 h-5 text-blue-600" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        System Overview
                    </h2>
                    <p className="text-gray-600">
                        Monitor and manage the MASCOTIC platform
                    </p>
                </div>

                {/* System Health */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {systemHealth.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-md border-l-4" style={{ borderLeftColor: item.color }}>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-gray-600">{item.metric}</p>
                                <div className={`w-2 h-2 rounded-full ${item.status === 'healthy' ? 'animate-pulse' : ''}`} style={{ backgroundColor: item.color }} />
                            </div>
                            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Admin Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {adminCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <button
                                key={card.id}
                                onClick={card.action}
                                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left overflow-hidden border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                                        style={{ backgroundColor: card.bgColor }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: card.color }} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {card.description}
                                        </p>

                                        <div
                                            className="inline-block px-3 py-1 rounded-full"
                                            style={{ backgroundColor: card.bgColor }}
                                        >
                                            <span className="text-xs font-semibold" style={{ color: card.color }}>
                                                {card.stats}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {recentActivity.map((activity, index) => {
                            const iconMap = {
                                user: Users,
                                alert: AlertCircle,
                                library: Database,
                                report: BarChart3
                            };
                            const Icon = iconMap[activity.type];

                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: activity.color + '20' }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: activity.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">{activity.action}</p>
                                        <p className="text-sm text-gray-600">{activity.user}</p>
                                    </div>
                                    <span className="text-sm text-gray-500">{activity.time}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
