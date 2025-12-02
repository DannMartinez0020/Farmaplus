import { useState } from 'react';
import { BarChart3, TrendingUp, Download, Calendar, Filter, FileText, FileSpreadsheet } from 'lucide-react';

export function Reportes() {
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('sales');

  // Data for different report types
  const allData = {
    sales: {
      title: 'Ventas',
      salesData: [
        { period: 'Lun', sales: 1250, transactions: 45 },
        { period: 'Mar', sales: 1450, transactions: 52 },
        { period: 'Mié', sales: 1680, transactions: 58 },
        { period: 'Jue', sales: 1920, transactions: 67 },
        { period: 'Vie', sales: 2340, transactions: 82 },
        { period: 'Sáb', sales: 2850, transactions: 95 },
        { period: 'Dom', sales: 1890, transactions: 62 },
      ],
      topProducts: [
        { name: 'Acetaminofén 500mg', units: 245, revenue: 3895.50 },
        { name: 'Ibuprofeno 400mg', units: 189, revenue: 4252.50 },
        { name: 'Amoxicilina 500mg', units: 156, revenue: 7160.40 },
        { name: 'Multivitamínico', units: 142, revenue: 6035 },
        { name: 'Loratadina 10mg', units: 134, revenue: 2532.60 },
      ],
      summary: { total: 29650, transactions: 1847, average: 16.06, units: 5234 }
    },
    inventory: {
      title: 'Inventario',
      salesData: [
        { period: 'Lun', sales: 850, transactions: 32 },
        { period: 'Mar', sales: 920, transactions: 38 },
        { period: 'Mié', sales: 1100, transactions: 42 },
        { period: 'Jue', sales: 1350, transactions: 51 },
        { period: 'Vie', sales: 1580, transactions: 60 },
        { period: 'Sáb', sales: 1920, transactions: 68 },
        { period: 'Dom', sales: 1240, transactions: 45 },
      ],
      topProducts: [
        { name: 'Stock Bajo - Amoxicilina', units: 8, revenue: 0 },
        { name: 'Stock Bajo - Ibuprofeno', units: 23, revenue: 0 },
        { name: 'Stock Alto - Multivitamínico', units: 120, revenue: 0 },
        { name: 'Stock Medio - Acetaminofén', units: 145, revenue: 0 },
        { name: 'Stock Crítico - Losartán', units: 12, revenue: 0 },
      ],
      summary: { total: 18950, transactions: 1285, average: 14.75, units: 3890 }
    },
    customers: {
      title: 'Clientes',
      salesData: [
        { period: 'Lun', sales: 950, transactions: 35 },
        { period: 'Mar', sales: 1150, transactions: 44 },
        { period: 'Mié', sales: 1320, transactions: 50 },
        { period: 'Jue', sales: 1580, transactions: 59 },
        { period: 'Vie', sales: 1880, transactions: 70 },
        { period: 'Sáb', sales: 2150, transactions: 78 },
        { period: 'Dom', sales: 1540, transactions: 55 },
      ],
      topProducts: [
        { name: 'María González', units: 42, revenue: 1285.50 },
        { name: 'Carlos Ruiz', units: 38, revenue: 1156.75 },
        { name: 'Ana Martínez', units: 35, revenue: 1090.25 },
        { name: 'Luis Pérez', units: 32, revenue: 985.00 },
        { name: 'Sofia Torres', units: 28, revenue: 856.80 },
      ],
      summary: { total: 24580, transactions: 1568, average: 15.67, units: 4125 }
    },
    products: {
      title: 'Productos',
      salesData: [
        { period: 'Lun', sales: 1080, transactions: 40 },
        { period: 'Mar', sales: 1280, transactions: 48 },
        { period: 'Mié', sales: 1520, transactions: 56 },
        { period: 'Jue', sales: 1760, transactions: 64 },
        { period: 'Vie', sales: 2150, transactions: 78 },
        { period: 'Sáb', sales: 2580, transactions: 90 },
        { period: 'Dom', sales: 1720, transactions: 60 },
      ],
      topProducts: [
        { name: 'Analgésicos', units: 425, revenue: 5250.00 },
        { name: 'Antibióticos', units: 312, revenue: 4680.00 },
        { name: 'Suplementos', units: 280, revenue: 3890.50 },
        { name: 'Antiinflamatorios', units: 245, revenue: 3525.75 },
        { name: 'Antihistamínicos', units: 198, revenue: 2840.25 },
      ],
      summary: { total: 27890, transactions: 1756, average: 15.88, units: 4980 }
    }
  };

  const currentData = allData[reportType as keyof typeof allData];
  const salesData = currentData.salesData;
  const topProducts = currentData.topProducts;
  const maxSales = Math.max(...salesData.map(d => d.sales));

  const topCategories = [
    { name: 'Analgésicos', sales: 8450, percentage: 28.5 },
    { name: 'Antibióticos', sales: 6890, percentage: 23.2 },
    { name: 'Suplementos', sales: 5230, percentage: 17.6 },
    { name: 'Antiinflamatorios', sales: 4560, percentage: 15.4 },
    { name: 'Otros', sales: 4520, percentage: 15.3 },
  ];

  const handleExport = (format: 'pdf' | 'xlsx' | 'txt') => {
    // En producción, aquí se llamaría a una API para generar el archivo
    console.log(`Exportando reporte ${currentData.title} (${dateRange}) en formato ${format.toUpperCase()}`);
    alert(`Descargando reporte ${currentData.title} (${dateRange}) en formato ${format.toUpperCase()}...`);
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="text-3xl text-gray-900 mb-2">Reportes y Análisis - {currentData.title}</div>
        <p className="text-gray-600">Estadísticas y métricas del negocio ({dateRange === 'today' ? 'Hoy' : dateRange === 'week' ? 'Esta Semana' : dateRange === 'month' ? 'Este Mes' : dateRange === 'year' ? 'Este Año' : 'Personalizado'})</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Tipo de Reporte</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="sales">Ventas</option>
              <option value="inventory">Inventario</option>
              <option value="customers">Clientes</option>
              <option value="products">Productos</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Período</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="today">Hoy</option>
              <option value="week">Esta Semana</option>
              <option value="month">Este Mes</option>
              <option value="year">Este Año</option>
              <option value="custom">Personalizado</option>
            </select>
          </div>
          <div className="flex items-end gap-2 ml-auto">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Download className="w-4 h-4" />
                <span>Exportar</span>
              </button>
              {/* Dropdown menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <button 
                  onClick={() => handleExport('pdf')}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left border-b border-gray-100"
                >
                  <FileText className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-gray-700">Exportar PDF</span>
                </button>
                <button 
                  onClick={() => handleExport('xlsx')}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left border-b border-gray-100"
                >
                  <FileSpreadsheet className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Exportar Excel</span>
                </button>
                <button 
                  onClick={() => handleExport('txt')}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
                >
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Exportar TXT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-sm text-gray-600 mb-2">Ventas Totales</div>
          <div className="text-2xl text-gray-900 mb-2">${currentData.summary.total.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5% vs mes anterior</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-sm text-gray-600 mb-2">Transacciones</div>
          <div className="text-2xl text-gray-900 mb-2">{currentData.summary.transactions.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+8.3% vs mes anterior</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-sm text-gray-600 mb-2">Ticket Promedio</div>
          <div className="text-2xl text-gray-900 mb-2">${currentData.summary.average.toFixed(2)}</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+3.8% vs mes anterior</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-sm text-gray-600 mb-2">{reportType === 'inventory' ? 'Total Stock' : reportType === 'customers' ? 'Clientes' : 'Productos Vendidos'}</div>
          <div className="text-2xl text-gray-900 mb-2">{currentData.summary.units.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+15.2% vs mes anterior</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="text-xl text-gray-900 mb-6">Tendencia de {currentData.title}</div>

          {/* Simple Bar Chart */}
          <div className="space-y-4">
            {salesData.map((day, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{day.period}</span>
                  <div className="text-right">
                    <span className="text-sm text-gray-900">${day.sales.toLocaleString()}</span>
                    <span className="text-xs text-gray-500 ml-2">({day.transactions} trans.)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all"
                    style={{ width: `${(day.sales / maxSales) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-xl text-gray-900 mb-6">Top Categorías</div>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-900">{category.name}</span>
                  <span className="text-sm text-gray-600">{category.percentage}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${category.percentage * 3.5}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-900">${category.sales.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products/Items */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="text-xl text-gray-900 mb-6">{reportType === 'inventory' ? 'Estado de Inventario' : reportType === 'customers' ? 'Mejores Clientes' : reportType === 'products' ? 'Categorías Principales' : 'Productos Más Vendidos'}</div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">#</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">{reportType === 'customers' ? 'Cliente' : reportType === 'inventory' ? 'Item' : 'Producto'}</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">{reportType === 'inventory' ? 'Stock' : reportType === 'customers' ? 'Compras' : 'Unidades'}</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">{reportType === 'inventory' ? '-' : 'Ingresos'}</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-600">#{index + 1}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{product.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{product.units}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{reportType === 'inventory' ? '-' : `$${product.revenue.toLocaleString()}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-xl text-gray-900 mb-6">Reportes Rápidos</div>
          <div className="space-y-3">
            <button 
              onClick={() => handleExport('pdf')}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition"
            >
              <div className="text-sm text-gray-900 mb-1">Reporte de Ventas Diario</div>
              <div className="text-xs text-gray-600">Descargar PDF</div>
            </button>
            <button 
              onClick={() => handleExport('xlsx')}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition"
            >
              <div className="text-sm text-gray-900 mb-1">Inventario Bajo Stock</div>
              <div className="text-xs text-gray-600">Descargar Excel</div>
            </button>
            <button 
              onClick={() => handleExport('pdf')}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition"
            >
              <div className="text-sm text-gray-900 mb-1">Top 50 Clientes</div>
              <div className="text-xs text-gray-600">Descargar PDF</div>
            </button>
            <button 
              onClick={() => handleExport('xlsx')}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition"
            >
              <div className="text-sm text-gray-900 mb-1">Análisis Mensual</div>
              <div className="text-xs text-gray-600">Descargar Excel</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}