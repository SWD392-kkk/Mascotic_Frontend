import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Users, Clock, Download, Calendar, DollarSign } from 'lucide-react';

export default function BusinessIntelligence() {
    const navigate = useNavigate();
    const [timeRange, setTimeRange] = useState('month');

    const kpiMetrics = [
        { label: 'Total Revenue', value: '$12,450', change: '+23%', trend: 'up', icon: DollarSign, color: '#10B981', bgColor: '#D1FAE5' },
        { label: 'Active Users', value: '1,247', change: '+15%', trend: 'up', icon: Users, color: '#3B82F6', bgColor: '#DBEAFE' },
        { label: 'Avg Session Time', value: '14.5 min', change: '+8%', trend: 'up', icon: Clock, color: '#9333EA', bgColor: '#F3E8FF' },
        { label: 'User Retention', value: '87%', change: '+5%', trend: 'up', icon: TrendingUp, color: '#F59E0B', bgColor: '#FEF3C7' }
    ];

    const revenueByMonth = [
        { month: 'Jan', revenue: 8500 },
        { month: 'Feb', revenue: 9200 },
        { month: 'Mar', revenue: 10100 },
        { month: 'Apr', revenue: 9800 },
        { month: 'May', revenue: 11200 },
        { month: 'Jun', revenue: 12450 }
    ];

    const userGrowth = [
        { month: 'Jan', users: 850 },
        { month: 'Feb', users: 920 },
        { month: 'Mar', users: 1010 },
        { month: 'Apr', users: 1080 },
        { month: 'May', users: 1150 },
        { month: 'Jun', users: 1247 }
    ];

    const topMascots = [
        { name: 'Cosmo (Space Explorer)', usage: 342, percentage: 28, color: '#3B82F6' },
        { name: 'Aqua (Ocean Guardian)', usage: 298, percentage: 24, color: '#06B6D4' },
        { name: 'Mathilda (Math Wizard)', usage: 267, percentage: 22, color: '#9333EA' },
        { name: 'History Hero', usage: 189, percentage: 15, color: '#F59E0B' },
        { name: 'Art Master', usage: 134, percentage: 11, color: '#EC4899' }
    ];

    const engagementMetrics = [
        { metric: 'Questions Asked', value: '15,678', change: '+31%', color: '#3B82F6', bgColor: '#DBEAFE' },
        { metric: 'Stories Completed', value: '8,934', change: '+28%', color: '#10B981', bgColor: '#D1FAE5' },
        { metric: 'Avg. Interactions/Session', value: '12.4', change: '+18%', color: '#9333EA', bgColor: '#F3E8FF' },
        { metric: 'Voice Interactions', value: '23,456', change: '+42%', color: '#F59E0B', bgColor: '#FEF3C7' }
    ];

    const maxRevenue = Math.max(...revenueByMonth.map(d => d.revenue));
    const maxUsers = Math.max(...userGrowth.map(d => d.users));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/admin')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Business Intelligence</h1>
                                    <p className="text-xs text-gray-500">Analytics, reports & insights</p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
                            <select
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
                            >
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="quarter">This Quarter</option>
                                <option value="year">This Year</option>
                            </select>
                            <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all shadow-md">
                                <Download className="w-4 h-4" />
                                Export Report
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* KPI Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {kpiMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: metric.bgColor }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: metric.color }} />
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                        {metric.change}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                                <p className="text-sm text-gray-600">{metric.label}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Revenue Chart */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-green-600" />
                                <h2 className="text-lg font-bold text-gray-900">Revenue Trend</h2>
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-2 h-48">
                            {revenueByMonth.map((data, index) => {
                                const height = (data.revenue / maxRevenue) * 100;
                                return (
                                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                        <div className="w-full flex flex-col items-center justify-end flex-1">
                                            <div className="relative group w-full">
                                                <div
                                                    className="w-full bg-green-600 rounded-t-lg transition-all duration-300 hover:bg-green-700"
                                                    style={{ height: `${height}%` }}
                                                />
                                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    ${data.revenue.toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-gray-600">{data.month}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* User Growth Chart */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                <h2 className="text-lg font-bold text-gray-900">User Growth</h2>
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-2 h-48">
                            {userGrowth.map((data, index) => {
                                const height = (data.users / maxUsers) * 100;
                                return (
                                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                        <div className="w-full flex flex-col items-center justify-end flex-1">
                                            <div className="relative group w-full">
                                                <div
                                                    className="w-full bg-blue-600 rounded-t-lg transition-all duration-300 hover:bg-blue-700"
                                                    style={{ height: `${height}%` }}
                                                />
                                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {data.users.toLocaleString()} users
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-gray-600">{data.month}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Top Mascots */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg font-bold text-gray-900">Most Popular Mascots</h2>
                        </div>

                        <div className="space-y-4">
                            {topMascots.map((mascot, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                                                style={{ backgroundColor: mascot.color }}
                                            >
                                                {index + 1}
                                            </span>
                                            <span className="font-medium text-gray-900">{mascot.name}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-bold text-gray-900">{mascot.usage}</span>
                                            <span className="text-sm text-gray-600 ml-2">sessions</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${mascot.percentage}%`,
                                                backgroundColor: mascot.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <BarChart3 className="w-5 h-5 text-amber-600" />
                            <h2 className="text-lg font-bold text-gray-900">Engagement</h2>
                        </div>

                        <div className="space-y-4">
                            {engagementMetrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl border"
                                    style={{
                                        backgroundColor: metric.bgColor,
                                        borderColor: metric.color + '40'
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm text-gray-600">{metric.metric}</p>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                            {metric.change}
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Insights */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-600 rounded-2xl p-6 text-white shadow-md">
                        <h3 className="text-lg font-bold mb-2">💰 Revenue Insight</h3>
                        <p className="text-green-100">
                            Revenue increased by <span className="font-bold">23%</span> this month,
                            driven by higher user engagement and retention.
                        </p>
                    </div>
                    <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-md">
                        <h3 className="text-lg font-bold mb-2">📈 Growth Insight</h3>
                        <p className="text-blue-100">
                            User base grew by <span className="font-bold">15%</span> with
                            strong retention rates at 87%.
                        </p>
                    </div>
                    <div className="bg-purple-600 rounded-2xl p-6 text-white shadow-md">
                        <h3 className="text-lg font-bold mb-2">🎯 Engagement Insight</h3>
                        <p className="text-purple-100">
                            Voice interactions up <span className="font-bold">42%</span> -
                            users love the conversational experience!
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
