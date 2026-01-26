import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Database, Upload, Search, Grid, List, Download, Eye, Trash2, Edit2 } from 'lucide-react';

export default function MascotLibrary() {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');

    const [templates] = useState([
        { id: 1, name: 'Space Explorer', type: '3D', category: 'Science', downloads: 234, size: '12.5 MB', thumbnail: '🚀', color: '#3B82F6' },
        { id: 2, name: 'Ocean Guardian', type: '3D', category: 'Nature', downloads: 189, size: '15.2 MB', thumbnail: '🌊', color: '#06B6D4' },
        { id: 3, name: 'Math Wizard', type: '2D', category: 'Education', downloads: 312, size: '3.8 MB', thumbnail: '🧙', color: '#9333EA' },
        { id: 4, name: 'History Hero', type: '2D', category: 'History', downloads: 156, size: '4.2 MB', thumbnail: '🏛️', color: '#F59E0B' },
        { id: 5, name: 'Art Master', type: '3D', category: 'Arts', downloads: 201, size: '18.7 MB', thumbnail: '🎨', color: '#EC4899' },
        { id: 6, name: 'Science Lab', type: '2D', category: 'Science', downloads: 278, size: '5.1 MB', thumbnail: '🔬', color: '#10B981' }
    ]);

    const [backgrounds] = useState([
        { id: 1, name: 'Space Station', category: 'Space', downloads: 145, size: '8.3 MB', color: '#3B82F6' },
        { id: 2, name: 'Underwater World', category: 'Ocean', downloads: 167, size: '9.1 MB', color: '#06B6D4' },
        { id: 3, name: 'Classroom', category: 'Education', downloads: 289, size: '6.5 MB', color: '#9333EA' },
        { id: 4, name: 'Ancient Library', category: 'History', downloads: 123, size: '7.8 MB', color: '#F59E0B' }
    ]);

    const filteredTemplates = templates.filter(template => {
        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'all' || template.type === filterType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/admin')}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                <Database className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Mascot Library</h1>
                                <p className="text-xs text-gray-500">Manage 3D/2D templates and backgrounds</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Total Templates</p>
                        <p className="text-3xl font-bold text-gray-900">45</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">3D Models</p>
                        <p className="text-3xl font-bold text-purple-600">28</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">2D Assets</p>
                        <p className="text-3xl font-bold text-blue-600">17</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Backgrounds</p>
                        <p className="text-3xl font-bold text-pink-600">24</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 w-full md:w-auto">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search templates..."
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                            >
                                <option value="all">All Types</option>
                                <option value="3D">3D Models</option>
                                <option value="2D">2D Assets</option>
                            </select>

                            <div className="flex gap-1 border-2 border-gray-200 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>

                            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-md">
                                <Upload className="w-5 h-5" />
                                Upload
                            </button>
                        </div>
                    </div>
                </div>

                {/* Templates Grid/List */}
                <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Mascot Templates</h2>

                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {filteredTemplates.map((template) => (
                                <div
                                    key={template.id}
                                    className="group relative bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200"
                                >
                                    <div className="text-center mb-4">
                                        <div
                                            className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-3 text-5xl"
                                            style={{ backgroundColor: template.color + '20' }}
                                        >
                                            {template.thumbnail}
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                            <span
                                                className="px-2 py-1 rounded-full"
                                                style={{
                                                    backgroundColor: template.type === '3D' ? '#9333EA20' : '#3B82F620',
                                                    color: template.type === '3D' ? '#9333EA' : '#3B82F6'
                                                }}
                                            >
                                                {template.type}
                                            </span>
                                            <span>{template.category}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                        <span>{template.downloads} downloads</span>
                                        <span>{template.size}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-white hover:bg-gray-100 rounded-lg transition-colors text-sm border border-gray-200">
                                            <Eye className="w-4 h-4" />
                                            Preview
                                        </button>
                                        <button className="p-2 bg-white hover:bg-blue-50 rounded-lg transition-colors border border-gray-200">
                                            <Edit2 className="w-4 h-4 text-blue-600" />
                                        </button>
                                        <button className="p-2 bg-white hover:bg-red-50 rounded-lg transition-colors border border-gray-200">
                                            <Trash2 className="w-4 h-4 text-red-600" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredTemplates.map((template) => (
                                <div
                                    key={template.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                                            style={{ backgroundColor: template.color + '20' }}
                                        >
                                            {template.thumbnail}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{template.name}</h3>
                                            <p className="text-sm text-gray-600">{template.category} • {template.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-sm"
                                            style={{
                                                backgroundColor: template.type === '3D' ? '#9333EA20' : '#3B82F620',
                                                color: template.type === '3D' ? '#9333EA' : '#3B82F6'
                                            }}
                                        >
                                            {template.type}
                                        </span>
                                        <span className="text-sm text-gray-600">{template.downloads} downloads</span>
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                                <Eye className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                                <Download className="w-4 h-4 text-blue-600" />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4 text-blue-600" />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4 text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Backgrounds */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Background Templates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {backgrounds.map((bg) => (
                            <div
                                key={bg.id}
                                className="p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all border border-gray-200"
                            >
                                <div
                                    className="w-full h-24 rounded-lg mb-3 flex items-center justify-center text-gray-400"
                                    style={{ backgroundColor: bg.color + '20' }}
                                >
                                    🖼️
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{bg.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{bg.category}</p>
                                <div className="flex items-center justify-between text-xs text-gray-600">
                                    <span>{bg.downloads} downloads</span>
                                    <span>{bg.size}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
