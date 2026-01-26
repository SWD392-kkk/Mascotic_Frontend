import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Users, Search, Plus, Edit2, Trash2, Shield, Mail, Calendar } from 'lucide-react';

export default function UserManagement() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRole, setFilterRole] = useState('all');

    const [users] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User', status: 'Active', joined: '2026-01-15', mascots: 3, sessions: 24 },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active', joined: '2026-01-10', mascots: 5, sessions: 42 },
        { id: 3, name: 'Admin User', email: 'admin@mascotic.com', role: 'Admin', status: 'Active', joined: '2025-12-01', mascots: 0, sessions: 156 },
        { id: 4, name: 'Sarah Johnson', email: 'sarah.j@example.com', role: 'User', status: 'Inactive', joined: '2025-12-20', mascots: 2, sessions: 8 },
        { id: 5, name: 'Mike Wilson', email: 'mike.w@example.com', role: 'User', status: 'Active', joined: '2026-01-20', mascots: 4, sessions: 31 }
    ]);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole.toLowerCase();
        return matchesSearch && matchesRole;
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
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">User Management</h1>
                                <p className="text-xs text-gray-500">Manage user accounts and permissions</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900">1,247</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Active Users</p>
                        <p className="text-3xl font-bold text-green-600">1,089</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">New This Month</p>
                        <p className="text-3xl font-bold text-blue-600">156</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Admins</p>
                        <p className="text-3xl font-bold text-purple-600">12</p>
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
                                    placeholder="Search users by name or email..."
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <select
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                <option value="all">All Roles</option>
                                <option value="user">Users</option>
                                <option value="admin">Admins</option>
                            </select>

                            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md">
                                <Plus className="w-5 h-5" />
                                Add User
                            </button>
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">User</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joined</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Activity</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: user.role === 'Admin' ? '#9333EA' : '#3B82F6' }}
                                                >
                                                    <span className="text-white font-semibold text-sm">
                                                        {user.name.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{user.name}</p>
                                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                                        <Mail className="w-3 h-3" />
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                <Shield className="w-3 h-3" />
                                                <span className="text-sm font-medium">{user.role}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <Calendar className="w-4 h-4" />
                                                {user.joined}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600">
                                                <p>{user.mascots} mascots</p>
                                                <p>{user.sessions} sessions</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Edit2 className="w-4 h-4 text-blue-600" />
                                                </button>
                                                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4 text-red-600" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
