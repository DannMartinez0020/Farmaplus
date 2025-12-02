import { TrendingUp, TrendingDown, ShoppingCart, Package, Users, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Dashboard() {
  const stats = [
    {
      title: 'Ventas del Día',
      value: '$2,845.50',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      title: 'Transacciones',
      value: '156',
      change: '+8.2%',
      trend: 'up',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Productos Vendidos',
      value: '892',
      change: '+15.3%',
      trend: 'up',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Clientes Atendidos',
      value: '134',
      change: '-2.4%',
      trend: 'down',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-orange-500',
    },
  ];

  const recentSales = [
    { id: 'V-2024-001', time: '10:45 AM', customer: 'María González', total: '$12.90', status: 'Completada' },
    { id: 'V-2024-002', time: '10:52 AM', customer: 'Carlos Ruiz', total: '$35.50', status: 'Completada' },
    { id: 'V-2024-003', time: '11:03 AM', customer: 'Ana Martínez', total: '$18.30', status: 'Completada' },
    { id: 'V-2024-004', time: '11:15 AM', customer: 'Luis Pérez', total: '$24.90', status: 'Completada' },
    { id: 'V-2024-005', time: '11:28 AM', customer: 'Sofia Torres', total: '$42.40', status: 'Completada' },
  ];

  const lowStock = [
    { name: 'Acetaminofén 500mg', stock: 12, min: 50, status: 'critical' },
    { name: 'Ibuprofeno 400mg', stock: 23, min: 50, status: 'warning' },
    { name: 'Amoxicilina 500mg', stock: 8, min: 30, status: 'critical' },
    { name: 'Loratadina 10mg', stock: 35, min: 50, status: 'warning' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-3xl text-gray-900 mb-2">Dashboard</div>
        <p className="text-gray-600">Resumen general de operaciones - Sábado, 29 de noviembre 2025</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} text-white w-12 h-12 rounded-lg flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Sales */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xl text-gray-900">Ventas Recientes</div>
              <p className="text-sm text-gray-600 mt-1">Últimas transacciones del día</p>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm">
              Ver todas
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">ID Venta</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Hora</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Total</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.map((sale) => (
                  <tr key={sale.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{sale.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{sale.time}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{sale.customer}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{sale.total}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {sale.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-6">
            <div className="text-xl text-gray-900">Alertas de Inventario</div>
            <p className="text-sm text-gray-600 mt-1">Productos con bajo stock</p>
          </div>
          <div className="space-y-4">
            {lowStock.map((item, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm text-gray-900">{item.name}</div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'critical' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status === 'critical' ? 'Crítico' : 'Bajo'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Stock: {item.stock} unidades</span>
                  <span>Mín: {item.min}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${(item.stock / item.min) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-emerald-600 hover:text-emerald-700 text-sm py-2">
            Ver todo el inventario
          </button>
        </div>
      </div>
    </div>
  );
}