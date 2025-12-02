import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  FileText,
  Gift,
  Calculator,
  Users,
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/b3943a5a7abba63b3b0246229d1d3e2870c5bb56.png';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  userRole: 'admin' | 'cajero';
  onLogout: () => void;
}

export function Sidebar({ currentView, onViewChange, userRole, onLogout }: SidebarProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const adminMenuItems = [
    { id: 'dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { id: 'ventas', icon: <ShoppingCart className="w-5 h-5" />, label: 'Punto de Venta' },
    { id: 'inventario', icon: <Package className="w-5 h-5" />, label: 'Inventario' },
    { id: 'reportes', icon: <FileText className="w-5 h-5" />, label: 'Reportes' },
    { id: 'fidelizacion', icon: <Gift className="w-5 h-5" />, label: 'Fidelización' },
    { id: 'corte-caja', icon: <Calculator className="w-5 h-5" />, label: 'Corte de Caja' },
    { id: 'usuarios', icon: <Users className="w-5 h-5" />, label: 'Usuarios' },
    { id: 'configuracion', icon: <Settings className="w-5 h-5" />, label: 'Configuración' },
  ];

  const cajeroMenuItems = [
    { id: 'ventas', icon: <ShoppingCart className="w-5 h-5" />, label: 'Punto de Venta' },
    { id: 'fidelizacion', icon: <Gift className="w-5 h-5" />, label: 'Fidelización' },
    { id: 'corte-caja', icon: <Calculator className="w-5 h-5" />, label: 'Mi Corte de Caja' },
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : cajeroMenuItems;

  return (
    <div className="w-64 bg-emerald-800 text-white h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-emerald-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
            <img src={logo} alt="FarmaPlus" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="text-white">FarmaPlus</div>
            <div className="text-xs text-emerald-300">Sistema de Gestión</div>
          </div>
        </div>
      </div>

      {/* User info */}
      <div className="p-4 border-b border-emerald-700">
        <button 
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="w-full flex items-center justify-between p-3 bg-emerald-700 rounded-lg hover:bg-emerald-600 transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span>JD</span>
            </div>
            <div className="text-left">
              <div className="text-sm">Juan Pérez</div>
              <div className="text-xs text-emerald-300 capitalize">{userRole}</div>
            </div>
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  currentView === item.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-emerald-100 hover:bg-emerald-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-emerald-700">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-emerald-100 hover:bg-emerald-700 rounded-lg transition"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
}