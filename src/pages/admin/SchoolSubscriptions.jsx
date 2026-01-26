import DashboardLayout from '../../components/layout/DashboardLayout';
import { Building2, Users, DollarSign, Calendar, MoreVertical, CheckCircle, XCircle, Clock } from 'lucide-react';

const SchoolSubscriptions = () => {
    const subscriptions = [
        {
            id: 1,
            school: "Greenwood Elementary",
            plan: "Premium",
            students: 450,
            teachers: 25,
            price: "$999/mo",
            status: "active",
            renewalDate: "2026-03-15",
            usage: 85
        },
        {
            id: 2,
            school: "Riverside Academy",
            plan: "Enterprise",
            students: 1200,
            teachers: 68,
            price: "$2,499/mo",
            status: "active",
            renewalDate: "2026-02-28",
            usage: 92
        },
        {
            id: 3,
            school: "Maple Leaf School",
            plan: "Standard",
            students: 280,
            teachers: 15,
            price: "$599/mo",
            status: "active",
            renewalDate: "2026-04-10",
            usage: 67
        },
        {
            id: 4,
            school: "Sunset High School",
            plan: "Premium",
            students: 850,
            teachers: 42,
            price: "$1,499/mo",
            status: "expiring",
            renewalDate: "2026-01-30",
            usage: 78
        },
        {
            id: 5,
            school: "Oak Valley Institute",
            plan: "Standard",
            students: 320,
            teachers: 18,
            price: "$699/mo",
            status: "trial",
            renewalDate: "2026-02-05",
            usage: 45
        }
    ];

    const getStatusBadge = (status) => {
        const styles = {
            active: "bg-green-100 text-green-600 border-green-200",
            expiring: "bg-orange-100 text-orange-600 border-orange-200",
            trial: "bg-blue-100 text-blue-600 border-blue-200",
            inactive: "bg-red-100 text-red-600 border-red-200"
        };

        const icons = {
            active: <CheckCircle className="w-4 h-4" />,
            expiring: <Clock className="w-4 h-4" />,
            trial: <Clock className="w-4 h-4" />,
            inactive: <XCircle className="w-4 h-4" />
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border ${styles[status]}`}>
                {icons[status]}
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <DashboardLayout
            title="School Subscriptions"
            subtitle="Manage and monitor school subscriptions"
            role="admin"
        >
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">47</h3>
                    <p className="text-gray-500 text-sm">Total Schools</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">12,450</h3>
                    <p className="text-gray-500 text-sm">Active Students</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">$48.2K</h3>
                    <p className="text-gray-500 text-sm">Monthly Revenue</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">3</h3>
                    <p className="text-gray-500 text-sm">Expiring Soon</p>
                </div>
            </div>

            {/* Subscriptions Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800">All Subscriptions</h3>
                    <div className="flex gap-3">
                        <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>All Plans</option>
                            <option>Standard</option>
                            <option>Premium</option>
                            <option>Enterprise</option>
                        </select>
                        <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Trial</option>
                            <option>Expiring</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">School Name</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Plan</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Students</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Teachers</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Usage</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Renewal</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map((sub) => (
                                <tr key={sub.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                                                {sub.school.charAt(0)}
                                            </div>
                                            <p className="font-semibold text-gray-800">{sub.school}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                                            {sub.plan}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{sub.students.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-gray-700">{sub.teachers}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-800">{sub.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden w-20">
                                                <div
                                                    className="h-full bg-purple-500 rounded-full"
                                                    style={{ width: `${sub.usage}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-600">{sub.usage}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{getStatusBadge(sub.status)}</td>
                                    <td className="px-6 py-4 text-gray-700">{sub.renewalDate}</td>
                                    <td className="px-6 py-4">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                                            <MoreVertical className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default SchoolSubscriptions;
