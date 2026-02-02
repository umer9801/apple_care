'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Demo credentials
    const validEmail = 'admin@applecare.com';
    const validPassword = 'admin123';

    if (email === validEmail && password === validPassword) {
      // Store auth token in localStorage
      localStorage.setItem('adminAuth', 'true');
      localStorage.setItem('adminEmail', email);
      router.push('/admin/dashboard');
    } else {
      setError('Invalid credentials. Use admin@applecare.com / admin123');
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-green-100/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-md">
        <div className="p-8 rounded-2xl border border-blue-200 bg-white shadow-lg animate-fade-in-up">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 animate-glow">
              AC
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Apple Care</h1>
            <p className="text-muted-foreground">Admin Portal</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2 text-gray-700">
                <Mail size={16} className="text-blue-600" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@applecare.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2 text-gray-700">
                <Lock size={16} className="text-blue-600" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Demo Credentials */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">Demo Credentials:</p>
              <p className="text-xs font-mono text-blue-600">admin@applecare.com</p>
              <p className="text-xs font-mono text-blue-600">admin123</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-300/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Authorized personnel only. This system is monitored.
          </p>
        </div>
      </div>
    </main>
  );
}
