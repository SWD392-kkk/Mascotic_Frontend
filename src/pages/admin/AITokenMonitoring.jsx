import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Activity, Zap, TrendingUp, AlertTriangle, RefreshCw, Download } from 'lucide-react';

export default function AITokenMonitoring() {
    const navigate = useNavigate();
    const [timeRange, setTimeRange] = useState('today');

    const tokenStats = [
        { service: 'Gemini API', used: 78450, limit: 100000, percentage: 78, color: '#9333EA', bgColor: '#F3E8FF', status: 'warning' },
        { service: 'Text-to-Speech', used: 45200, limit: 80000, percentage: 56, color: '#3B82F6', bgColor: '#DBEAFE', status: 'healthy' },
        { service: 'Speech-to-Text', used: 32100, limit: 60000, percentage: 53, color: '#10B981', bgColor: '#D1FAE5', status: 'healthy' },
        { service: 'Image Generation', used: 8900, limit: 10000, percentage: 89, color: '#F59E0B', bgColor: '#FEF3C7', status: 'critical' }
    ];

    const usageByHour = [
        { hour: '00:00', gemini: 120, tts: 80, stt: 60 },
        { hour: '04:00', gemini: 90, tts: 50, stt: 40 },
        { hour: '08:00', gemini: 450, tts: 320, stt: 280 },
        { hour: '12:00', gemini: 680, tts: 520, stt: 450 },
        { hour: '16:00', gemini: 890, tts: 640, stt: 580 },
        { hour: '20:00', gemini: 520, tts: 380, stt: 340 }
    ];

    const recentAlerts = [
        { type: 'warning', message: 'Image Generation API approaching limit (89%)', time: '5 min ago', color: '#F59E0B' },
        { type: 'info', message: 'Gemini API usage spike detected', time: '1 hour ago', color: '#3B82F6' },
        { type: 'success', message: 'Token limits reset successfully', time: '2 hours ago', color: '#10B981' }
    ];

    const maxUsage = Math.max(...usageByHour.flatMap(h => [h.gemini, h.tts, h.stt]));

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
                                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                                    <Activity className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">AI Token Monitoring</h1>
                                    <p className="text-xs text-gray-500">Track API usage and system health</p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
                            <select
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                            >
                                <option value="today">Today</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                            </select>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <RefreshCw className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md">
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Token Usage Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {tokenStats.map((stat, index) => {
                        const statusColors = {
                            healthy: '#10B981',
                            warning: '#F59E0B',
                            critical: '#EF4444'
                        };
                        const statusColor = statusColors[stat.status];

                        return (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: stat.bgColor }}
                                    >
                                        <Zap className="w-6 h-6" style={{ color: stat.color }} />
                                    </div>
                                    <div
                                        className={`w-3 h-3 rounded-full ${stat.status === 'healthy' ? 'animate-pulse' : ''}`}
                                        style={{ backgroundColor: statusColor }}
                                    />
                                </div>

                                <h3 className="font-bold text-gray-900 mb-2">{stat.service}</h3>

                                <div className="mb-3">
                                    <div className="flex items-center justify-between text-sm mb-1">
                                        <span className="text-gray-600">Usage</span>
                                        <span className="font-semibold text-gray-900">{stat.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${stat.percentage}%`,
                                                backgroundColor: stat.color
                                            }}
                                        />
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600">
                                    {stat.used.toLocaleString()} / {stat.limit.toLocaleString()} tokens
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Usage Chart */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                <h2 className="text-lg font-bold text-gray-900">Usage Over Time</h2>
                            </div>
                            <div className="flex gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-600" />
                                    <span className="text-gray-600">Gemini</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                                    <span className="text-gray-600">TTS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-600" />
                                    <span className="text-gray-600">STT</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 flex items-end justify-between gap-2">
                            {usageByHour.map((data, index) => {
                                const geminiHeight = (data.gemini / maxUsage) * 100;
                                const ttsHeight = (data.tts / maxUsage) * 100;
                                const sttHeight = (data.stt / maxUsage) * 100;

                                return (
                                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                        <div className="w-full flex items-end justify-center gap-1 flex-1">
                                            <div className="relative group flex-1">
                                                <div
                                                    className="w-full bg-purple-600 rounded-t transition-all duration-300 hover:bg-purple-700"
                                                    style={{ height: `${geminiHeight}%` }}
                                                />
                                            </div>
                                            <div className="relative group flex-1">
                                                <div
                                                    className="w-full bg-blue-600 rounded-t transition-all duration-300 hover:bg-blue-700"
                                                    style={{ height: `${ttsHeight}%` }}
                                                />
                                            </div>
                                            <div className="relative group flex-1">
                                                <div
                                                    className="w-full bg-green-600 rounded-t transition-all duration-300 hover:bg-green-700"
                                                    style={{ height: `${sttHeight}%` }}
                                                />
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-gray-600">{data.hour}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Alerts */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            <h2 className="text-lg font-bold text-gray-900">Recent Alerts</h2>
                        </div>

                        <div className="space-y-3">
                            {recentAlerts.map((alert, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg border-l-4"
                                    style={{
                                        backgroundColor: alert.color + '15',
                                        borderLeftColor: alert.color
                                    }}
                                >
                                    <p className="text-sm font-medium text-gray-900 mb-1">{alert.message}</p>
                                    <p className="text-xs text-gray-600">{alert.time}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 className="font-semibold text-gray-900 mb-2">System Health</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">API Uptime</span>
                                    <span className="font-semibold text-green-600">99.8%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Avg Response</span>
                                    <span className="font-semibold text-blue-600">1.8s</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Error Rate</span>
                                    <span className="font-semibold text-green-600">0.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cost Estimation */}
                <div className="mt-6 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Cost Estimation (Today)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                            <p className="text-sm text-gray-600 mb-1">Gemini API</p>
                            <p className="text-2xl font-bold text-purple-600">$23.45</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-sm text-gray-600 mb-1">Text-to-Speech</p>
                            <p className="text-2xl font-bold text-blue-600">$12.80</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                            <p className="text-sm text-gray-600 mb-1">Speech-to-Text</p>
                            <p className="text-2xl font-bold text-green-600">$9.60</p>
                        </div>
                        <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <p className="text-sm text-gray-600 mb-1">Total Cost</p>
                            <p className="text-2xl font-bold text-amber-600">$45.85</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
