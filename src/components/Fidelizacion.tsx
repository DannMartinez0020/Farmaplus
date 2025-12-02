import { useState } from 'react';
import { Search, Gift, Star, TrendingUp, Users, Award } from 'lucide-react';

export function Fidelizacion() {
  const [searchQuery, setSearchQuery] = useState('');

  const allCustomers = [
    { id: 1, name: 'María González', phone: '6700-1234', points: 2450, purchases: 45, tier: 'gold' },
    { id: 2, name: 'Carlos Ruiz', phone: '6701-2345', points: 1890, purchases: 38, tier: 'gold' },
    { id: 3, name: 'Ana Martínez', phone: '6702-3456', points: 1520, purchases: 32, tier: 'silver' },
    { id: 4, name: 'Luis Pérez', phone: '6703-4567', points: 980, purchases: 24, tier: 'silver' },
    { id: 5, name: 'Sofia Torres', phone: '6704-5678', points: 650, purchases: 18, tier: 'bronze' },
    { id: 6, name: 'Diego Ramírez', phone: '6705-6789', points: 420, purchases: 12, tier: 'bronze' },
    { id: 7, name: 'Patricia Sánchez', phone: '6706-7890', points: 1250, purchases: 28, tier: 'silver' },
    { id: 8, name: 'Roberto Castro', phone: '6707-8901', points: 890, purchases: 20, tier: 'bronze' },
  ];

  const topCustomers = allCustomers
    .filter(customer => 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
    )
    .slice(0, 6);

  const rewardsCatalog = [
    { id: 1, name: 'Descuento $10', points: 500, category: 'Descuentos', available: 150 },
    { id: 2, name: 'Descuento $25', points: 1000, category: 'Descuentos', available: 80 },
    { id: 3, name: 'Descuento $50', points: 2000, category: 'Descuentos', available: 45 },
    { id: 4, name: 'Multivitamínico Gratis', points: 800, category: 'Productos', available: 60 },
    { id: 5, name: 'Kit de Primeros Auxilios', points: 1500, category: 'Productos', available: 30 },
    { id: 6, name: 'Envío Gratis (3 meses)', points: 1200, category: 'Servicios', available: 100 },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'gold': return 'bg-yellow-100 text-yellow-700';
      case 'silver': return 'bg-gray-200 text-gray-700';
      case 'bronze': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'gold': return '👑';
      case 'silver': return '⭐';
      case 'bronze': return '🥉';
      default: return '🏅';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="text-3xl text-gray-900 mb-2">Programa de Fidelización</div>
        <p className="text-gray-600">Gestión de puntos y recompensas</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">2,847</div>
              <div className="text-sm text-gray-600">Clientes Activos</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">3.2M</div>
              <div className="text-sm text-gray-600">Puntos Otorgados</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">1,234</div>
              <div className="text-sm text-gray-600">Recompensas Canjeadas</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">+18%</div>
              <div className="text-sm text-gray-600">Crecimiento Mensual</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Search & Top Customers */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-6">
            <div className="text-xl text-gray-900 mb-4">Buscar Cliente</div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, teléfono o documento..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div className="text-lg text-gray-900">Top Clientes</div>
            <button className="text-sm text-emerald-600 hover:text-emerald-700">
              Ver todos
            </button>
          </div>

          <div className="space-y-3">
            {topCustomers.map((customer, index) => (
              <div key={customer.id} className="p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700">#{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">{customer.name}</div>
                      <div className="text-xs text-gray-500">{customer.phone}</div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${getTierColor(customer.tier)}`}>
                    <span>{getTierIcon(customer.tier)}</span>
                    <span className="capitalize">{customer.tier}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{customer.purchases} compras</span>
                  <span className="text-emerald-700">{customer.points} puntos</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Catalog */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xl text-gray-900">Catálogo de Recompensas</div>
              <p className="text-sm text-gray-600 mt-1">Premios disponibles para canje</p>
            </div>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm">
              + Agregar
            </button>
          </div>

          <div className="space-y-3">
            {rewardsCatalog.map((reward) => (
              <div key={reward.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 mb-1">{reward.name}</div>
                    <div className="text-xs text-gray-500">{reward.category}</div>
                  </div>
                  <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{reward.points}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">
                    Disponibles: {reward.available}
                  </span>
                  <button className="text-xs text-emerald-600 hover:text-emerald-700">
                    Canjear
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm">
            Ver catálogo completo
          </button>
        </div>
      </div>

      {/* Tier Information */}
      <div className="mt-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-8 h-8" />
          <div className="text-xl">Niveles de Membresía</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🥉</span>
              <div className="text-lg">Bronze</div>
            </div>
            <div className="text-sm opacity-90">0 - 999 puntos</div>
            <div className="text-xs opacity-75 mt-1">5% descuento en compras</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⭐</span>
              <div className="text-lg">Silver</div>
            </div>
            <div className="text-sm opacity-90">1,000 - 1,999 puntos</div>
            <div className="text-xs opacity-75 mt-1">10% descuento en compras</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">👑</span>
              <div className="text-lg">Gold</div>
            </div>
            <div className="text-sm opacity-90">2,000+ puntos</div>
            <div className="text-xs opacity-75 mt-1">15% descuento + envío gratis</div>
          </div>
        </div>
      </div>
    </div>
  );
}