import { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Save, Sparkles, Volume2, Database, Tag, User, Smile, Brain, Rocket, Zap } from 'lucide-react';

const MascotPersonaStudio = () => {
    const [persona, setPersona] = useState({
        name: 'Sparky',
        voiceTone: 'friendly',
        personality: 'encouraging',
        knowledgeBase: ['math', 'science', 'reading']
    });

    const voiceTones = [
        { value: 'friendly', label: 'Friendly & Warm', description: 'Welcoming and approachable' },
        { value: 'energetic', label: 'Energetic & Fun', description: 'Upbeat and exciting' },
        { value: 'calm', label: 'Calm & Patient', description: 'Soothing and reassuring' },
        { value: 'professional', label: 'Professional', description: 'Clear and educational' }
    ];

    const personalities = [
        { value: 'encouraging', label: 'Encouraging', icon: Smile },
        { value: 'playful', label: 'Playful', icon: Sparkles },
        { value: 'wise', label: 'Wise Mentor', icon: Brain },
        { value: 'adventurous', label: 'Adventurous', icon: Rocket }
    ];

    const availableTags = [
        'math', 'science', 'reading', 'writing', 'history',
        'geography', 'art', 'music', 'coding', 'languages'
    ];

    const toggleTag = (tag) => {
        setPersona(prev => ({
            ...prev,
            knowledgeBase: prev.knowledgeBase.includes(tag)
                ? prev.knowledgeBase.filter(t => t !== tag)
                : [...prev.knowledgeBase, tag]
        }));
    };

    return (
        <DashboardLayout
            title="Mascot Persona Studio"
            subtitle="Customize your AI mascot's personality and knowledge"
            role="teacher"
        >
            <div className="max-w-4xl">
                {/* Preview Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center shadow">
                            <Sparkles className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{persona.name}</h2>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100">
                                    {voiceTones.find(v => v.value === persona.voiceTone)?.label}
                                </span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                                    {personalities.find(p => p.value === persona.personality)?.label}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Basic Information */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Basic Information</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mascot Name</label>
                            <input
                                type="text"
                                value={persona.name}
                                onChange={(e) => setPersona({ ...persona, name: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="Enter mascot name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Character Avatar</label>
                            <div className="grid grid-cols-6 gap-3">
                                {[Sparkles, Smile, Brain, Rocket, User, Zap].map((Icon, idx) => (
                                    <button
                                        key={idx}
                                        className="aspect-square bg-gray-50 hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-400 rounded-xl flex items-center justify-center transition-all"
                                    >
                                        <Icon className="w-8 h-8 text-gray-600" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Voice Tone */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Volume2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Voice Tone</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {voiceTones.map((tone) => (
                            <button
                                key={tone.value}
                                onClick={() => setPersona({ ...persona, voiceTone: tone.value })}
                                className={`p-4 rounded-xl border-2 transition-all text-left ${persona.voiceTone === tone.value
                                    ? 'border-purple-500 bg-purple-50'
                                    : 'border-gray-200 bg-white hover:border-purple-300'
                                    }`}
                            >
                                <h4 className="font-semibold text-gray-800 mb-1">{tone.label}</h4>
                                <p className="text-sm text-gray-500">{tone.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Personality */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                            <Smile className="w-5 h-5 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Personality Type</h3>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {personalities.map((p) => {
                            const Icon = p.icon;
                            return (
                                <button
                                    key={p.value}
                                    onClick={() => setPersona({ ...persona, personality: p.value })}
                                    className={`p-4 rounded-xl border-2 transition-all ${persona.personality === p.value
                                        ? 'border-purple-500 bg-purple-50'
                                        : 'border-gray-200 bg-white hover:border-purple-300'
                                        }`}
                                >
                                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-xl flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-800 text-center">{p.label}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Knowledge Base */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Database className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Knowledge Base</h3>
                    </div>

                    <p className="text-gray-500 mb-4">
                        Select the subjects your mascot should be knowledgeable about
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {availableTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${persona.knowledgeBase.includes(tag)
                                    ? 'bg-purple-500 text-white shadow'
                                    : 'bg-gray-50 border border-gray-200 text-gray-700 hover:border-purple-400'
                                    }`}
                            >
                                <Tag className="w-4 h-4" />
                                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end gap-4">
                    <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all">
                        Cancel
                    </button>
                    <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition-all flex items-center gap-2">
                        <Save className="w-5 h-5" />
                        Save Persona
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MascotPersonaStudio;
