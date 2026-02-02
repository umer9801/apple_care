'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LogOut,
  Users,
  Wrench,
  DollarSign,
  TrendingUp,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  Settings,
  Menu,
  X,
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [bookings, setBookings] = useState([
    { id: 1, name: 'John Doe', device: 'iPhone 15', issue: 'Screen Damage', date: '2025-02-05', status: 'pending' },
    { id: 2, name: 'Jane Smith', device: 'Samsung S24', issue: 'Battery Issue', date: '2025-02-04', status: 'completed' },
    { id: 3, name: 'Mike Johnson', device: 'iPad Pro', issue: 'Water Damage', date: '2025-02-03', status: 'in-progress' },
    { id: 4, name: 'Sarah Davis', device: 'iPhone 14', issue: 'Charging Port', date: '2025-02-02', status: 'completed' },
  ]);

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('adminAuth');
    const email = localStorage.getItem('adminEmail');

    if (!auth) {
      router.push('/admin/login');
    } else {
      setIsAuth(true);
      setAdminEmail(email || '');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminEmail');
    router.push('/admin/login');
  };

  const stats = [
    { label: 'Total Bookings', value: '24', icon: Calendar, color: 'primary' },
    { label: 'Completed', value: '18', icon: CheckCircle, color: 'accent' },
    { label: 'In Progress', value: '4', icon: Clock, color: 'primary' },
    { label: 'Revenue', value: '$4,250', icon: DollarSign, color: 'accent' },
  ];

  const updateBookingStatus = (id: number, newStatus: string) => {
    setBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status: newStatus } : b
      )
    );
  };

  if (!isAuth) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            AC
          </div>
          {isSidebarOpen && <span className="font-bold gradient-text">Apple Care</span>}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'bookings', label: 'Bookings', icon: Calendar },
            { id: 'services', label: 'Services', icon: Wrench },
            { id: 'customers', label: 'Customers', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                {isSidebarOpen && <span className="text-sm">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold gradient-text">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{adminEmail}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-gray-500 text-sm">{stat.label}</p>
                          <p className="text-3xl font-bold gradient-text mt-2">{stat.value}</p>
                        </div>
                        <Icon className="w-8 h-8 text-blue-600 opacity-50" />
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-green-600 w-3/4" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Bookings */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar size={24} className="text-blue-600" />
                  Recent Bookings
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Device</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Issue</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm text-gray-900">{booking.name}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{booking.device}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{booking.issue}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{booking.date}</td>
                          <td className="py-3 px-4">
                            <select
                              value={booking.status}
                              onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                              className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${
                                booking.status === 'completed'
                                  ? 'bg-green-100 text-green-700'
                                  : booking.status === 'in-progress'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="in-progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold gradient-text">Manage Bookings</h2>
              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">ID</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Device</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Issue</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="py-3 px-4 text-sm">#{booking.id}</td>
                          <td className="py-3 px-4 text-sm">{booking.name}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{booking.device}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{booking.issue}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{booking.date}</td>
                          <td className="py-3 px-4">
                            <select
                              value={booking.status}
                              onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                              className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${
                                booking.status === 'completed'
                                  ? 'bg-accent/20 text-accent'
                                  : booking.status === 'in-progress'
                                    ? 'bg-primary/20 text-primary'
                                    : 'bg-yellow-500/20 text-yellow-400'
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="in-progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-primary hover:text-accent transition-colors text-sm font-semibold">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold gradient-text">Services Management</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Screen Replacement', price: '$79-$299', status: 'active' },
                  { name: 'Battery Service', price: '$49-$129', status: 'active' },
                  { name: 'Water Damage', price: '$99-$299', status: 'active' },
                  { name: 'Charging Port', price: '$39-$99', status: 'active' },
                ].map((service, index) => (
                  <div key={index} className="glass p-6 rounded-xl border border-primary/30">
                    <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.price}</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                        {service.status}
                      </span>
                      <button className="ml-auto text-primary hover:text-accent transition-colors text-sm font-semibold">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold gradient-text">Customer Management</h2>
              <div className="glass p-6 rounded-xl border border-primary/30">
                <p className="text-muted-foreground">Customer list and details coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold gradient-text">Analytics & Reports</h2>
              <div className="glass p-6 rounded-xl border border-primary/30">
                <p className="text-muted-foreground">Advanced analytics dashboard coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold gradient-text">Settings</h2>
              <div className="glass p-6 rounded-xl border border-primary/30 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Business Email</label>
                    <input
                      type="email"
                      defaultValue="support@applecare.com"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Business Phone</label>
                    <input
                      type="tel"
                      defaultValue="(555) 123-4567"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
