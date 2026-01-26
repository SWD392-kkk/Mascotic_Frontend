import { useState } from 'react';
import { Mic, MicOff, BookOpen, Home, Star, Volume2, Book, Gamepad2, Trophy, Sparkles } from 'lucide-react';

const StudentInterface = () => {
    const [isListening, setIsListening] = useState(false);
    const [currentSubtitle, setCurrentSubtitle] = useState("Hi there! I'm your learning buddy. Let's have fun together!");

    const toggleVoice = () => {
        setIsListening(!isListening);
    };

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Subtle Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Top Navigation */}
            <nav className="relative z-10 flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm">
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </button>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl shadow-sm">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-lg text-gray-800">250</span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 py-8">
                <div className="max-w-4xl mx-auto">

                    {/* Mascot Viewport - Clean Card Style */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 mb-8 overflow-hidden">
                        {/* Mascot Area */}
                        <div className="bg-gradient-to-b from-purple-50 to-white p-12">
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto mb-6 relative">
                                    {/* Animated Ring */}
                                    <div className="absolute inset-0 bg-purple-100 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-3 bg-purple-50 rounded-full"></div>

                                    {/* Mascot Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-28 h-28 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Sparkles className="w-16 h-16 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    Sparky the Helper
                                </h2>
                                <p className="text-lg text-gray-500">
                                    Your AI Learning Friend
                                </p>
                            </div>
                        </div>

                        {/* Subtitle Bar */}
                        <div className="bg-gray-800 px-6 py-5 text-white">
                            <div className="flex items-center justify-center gap-3">
                                <Volume2 className="w-5 h-5 animate-pulse text-purple-300" />
                                <p className="text-lg font-medium">
                                    {currentSubtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Story Mode Button */}
                    <div className="flex justify-center mb-8">
                        <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3">
                            <BookOpen className="w-6 h-6" />
                            <span>Story Mode</span>
                        </button>
                    </div>

                    {/* Quick Actions - Clean Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group">
                            <div className="w-14 h-14 mx-auto mb-4 bg-blue-500 rounded-xl flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                                <Book className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                            <p className="font-bold text-lg text-gray-800 text-center">Learn</p>
                            <p className="text-sm text-gray-500 text-center mt-1">Explore lessons</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group">
                            <div className="w-14 h-14 mx-auto mb-4 bg-green-500 rounded-xl flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                                <Gamepad2 className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                            <p className="font-bold text-lg text-gray-800 text-center">Play</p>
                            <p className="text-sm text-gray-500 text-center mt-1">Fun games</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group">
                            <div className="w-14 h-14 mx-auto mb-4 bg-orange-500 rounded-xl flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                                <Trophy className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                            <p className="font-bold text-lg text-gray-800 text-center">Rewards</p>
                            <p className="text-sm text-gray-500 text-center mt-1">Your prizes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Voice Button */}
            <button
                onClick={toggleVoice}
                className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-all z-50 ${isListening
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                        : 'bg-purple-500 hover:bg-purple-600'
                    }`}
                aria-label="Voice to Voice"
            >
                {isListening ? (
                    <MicOff className="w-8 h-8 text-white" />
                ) : (
                    <Mic className="w-8 h-8 text-white" />
                )}
            </button>
        </div>
    );
};

export default StudentInterface;
