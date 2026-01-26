import { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Plus, Edit, Trash2, MessageCircle, Play, Save, Clock, User } from 'lucide-react';

const AIStoryArchitect = () => {
    const [storyScripts, setStoryScripts] = useState([
        {
            id: 1,
            time: '0:00',
            type: 'dialogue',
            content: 'Welcome to our math adventure! Today we\'re going to learn about addition.',
            character: 'Sparky'
        },
        {
            id: 2,
            time: '0:15',
            type: 'breakpoint',
            content: 'Ask student: "What is 2 + 2?"',
            expectedAnswer: '4'
        },
        {
            id: 3,
            time: '0:30',
            type: 'dialogue',
            content: 'Great job! Let\'s try something a bit harder.',
            character: 'Sparky'
        },
        {
            id: 4,
            time: '0:45',
            type: 'breakpoint',
            content: 'Ask student: "Can you solve 5 + 3?"',
            expectedAnswer: '8'
        },
        {
            id: 5,
            time: '1:00',
            type: 'dialogue',
            content: 'Wonderful! You\'re doing amazing!',
            character: 'Sparky'
        }
    ]);

    const [editingId, setEditingId] = useState(null);

    return (
        <DashboardLayout
            title="AI Story Architect"
            subtitle="Create interactive learning stories with AI breakpoints"
            role="teacher"
        >
            <div className="max-w-5xl">
                {/* Story Header */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Math Adventure - Addition Basics</h2>
                            <p className="text-gray-500">Grade: 1-2 • Duration: ~5 minutes • Subject: Mathematics</p>
                        </div>
                        <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition-all flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            Preview Story
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Total Scenes</p>
                            <p className="text-2xl font-bold text-gray-800">5</p>
                        </div>
                        <div className="flex-1 bg-purple-50 rounded-lg p-4 border border-purple-100">
                            <p className="text-sm text-purple-600 mb-1">Breakpoints</p>
                            <p className="text-2xl font-bold text-purple-600">2</p>
                        </div>
                        <div className="flex-1 bg-green-50 rounded-lg p-4 border border-green-100">
                            <p className="text-sm text-green-600 mb-1">Status</p>
                            <p className="text-sm font-semibold text-green-600">Published</p>
                        </div>
                    </div>
                </div>

                {/* Timeline View */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Story Timeline</h3>
                        <button className="px-4 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition-all flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Add Scene
                        </button>
                    </div>

                    <div className="space-y-0">
                        {storyScripts.map((script, index) => (
                            <div key={script.id} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-[9px] ${script.type === 'breakpoint' ? 'bg-purple-500' : 'bg-blue-500'
                                    }`}></div>

                                <div className={`rounded-xl p-5 ml-4 ${script.type === 'breakpoint'
                                        ? 'bg-purple-50 border-2 border-purple-200'
                                        : 'bg-gray-50 border border-gray-200'
                                    }`}>
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-white rounded-lg text-sm font-mono text-gray-700 border border-gray-200 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {script.time}
                                            </span>
                                            {script.type === 'breakpoint' ? (
                                                <span className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                                                    <MessageCircle className="w-4 h-4" />
                                                    Interactive Breakpoint
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-semibold flex items-center gap-2">
                                                    <User className="w-4 h-4" />
                                                    Dialogue - {script.character}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setEditingId(script.id)}
                                                className="p-2 hover:bg-white rounded-lg transition-all border border-transparent hover:border-gray-200"
                                            >
                                                <Edit className="w-4 h-4 text-gray-500 hover:text-purple-600" />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg transition-all border border-transparent hover:border-gray-200">
                                                <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    {editingId === script.id ? (
                                        <div className="space-y-3">
                                            <textarea
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                                                defaultValue={script.content}
                                            />
                                            {script.type === 'breakpoint' && (
                                                <input
                                                    type="text"
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    placeholder="Expected answer"
                                                    defaultValue={script.expectedAnswer}
                                                />
                                            )}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setEditingId(null)}
                                                    className="px-4 py-2 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 flex items-center gap-2"
                                                >
                                                    <Save className="w-4 h-4" />
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() => setEditingId(null)}
                                                    className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                {script.content}
                                            </p>
                                            {script.type === 'breakpoint' && script.expectedAnswer && (
                                                <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                                                    <p className="text-sm text-gray-500 mb-1">Expected Answer:</p>
                                                    <p className="text-gray-800 font-semibold">{script.expectedAnswer}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Breakpoint Helper */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 text-purple-500" />
                            Interactive Breakpoints
                        </h4>
                        <p className="text-sm text-gray-600">
                            Add breakpoints to pause the story and ask students questions. The AI will wait for their response and provide feedback based on their answer.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AIStoryArchitect;
