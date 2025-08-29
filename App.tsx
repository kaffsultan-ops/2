import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50" dir="rtl">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <div className="lg:pr-72">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/owners" element={<div className="text-center py-12 text-slate-600">صفحة الملاك قيد التطوير</div>} />
              <Route path="/tenants" element={<div className="text-center py-12 text-slate-600">صفحة المستأجرين قيد التطوير</div>} />
              <Route path="/contracts" element={<div className="text-center py-12 text-slate-600">صفحة العقود قيد التطوير</div>} />
              <Route path="/maintenance" element={<div className="text-center py-12 text-slate-600">صفحة الصيانة قيد التطوير</div>} />
              <Route path="/payments" element={<div className="text-center py-12 text-slate-600">صفحة المدفوعات قيد التطوير</div>} />
              <Route path="/notifications" element={<div className="text-center py-12 text-slate-600">صفحة الإشعارات قيد التطوير</div>} />
              <Route path="/reports" element={<div className="text-center py-12 text-slate-600">صفحة التقارير قيد التطوير</div>} />
              <Route path="/settings" element={<div className="text-center py-12 text-slate-600">صفحة الإعدادات قيد التطوير</div>} />
            </Routes>
          </main>
        </div>
        
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;