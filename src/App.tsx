import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { PuntoVenta } from './components/PuntoVenta';
import { Inventario } from './components/Inventario';
import { Reportes } from './components/Reportes';
import { Fidelizacion } from './components/Fidelizacion';
import { CorteCaja } from './components/CorteCaja';
import { Usuarios } from './components/Usuarios';
import { Configuracion } from './components/Configuracion';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'cajero'>('cajero');
  const [currentView, setCurrentView] = useState('dashboard');

  const handleLogin = (role: 'admin' | 'cajero') => {
    setUserRole(role);
    setIsLoggedIn(true);
    // Set initial view based on role
    setCurrentView(role === 'admin' ? 'dashboard' : 'ventas');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'ventas':
        return <PuntoVenta />;
      case 'inventario':
        return <Inventario />;
      case 'reportes':
        return <Reportes />;
      case 'fidelizacion':
        return <Fidelizacion />;
      case 'corte-caja':
        return <CorteCaja />;
      case 'usuarios':
        return <Usuarios />;
      case 'configuracion':
        return <Configuracion />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        userRole={userRole}
        onLogout={handleLogout}
      />
      <div className="flex-1 overflow-auto">
        {renderView()}
      </div>
    </div>
  );
}