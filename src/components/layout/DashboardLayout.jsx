import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children, title, subtitle, role = 'teacher' }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar role={role} />

            <div className="ml-64">
                <Header title={title} subtitle={subtitle} />

                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
