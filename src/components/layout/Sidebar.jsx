import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Sparkles,
    BookOpen,
    BarChart3,
    Settings,
    Building2,
    CreditCard,
    Zap,
    Image
} from 'lucide-react';

const Sidebar = ({ role = 'teacher' }) => {
    const location = useLocation();

    const teacherMenuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/teacher' },
        { icon: Sparkles, label: 'Mascot Persona Studio', path: '/teacher/persona' },
        { icon: BookOpen, label: 'AI Story Architect', path: '/teacher/stories' },
        { icon: BarChart3, label: 'Analytics', path: '/teacher/analytics' },
        { icon: Users, label: 'Students', path: '/teacher/students' },
        { icon: Settings, label: 'Settings', path: '/teacher/settings' },
    ];

    const adminMenuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
        { icon: Building2, label: 'School Subscriptions', path: '/admin/subscriptions' },
        { icon: Zap, label: 'AI Token Usage', path: '/admin/tokens' },
        { icon: Image, label: 'Mascot Library', path: '/admin/library' },
        { icon: Users, label: 'User Management', path: '/admin/users' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
    ];

    const menuItems = role === 'admin' ? adminMenuItems : teacherMenuItems;

    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-40">
            {/* Logo */}
            <div className="p-6 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center shadow">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Mascotic</h1>
                        <p className="text-xs text-gray-500 capitalize">{role} Portal</p>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${isActive
                                    ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-500'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {role === 'admin' ? 'A' : 'T'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                            {role === 'admin' ? 'Admin User' : 'Teacher Name'}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                            {role === 'admin' ? 'admin@mascotic.com' : 'teacher@school.com'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
