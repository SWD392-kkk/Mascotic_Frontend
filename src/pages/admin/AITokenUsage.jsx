import DashboardLayout from '../../components/layout/DashboardLayout';
import { Zap, TrendingUp, TrendingDown, Activity, DollarSign, ArrowUp } from 'lucide-react';

const AITokenUsage = () => {
    const tokenStats = [
        { service: "Gemini API", used: 2847500, limit: 5000000, cost: "$142.38", trend: "up" },
        { service: "Text-to-Speech", used: 1234000, limit: 3000000, cost: "$61.70", trend: "up" },
        { service: "Speech-to-Text", used: 987000, limit: 2000000, cost: "$49.35", trend: "down" },
        { service: "Image Generation", used: 45000, limit: 100000, cost: "$22.50", trend: "up" }
    ];

    const dailyUsage = [
        { date: "Jan 17", gemini: 145000, tts: 62000, stt: 48000 },
        { date: "Jan 18", gemini: 158000, tts: 68000, stt: 52000 },
        { date: "Jan 19", gemini: 162000, tts: 71000, stt: 49000 },
        { date: "Jan 20", gemini: 171000, tts: 74000, stt: 51000 },
        { date: "Jan 21", gemini: 168000, tts: 69000, stt: 47000 },
        { date: "Jan 22", gemini: 182000, tts: 76000, stt: 54000 },
        { date: "Jan 23", gemini: 195000, tts: 82000, stt: 56000 }
    ];

    const topConsumers = [
        { school: "Riverside Academy", tokens: 485000, cost: "$24.25" },
        { school: "Greenwood Elementary", tokens: 342000, cost: "$17.10" },
        { school: "Sunset High School", tokens: 298000, cost: "$14.90" },
        { school: "Maple Leaf School", tokens: 245000, cost: "$12.25" },
        { school: "Oak Valley Institute", tokens: 187000, cost: "$9.35" }
    ];

    return (
        <DashboardLayout
            title="AI Token Usage"
            subtitle="Monitor API consumption and costs"
            role="admin"
        >
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">5.11M</h3>
                    <p className="text-gray-500 text-sm">Total Tokens Used</p>
                    <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
                        <ArrowUp className="w-3 h-3" />
                        +15% from last week
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">$275.93</h3>
                    <p className="text-gray-500 text-sm">Total Cost (MTD)</p>
                    <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
                        <ArrowUp className="w-3 h-3" />
                        +12% from last month
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">730K</h3>
                    <p className="text-gray-500 text-sm">Avg Daily Usage</p>
                    <p className="text-orange-600 text-xs mt-2 flex items-center gap-1">
                        <ArrowUp className="w-3 h-3" />
                        +8% from yesterday
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">51%</h3>
                    <p className="text-gray-500 text-sm">Usage vs Limit</p>
                    <p className="text-gray-500 text-xs mt-2">Within budget</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Service Breakdown */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Service Breakdown</h3>

                    <div className="space-y-6">
                        {tokenStats.map((stat, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 rounded-lg">
                                            <Zap className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{stat.service}</p>
                                            <p className="text-sm text-gray-500">
                                                {stat.used.toLocaleString()} / {stat.limit.toLocaleString()} tokens
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-800">{stat.cost}</p>
                                        <div className={`flex items-center gap-1 text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'
                                            }`}>
                                            {stat.trend === 'up' ? (
                                                <TrendingUp className="w-3 h-3" />
                                            ) : (
                                                <TrendingDown className="w-3 h-3" />
                                            )}
                                            {stat.trend === 'up' ? '+5%' : '-3%'}
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all"
                                        style={{ width: `${(stat.used / stat.limit) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 text-right">
                                    {Math.round((stat.used / stat.limit) * 100)}% used
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Consumers */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Top Consumers</h3>

                    <div className="space-y-4">
                        {topConsumers.map((consumer, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="font-semibold text-gray-800 text-sm flex-1 min-w-0 truncate">
                                        {consumer.school}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between ml-11">
                                    <span className="text-xs text-gray-500">
                                        {consumer.tokens.toLocaleString()} tokens
                                    </span>
                                    <span className="text-sm font-bold text-green-600">
                                        {consumer.cost}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Daily Usage Chart */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">7-Day Usage Trend</h3>

                <div className="h-80 bg-gray-50 rounded-lg p-6 border border-gray-100">
                    {/* Simple Bar Chart Visualization */}
                    <div className="h-full flex items-end justify-between gap-2">
                        {dailyUsage.map((day, index) => {
                            const total = day.gemini + day.tts + day.stt;
                            const maxTotal = Math.max(...dailyUsage.map(d => d.gemini + d.tts + d.stt));
                            const height = (total / maxTotal) * 100;

                            return (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full flex flex-col gap-1" style={{ height: `${height}%` }}>
                                        <div
                                            className="w-full bg-purple-500 rounded-t"
                                            style={{ height: `${(day.gemini / total) * 100}%` }}
                                        ></div>
                                        <div
                                            className="w-full bg-pink-500"
                                            style={{ height: `${(day.tts / total) * 100}%` }}
                                        ></div>
                                        <div
                                            className="w-full bg-blue-500 rounded-b"
                                            style={{ height: `${(day.stt / total) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500">{day.date}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-sm text-gray-600">Gemini API</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-pink-500 rounded"></div>
                        <span className="text-sm text-gray-600">Text-to-Speech</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-sm text-gray-600">Speech-to-Text</span>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AITokenUsage;
