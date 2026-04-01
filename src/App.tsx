import { useState } from 'react';
import { useStore } from './store';
import Dashboard from './pages/Dashboard';
import TransactionHistory from './pages/TransactionHistory';
import { DollarSign, LayoutDashboard, Clock, Upload } from 'lucide-react';

type Tab = 'dashboard' | 'history' | 'upload';

const TABS: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'history', label: 'Transaction History', icon: Clock },
  { id: 'upload', label: 'Upload', icon: Upload },
];

function AppContent() {
  const { totalSpending } = useStore();
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-1.5">
                <DollarSign size={22} />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Expense Tracker</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-xs text-gray-400 block">Total Spending</span>
                <span className="text-xl font-bold text-red-500">
                  ${totalSpending.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-2 ml-4">
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Bar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 pt-1">
            {TABS.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'history' && <TransactionHistory />}
      </main>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
