import { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Image, Download, Eye, Star, Search, Sparkles, Smile, Brain, Rocket, User, Zap } from 'lucide-react';

const MascotLibrary = () => {
    const [filterType, setFilterType] = useState('all');

    const mascotIcons = [Sparkles, Smile, Brain, Rocket, User, Zap, Star, Eye, Image, Download, Sparkles, Smile];

    const mascots = [
        { id: 1, name: 'Sparky', type: '3D', icon: Sparkles, rating: 4.8, downloads: 245, tags: ['Friendly', 'Educational'] },
        { id: 2, name: 'Buddy Bear', type: '2D', icon: Smile, rating: 4.9, downloads: 312, tags: ['Warm', 'Patient'] },
        { id: 3, name: 'Brain Bot', type: '3D', icon: Brain, rating: 4.7, downloads: 198, tags: ['Smart', 'Helpful'] },
        { id: 4, name: 'Rocket Rex', type: '2D', icon: Rocket, rating: 4.6, downloads: 167, tags: ['Energetic', 'Fun'] },
        { id: 5, name: 'Friendly Fox', type: '3D', icon: User, rating: 4.8, downloads: 223, tags: ['Calm', 'Gentle'] },
        { id: 6, name: 'Zappy', type: '2D', icon: Zap, rating: 4.9, downloads: 289, tags: ['Quick', 'Active'] },
        { id: 7, name: 'Starlight', type: '3D', icon: Star, rating: 4.5, downloads: 145, tags: ['Magical', 'Creative'] },
        { id: 8, name: 'Vision', type: '2D', icon: Eye, rating: 5.0, downloads: 401, tags: ['Wise', 'Observant'] },
        { id: 9, name: 'Pixel', type: '3D', icon: Image, rating: 4.7, downloads: 276, tags: ['Artistic', 'Modern'] },
        { id: 10, name: 'Dash', type: '3D', icon: Download, rating: 4.6, downloads: 189, tags: ['Fast', 'Efficient'] },
        { id: 11, name: 'Twinkle', type: '2D', icon: Sparkles, rating: 4.4, downloads: 134, tags: ['Bright', 'Cheerful'] },
        { id: 12, name: 'Mentor', type: '3D', icon: Smile, rating: 4.9, downloads: 298, tags: ['Wise', 'Scholarly'] },
    ];

    const filteredMascots = filterType === 'all'
        ? mascots
        : mascots.filter(m => m.type === filterType);

    return (
        <DashboardLayout
            title="Mascot Template Library"
            subtitle="Browse and manage mascot templates"
            role="admin"
        >
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <Image className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">{mascots.length}</h3>
                    <p className="text-gray-500 text-sm">Total Templates</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Download className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">
                        {mascots.reduce((sum, m) => sum + m.downloads, 0).toLocaleString()}
                    </h3>
                    <p className="text-gray-500 text-sm">Total Downloads</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                        <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">4.7</h3>
                    <p className="text-gray-500 text-sm">Avg Rating</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">
                        {mascots.filter(m => m.type === '3D').length}
                    </h3>
                    <p className="text-gray-500 text-sm">3D Models</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setFilterType('all')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${filterType === 'all'
                                    ? 'bg-purple-500 text-white shadow'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All Templates
                        </button>
                        <button
                            onClick={() => setFilterType('2D')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${filterType === '2D'
                                    ? 'bg-purple-500 text-white shadow'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            2D Only
                        </button>
                        <button
                            onClick={() => setFilterType('3D')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${filterType === '3D'
                                    ? 'bg-purple-500 text-white shadow'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            3D Only
                        </button>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search mascots..."
                            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </div>
            </div>

            {/* Mascot Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMascots.map((mascot) => {
                    const Icon = mascot.icon;
                    return (
                        <div
                            key={mascot.id}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group overflow-hidden"
                        >
                            {/* Mascot Preview */}
                            <div className="relative aspect-square bg-gray-50 flex items-center justify-center">
                                <Icon className="w-20 h-20 text-gray-400 group-hover:text-purple-500 group-hover:scale-110 transition-all" />

                                {/* Type Badge */}
                                <div className="absolute top-3 right-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${mascot.type === '3D'
                                            ? 'bg-purple-500 text-white'
                                            : 'bg-blue-500 text-white'
                                        }`}>
                                        {mascot.type}
                                    </span>
                                </div>

                                {/* Hover Actions */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                                        <Eye className="w-5 h-5 text-gray-800" />
                                    </button>
                                    <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                                        <Download className="w-5 h-5 text-gray-800" />
                                    </button>
                                </div>
                            </div>

                            {/* Mascot Info */}
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{mascot.name}</h3>

                                {/* Tags */}
                                <div className="flex gap-2 mb-3 flex-wrap">
                                    {mascot.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="font-semibold text-gray-800">{mascot.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Download className="w-4 h-4" />
                                        <span>{mascot.downloads}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Upload New Template */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-purple-400 transition-all cursor-pointer mt-8">
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Image className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Upload New Mascot Template</h3>
                    <p className="text-gray-500 mb-4">Add a new 2D or 3D mascot to the library</p>
                    <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition-all">
                        Choose File
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MascotLibrary;
