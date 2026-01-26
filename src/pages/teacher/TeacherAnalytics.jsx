import DashboardLayout from '../../components/layout/DashboardLayout';
import { TrendingUp, Users, MessageCircle, Clock, Award, Target, ArrowUp } from 'lucide-react';

const TeacherAnalytics = () => {
    const topQuestions = [
        { question: "What is 2 + 2?", count: 45, category: "Math" },
        { question: "How do plants grow?", count: 38, category: "Science" },
        { question: "What is a noun?", count: 32, category: "Language" },
        { question: "Tell me a story", count: 28, category: "General" },
        { question: "Can you help me with homework?", count: 24, category: "General" }
    ];

    const engagementData = [
        { student: "Emma Johnson", sessions: 24, avgTime: "18 min", completion: 92 },
        { student: "Liam Smith", sessions: 22, avgTime: "15 min", completion: 88 },
        { student: "Olivia Brown", sessions: 20, avgTime: "20 min", completion: 95 },
        { student: "Noah Davis", sessions: 18, avgTime: "12 min", completion: 85 },
        { student: "Ava Wilson", sessions: 16, avgTime: "16 min", completion: 90 }
    ];

    return (
        <DashboardLayout
            title="Analytics Dashboard"
            subtitle="Monitor student engagement and learning progress"
            role="teacher"
        >
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <ArrowUp className="w-4 h-4" />
                            12%
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">156</h3>
                    <p className="text-gray-500 text-sm">Active Students</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <ArrowUp className="w-4 h-4" />
                            8%
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">2,847</h3>
                    <p className="text-gray-500 text-sm">Total Sessions</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-pink-600" />
                        </div>
                        <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <ArrowUp className="w-4 h-4" />
                            3%
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">89%</h3>
                    <p className="text-gray-500 text-sm">Avg Completion</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                            <Award className="w-6 h-6 text-orange-600" />
                        </div>
                        <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <ArrowUp className="w-4 h-4" />
                            2 min
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">16.5</h3>
                    <p className="text-gray-500 text-sm">Avg Time (min)</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Student Engagement */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Student Engagement</h3>
                    </div>

                    <div className="space-y-4">
                        {engagementData.map((student, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {student.student.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{student.student}</p>
                                            <p className="text-sm text-gray-500">{student.sessions} sessions</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-gray-800">{student.avgTime}</p>
                                        <p className="text-xs text-gray-500">avg time</p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all"
                                        style={{ width: `${student.completion}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 text-right">{student.completion}% completion</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Questions Asked */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Top Questions Asked</h3>
                    </div>

                    <div className="space-y-3">
                        {topQuestions.map((item, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-800 font-medium mb-1 leading-snug">
                                            {item.question}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                Asked {item.count} times
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Weekly Activity Chart Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Weekly Activity</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                    <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">Chart visualization would go here</p>
                        <p className="text-sm text-gray-400 mt-1">(Integration with charting library)</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherAnalytics;
