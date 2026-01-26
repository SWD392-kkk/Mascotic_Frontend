import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, MessageCircle, Clock, Target, Calendar, Download } from 'lucide-react';

export default function EngagementAnalytics() {
    const navigate = useNavigate();
    const [timeRange, setTimeRange] = useState('week');

    const stats = [
        { label: 'Total Interactions', value: '127', change: '+23%', trend: 'up', icon: MessageCircle, color: '#9333EA', bgColor: '#F3E8FF' },
        { label: 'Learning Hours', value: '8.5', change: '+15%', trend: 'up', icon: Clock, color: '#3B82F6', bgColor: '#DBEAFE' },
        { label: 'Questions Asked', value: '156', change: '+31%', trend: 'up', icon: Target, color: '#EC4899', bgColor: '#FCE7F3' },
        { label: 'Avg. Session Time', value: '12m', change: '+8%', trend: 'up', icon: TrendingUp, color: '#F59E0B', bgColor: '#FEF3C7' }
    ];

    const topQuestions = [
        { question: 'Why is the sky blue?', count: 12, mascot: 'Cosmo', topic: 'Science' },
        { question: 'How do fish breathe underwater?', count: 9, mascot: 'Aqua', topic: 'Biology' },
        { question: 'What is 7 times 8?', count: 8, mascot: 'Mathilda', topic: 'Math' },
        { question: 'How far is the moon?', count: 7, mascot: 'Cosmo', topic: 'Astronomy' },
        { question: 'Why do we need to sleep?', count: 6, mascot: 'Cosmo', topic: 'Health' }
    ];

    const interactionsByDay = [
        { day: 'Mon', interactions: 18 },
        { day: 'Tue', interactions: 22 },
        { day: 'Wed', interactions: 15 },
        { day: 'Thu', interactions: 28 },
        { day: 'Fri', interactions: 24 },
        { day: 'Sat', interactions: 12 },
        { day: 'Sun', interactions: 8 }
    ];

    const topicDistribution = [
        { topic: 'Science', percentage: 35, color: '#9333EA' },
        { topic: 'Math', percentage: 25, color: '#3B82F6' },
        { topic: 'Language', percentage: 20, color: '#EC4899' },
        { topic: 'History', percentage: 12, color: '#F59E0B' },
        { topic: 'Arts', percentage: 8, color: '#10B981' }
    ];

    const maxInteractions = Math.max(...interactionsByDay.map(d => d.interactions));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Engagement Analytics</h1>
                                    <p className="text-xs text-gray-500">Track learning interactions & insights</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <select
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                            >
                                <option value="today">Today</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                            </select>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md">
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: stat.bgColor }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: stat.color }} />
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                        {stat.change}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Interactions Chart */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                <h2 className="text-lg font-bold text-gray-900">Daily Interactions</h2>
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-4 h-64">
                            {interactionsByDay.map((day, index) => {
                                const height = (day.interactions / maxInteractions) * 100;
                                return (
                                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                        <div className="w-full flex flex-col items-center justify-end flex-1">
                                            <div className="relative group w-full">
                                                <div
                                                    className="w-full bg-purple-600 rounded-t-lg transition-all duration-300 hover:bg-purple-700"
                                                    style={{ height: `${height}%` }}
                                                />
                                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {day.interactions} interactions
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium text-gray-600">{day.day}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Topic Distribution */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg font-bold text-gray-900">Topic Distribution</h2>
                        </div>

                        <div className="space-y-4">
                            {topicDistribution.map((topic, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">{topic.topic}</span>
                                        <span className="text-sm font-bold text-gray-900">{topic.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${topic.percentage}%`,
                                                backgroundColor: topic.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold text-purple-600">Science</span> is the most engaged topic this week!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Questions */}
                <div className="mt-6 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <MessageCircle className="w-5 h-5 text-purple-600" />
                        <h2 className="text-lg font-bold text-gray-900">Most Asked Questions</h2>
                    </div>

                    <div className="space-y-3">
                        {topQuestions.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-purple-50 rounded-xl hover:shadow-md transition-shadow border border-purple-100"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.question}</p>
                                        <p className="text-sm text-gray-600">
                                            Asked to <span className="font-medium text-purple-600">{item.mascot}</span> • {item.topic}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-white rounded-full border border-gray-200">
                                    <span className="text-sm font-bold text-gray-900">{item.count}x</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insights */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-600 rounded-2xl p-6 text-white shadow-md">
                        <h3 className="text-lg font-bold mb-2">🎯 Learning Insight</h3>
                        <p className="text-purple-100">
                            Your engagement has increased by <span className="font-bold">23%</span> this week!
                            Keep up the great work exploring with your mascots.
                        </p>
                    </div>
                    <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-md">
                        <h3 className="text-lg font-bold mb-2">💡 Recommendation</h3>
                        <p className="text-blue-100">
                            Try exploring <span className="font-bold">History & Culture</span> topics next -
                            they complement your current learning path perfectly!
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
