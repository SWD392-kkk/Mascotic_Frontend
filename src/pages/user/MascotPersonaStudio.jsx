import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Sparkles, Mic, Brain, Palette, Plus, Trash2, Edit2 } from 'lucide-react';

export default function MascotPersonaStudio() {
    const navigate = useNavigate();
    const [selectedMascot, setSelectedMascot] = useState(null);
    const [mascots, setMascots] = useState([
        {
            id: 1,
            name: 'Cosmo',
            role: 'Space Explorer',
            voiceTone: 'Enthusiastic & Curious',
            knowledgeBase: 'Astronomy, Physics, Space Exploration',
            personality: 'Adventurous, encouraging, loves asking "what if" questions',
            color: '#3B82F6' // Blue
        },
        {
            id: 2,
            name: 'Aqua',
            role: 'Ocean Guardian',
            voiceTone: 'Calm & Soothing',
            knowledgeBase: 'Marine Biology, Ocean Conservation, Water Cycle',
            personality: 'Gentle, patient, speaks in flowing metaphors',
            color: '#06B6D4' // Cyan
        },
        {
            id: 3,
            name: 'Mathilda',
            role: 'Math Wizard',
            voiceTone: 'Playful & Energetic',
            knowledgeBase: 'Mathematics, Logic, Problem Solving',
            personality: 'Witty, loves puzzles, makes math fun and relatable',
            color: '#EC4899' // Pink
        }
    ]);

    const [formData, setFormData] = useState({
        name: '',
        role: '',
        voiceTone: '',
        knowledgeBase: '',
        personality: '',
        color: '#9333EA' // Purple
    });

    const voiceToneOptions = [
        'Enthusiastic & Curious',
        'Calm & Soothing',
        'Playful & Energetic',
        'Wise & Thoughtful',
        'Cheerful & Friendly'
    ];

    const knowledgeBaseOptions = [
        'Science & Technology',
        'Mathematics & Logic',
        'Language & Literature',
        'History & Culture',
        'Arts & Creativity',
        'Nature & Environment',
        'Space & Astronomy',
        'Custom Topic'
    ];

    const colorOptions = [
        { name: 'Purple', value: '#9333EA' },
        { name: 'Blue', value: '#3B82F6' },
        { name: 'Pink', value: '#EC4899' },
        { name: 'Green', value: '#10B981' },
        { name: 'Amber', value: '#F59E0B' }
    ];

    const handleCreateMascot = () => {
        if (formData.name && formData.role) {
            const newMascot = {
                id: mascots.length + 1,
                ...formData
            };
            setMascots([...mascots, newMascot]);
            setFormData({
                name: '',
                role: '',
                voiceTone: '',
                knowledgeBase: '',
                personality: '',
                color: '#9333EA'
            });
            setSelectedMascot(null);
        }
    };

    const handleEditMascot = (mascot) => {
        setSelectedMascot(mascot.id);
        setFormData(mascot);
    };

    const handleDeleteMascot = (id) => {
        setMascots(mascots.filter(m => m.id !== id));
    };

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
                                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Mascot Persona Studio</h1>
                                    <p className="text-xs text-gray-500">Create & customize your AI mascots</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Mascot List */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-gray-900">Your Mascots</h2>
                                <button
                                    onClick={() => {
                                        setSelectedMascot('new');
                                        setFormData({
                                            name: '',
                                            role: '',
                                            voiceTone: '',
                                            knowledgeBase: '',
                                            personality: '',
                                            color: '#9333EA'
                                        });
                                    }}
                                    className="p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all shadow-md"
                                >
                                    <Plus className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            <div className="space-y-3">
                                {mascots.map((mascot) => (
                                    <div
                                        key={mascot.id}
                                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${selectedMascot === mascot.id
                                                ? 'border-purple-500 bg-purple-50'
                                                : 'border-gray-200 hover:border-purple-300'
                                            }`}
                                        onClick={() => handleEditMascot(mascot)}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: mascot.color }}
                                            >
                                                <Sparkles className="w-6 h-6 text-white" />
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteMascot(mascot.id);
                                                }}
                                                className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4 text-red-500" />
                                            </button>
                                        </div>
                                        <h3 className="font-bold text-gray-900">{mascot.name}</h3>
                                        <p className="text-sm text-gray-600">{mascot.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mascot Editor */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <div className="flex items-center gap-2 mb-6">
                                <Edit2 className="w-6 h-6 text-purple-600" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {selectedMascot === 'new' ? 'Create New Mascot' : selectedMascot ? 'Edit Mascot' : 'Select a Mascot'}
                                </h2>
                            </div>

                            {(selectedMascot === 'new' || selectedMascot) ? (
                                <div className="space-y-6">
                                    {/* Name & Role */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                                <Sparkles className="w-4 h-4 text-purple-600" />
                                                Mascot Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g., Cosmo"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                                <Brain className="w-4 h-4 text-purple-600" />
                                                Role/Character
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                placeholder="e.g., Space Explorer"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Voice Tone */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                            <Mic className="w-4 h-4 text-purple-600" />
                                            Voice Tone
                                        </label>
                                        <select
                                            value={formData.voiceTone}
                                            onChange={(e) => setFormData({ ...formData, voiceTone: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                        >
                                            <option value="">Select voice tone...</option>
                                            {voiceToneOptions.map((tone) => (
                                                <option key={tone} value={tone}>{tone}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Knowledge Base */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                            <Brain className="w-4 h-4 text-purple-600" />
                                            Knowledge Base
                                        </label>
                                        <select
                                            value={formData.knowledgeBase}
                                            onChange={(e) => setFormData({ ...formData, knowledgeBase: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                        >
                                            <option value="">Select knowledge domain...</option>
                                            {knowledgeBaseOptions.map((kb) => (
                                                <option key={kb} value={kb}>{kb}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Personality */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                            <Sparkles className="w-4 h-4 text-purple-600" />
                                            Personality Traits
                                        </label>
                                        <textarea
                                            value={formData.personality}
                                            onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
                                            placeholder="Describe the mascot's personality, speaking style, and teaching approach..."
                                            rows={4}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Color Theme */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                                            <Palette className="w-4 h-4 text-purple-600" />
                                            Color Theme
                                        </label>
                                        <div className="flex gap-3">
                                            {colorOptions.map((color) => (
                                                <button
                                                    key={color.value}
                                                    onClick={() => setFormData({ ...formData, color: color.value })}
                                                    className={`w-16 h-16 rounded-xl transition-all ${formData.color === color.value
                                                            ? 'ring-4 ring-purple-500 ring-offset-2 scale-110'
                                                            : 'hover:scale-105'
                                                        }`}
                                                    style={{ backgroundColor: color.value }}
                                                    title={color.name}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-4">
                                        <button
                                            onClick={handleCreateMascot}
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-md"
                                        >
                                            <Save className="w-5 h-5" />
                                            {selectedMascot === 'new' ? 'Create Mascot' : 'Save Changes'}
                                        </button>
                                        <button
                                            onClick={() => setSelectedMascot(null)}
                                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="w-10 h-10 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Mascot Selected</h3>
                                    <p className="text-gray-600">Select a mascot from the list or create a new one</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
