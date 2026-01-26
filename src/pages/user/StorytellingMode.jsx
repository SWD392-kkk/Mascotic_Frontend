import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Mic, MicOff, Volume2, VolumeX, Pause, Play, Home, Settings, Maximize, Minimize } from 'lucide-react';

export default function StorytellingMode() {
    const navigate = useNavigate();
    const { storyId } = useParams();
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [subtitle, setSubtitle] = useState('');
    const [userInput, setUserInput] = useState('');
    const mascotRef = useRef(null);

    // Simulated mascot data
    const [mascot] = useState({
        name: 'Cosmo',
        role: 'Space Explorer',
        color: '#3B82F6' // Blue
    });

    // Simulated story
    const [story] = useState({
        title: 'Journey to Mars',
        topic: 'Space Exploration',
        duration: '12 min'
    });

    // Simulated conversation
    const [messages, setMessages] = useState([
        { type: 'mascot', text: 'Hello! I\'m Cosmo, your space explorer guide! Ready to journey to Mars?' }
    ]);

    useEffect(() => {
        // Simulate mascot speaking
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.type === 'mascot') {
                setIsSpeaking(true);
                setSubtitle(lastMessage.text);

                // Simulate speech duration
                const timer = setTimeout(() => {
                    setIsSpeaking(false);
                    setSubtitle('');
                }, 3000);

                return () => clearTimeout(timer);
            }
        }
    }, [messages]);

    const handleVoiceInput = () => {
        if (!isListening) {
            setIsListening(true);
            setUserInput('Listening...');

            // Simulate voice recognition
            setTimeout(() => {
                const simulatedInput = 'How far is Mars from Earth?';
                setUserInput(simulatedInput);
                setMessages([...messages, { type: 'user', text: simulatedInput }]);
                setIsListening(false);

                // Simulate AI response
                setTimeout(() => {
                    const response = 'Great question! Mars is about 225 million kilometers away from Earth. That\'s really far! It would take about 7 months to travel there with current spacecraft. Isn\'t that amazing?';
                    setMessages(prev => [...prev, { type: 'mascot', text: response }]);
                }, 1500);
            }, 2000);
        } else {
            setIsListening(false);
            setUserInput('');
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-purple-900 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse" />
                <div className="absolute w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Floating Stars */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Top Control Bar */}
            <div className="absolute top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                        >
                            <Home className="w-5 h-5 text-white" />
                        </button>
                        <div className="text-white">
                            <h1 className="font-bold">{story.title}</h1>
                            <p className="text-xs text-white/70">with {mascot.name}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                        >
                            {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                        </button>
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                        >
                            {isFullscreen ? <Minimize className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
                        </button>
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm">
                            <Settings className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6">
                {/* 3D Mascot Viewport */}
                <div className="relative w-full max-w-2xl aspect-square mb-8">
                    <div
                        ref={mascotRef}
                        className={`w-full h-full rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden ${isSpeaking ? 'animate-pulse' : ''
                            }`}
                        style={{ backgroundColor: mascot.color }}
                    >
                        {/* Placeholder for 3D Mascot - Replace with actual 3D renderer */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-48 h-48 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-8xl">🚀</span>
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-2">{mascot.name}</h2>
                                <p className="text-white/80">{mascot.role}</p>
                            </div>
                        </div>

                        {/* Speaking Animation Indicator */}
                        {isSpeaking && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-white rounded-full animate-pulse"
                                        style={{
                                            height: `${Math.random() * 20 + 10}px`,
                                            animationDelay: `${i * 0.1}s`
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Subtitle Display */}
                    {subtitle && (
                        <div className="absolute -bottom-4 left-0 right-0 mx-auto max-w-xl">
                            <div className="bg-black/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/10">
                                <p className="text-white text-center text-lg leading-relaxed">{subtitle}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Voice Interaction Controls */}
                <div className="w-full max-w-2xl mt-12">
                    <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10">
                        {/* User Input Display */}
                        {userInput && (
                            <div className="mb-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                                <p className="text-white text-center">{userInput}</p>
                            </div>
                        )}

                        {/* Voice Button */}
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={handleVoiceInput}
                                disabled={isSpeaking}
                                className={`relative group ${isListening
                                        ? 'w-24 h-24 bg-red-500 animate-pulse'
                                        : 'w-20 h-20 bg-purple-600 hover:bg-purple-700 hover:scale-110'
                                    } rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isListening ? (
                                    <MicOff className="w-10 h-10 text-white" />
                                ) : (
                                    <Mic className="w-8 h-8 text-white" />
                                )}

                                {/* Ripple Effect */}
                                {isListening && (
                                    <>
                                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                                        <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
                                    </>
                                )}
                            </button>

                            <div className="text-white">
                                <p className="font-semibold">
                                    {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Tap to Talk'}
                                </p>
                                <p className="text-sm text-white/70">
                                    {isListening ? 'Ask your question' : isSpeaking ? 'Please wait' : 'Voice-to-Voice interaction'}
                                </p>
                            </div>
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="mt-6 flex items-center justify-center gap-3">
                            <button
                                onClick={() => setIsPaused(!isPaused)}
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors flex items-center gap-2 border border-white/10"
                            >
                                {isPaused ? <Play className="w-4 h-4 text-white" /> : <Pause className="w-4 h-4 text-white" />}
                                <span className="text-white text-sm">{isPaused ? 'Resume' : 'Pause'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Conversation History (Minimized) */}
                <div className="absolute bottom-6 right-6 max-w-xs">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 max-h-64 overflow-y-auto border border-white/10">
                        <h3 className="text-white font-semibold mb-3 text-sm">Conversation</h3>
                        <div className="space-y-2">
                            {messages.slice(-3).map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded-lg text-xs ${msg.type === 'mascot'
                                            ? 'bg-purple-600/50 text-white border border-purple-500/30'
                                            : 'bg-blue-600/50 text-white ml-4 border border-blue-500/30'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
