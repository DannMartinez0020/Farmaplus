import { useState } from 'react';
import { Lock, User } from 'lucide-react';
import logo from 'figma:asset/b3943a5a7abba63b3b0246229d1d3e2870c5bb56.png';

interface LoginPageProps {
  onLogin: (role: 'admin' | 'cajero') => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'cajero'>('cajero');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En producción, aquí validarías las credenciales
    onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 mb-4">
            <img src={logo} alt="FarmaPlus" className="w-full h-full object-contain" />
          </div>
          <div className="text-2xl text-gray-900 mb-2">FarmaPlus</div>
          <p className="text-gray-600 text-center">Sistema de Gestión Farmacéutica</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Tipo de Usuario</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole('cajero')}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedRole === 'cajero'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-sm mb-1">Cajero</div>
                  <div className="text-xs opacity-75">Punto de venta</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedRole === 'admin'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-sm mb-1">Admin</div>
                  <div className="text-xs opacity-75">Acceso completo</div>
                </div>
              </button>
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Usuario</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingrese su usuario"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Iniciar Sesión
          </button>

          {/* Demo credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
            <div className="text-gray-700 mb-2">Credenciales de demostración:</div>
            <div className="text-gray-600 space-y-1">
              <div>Usuario: demo / Contraseña: demo</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}