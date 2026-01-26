import { Link } from 'react-router-dom';
import { Sparkles, Users, GraduationCap, ArrowRight, Star, Zap, Heart, BookOpen } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Subtle Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3"></div>
                </div>

                <div className="container mx-auto px-6 py-8 relative z-10">
                    <nav className="flex items-center justify-between mb-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center shadow">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800">Mascotic</h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link to="/student" className="px-5 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all">
                                Student Login
                            </Link>
                            <Link to="/teacher" className="px-5 py-2.5 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-all shadow">
                                Teacher Portal
                            </Link>
                        </div>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center py-16">
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-purple-50 text-purple-600 font-medium rounded-full text-sm border border-purple-100">
                                🚀 AI-Powered EdTech Platform
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Learning Made
                            <br />
                            <span className="text-purple-500">Magical & Fun</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Where kids interact with AI mascots in an immersive learning experience.
                            Personalized education powered by cutting-edge AI technology.
                        </p>

                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Link to="/student" className="px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-all shadow-lg flex items-center gap-2 text-lg">
                                <Sparkles className="w-5 h-5" />
                                Start Learning
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <Link to="/admin" className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all text-lg">
                                Admin Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Mascotic?</h3>
                        <p className="text-gray-600 max-w-xl mx-auto">Built specifically for young learners with safety and engagement in mind</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7 text-pink-500" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Child-Friendly AI</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Safe, engaging AI mascots designed specifically for young learners with age-appropriate interactions.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <BookOpen className="w-7 h-7 text-blue-500" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Interactive Stories</h4>
                            <p className="text-gray-600 leading-relaxed">
                                AI-powered story mode with interactive breakpoints that adapt to each student's learning pace.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-yellow-500" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Analytics</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Comprehensive dashboards for teachers to monitor student progress and engagement metrics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Role Cards */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Started</h3>
                        <p className="text-gray-600">Choose your role to begin</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <Link to="/student" className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all">
                                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Students</h4>
                                <p className="text-gray-600 mb-4">
                                    Interactive learning with your AI friend. Play, learn, and grow!
                                </p>
                                <div className="flex items-center gap-2 text-purple-500 font-medium">
                                    Start Learning
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/teacher" className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all">
                                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Teachers</h4>
                                <p className="text-gray-600 mb-4">
                                    Create personas, design stories, and track student progress.
                                </p>
                                <div className="flex items-center gap-2 text-blue-500 font-medium">
                                    Teacher Portal
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/admin" className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all">
                                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Administrators</h4>
                                <p className="text-gray-600 mb-4">
                                    Manage subscriptions, monitor usage, and oversee the platform.
                                </p>
                                <div className="flex items-center gap-2 text-orange-500 font-medium">
                                    Admin Portal
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-100 py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-500">
                        © 2026 Mascotic. Powered by AI. Built with ❤️ for young learners.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
