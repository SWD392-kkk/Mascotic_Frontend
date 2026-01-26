import { Bell, Search, Menu } from 'lucide-react';

const Header = ({ title, subtitle }) => {
    return (
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="flex items-center justify-between px-8 py-4">
                {/* Title Section */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                    {subtitle && (
                        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                        />
                    </div>

                    {/* Notifications */}
                    <button className="relative p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Mobile Menu */}
                    <button className="md:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all">
                        <Menu className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
