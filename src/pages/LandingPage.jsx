import { Link } from 'react-router-dom';
import { Sparkles, Users, Mic, ArrowRight, Zap, MessageCircle, BookOpen } from 'lucide-react';

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
                        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-purple-600">MASCOTIC</h1>
                                <p className="text-xs text-gray-500">AI Meta Human for Education</p>
                            </div>
                        </Link>

                        <div className="flex items-center gap-3">
                            <Link to="/dashboard" className="px-5 py-2.5 border-2 border-purple-200 text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-all">
                                Dashboard
                            </Link>
                            <Link to="/admin" className="px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all shadow-md">
                                Admin Portal
                            </Link>
                        </div>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center py-16">
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm border border-purple-200">
                                🎯 Real-Time AI Interaction • Voice-to-Voice Learning
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            AI Mascots That
                            <br />
                            <span className="text-purple-600">Listen & Respond</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Transform education with living virtual teaching assistants.
                            Create stories, ask questions, and learn through natural conversation with your AI mascot.
                        </p>

                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Link to="/story" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg flex items-center gap-2 text-lg group">
                                <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Start Storytelling
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link to="/dashboard" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all text-lg">
                                Explore Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h3>
                        <p className="text-gray-600 max-w-xl mx-auto">Real-time interaction that brings digital mascots to life</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <BookOpen className="w-7 h-7 text-purple-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Generative Storytelling</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Transform lesson topics into engaging story arcs led by your AI Mascot with consistent narratives and adaptive content.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-7 h-7 text-blue-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Voice-to-Voice Interaction</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Students can interrupt, ask questions, and respond to the mascot via voice for a true dialogue-based learning experience.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                <Sparkles className="w-7 h-7 text-amber-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Persona Persistence</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Mascots maintain consistent visual identity and personality across all educational modules for authentic bonding.
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
                        <p className="text-gray-600">Choose your portal to begin</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link to="/dashboard" className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:shadow-2xl hover:border-purple-300 transition-all">
                                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                                    <Mic className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">User Dashboard</h4>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Create mascot personas, start storytelling sessions, and track your learning journey with AI-powered analytics.
                                </p>
                                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                                    Explore Dashboard
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/admin" className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Admin System</h4>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Manage users, monitor AI token usage, oversee mascot library, and access business intelligence reports.
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                                    Admin Portal
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
