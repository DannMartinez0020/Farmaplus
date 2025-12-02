import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Package, AlertTriangle, Filter, Download } from 'lucide-react';

export function Inventario() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const products = [
    { id: 1, code: 'MED-001', name: 'Acetaminofén 500mg', category: 'Analgésicos', stock: 145, minStock: 50, price: 4.50, status: 'good' },
    { id: 2, code: 'MED-002', name: 'Ibuprofeno 400mg', category: 'Antiinflamatorios', stock: 23, minStock: 50, price: 6.75, status: 'low' },
    { id: 3, code: 'MED-003', name: 'Amoxicilina 500mg', category: 'Antibióticos', stock: 8, minStock: 30, price: 12.50, status: 'critical' },
    { id: 4, code: 'MED-004', name: 'Loratadina 10mg', category: 'Antihistamínicos', stock: 89, minStock: 40, price: 5.25, status: 'good' },
    { id: 5, code: 'MED-005', name: 'Omeprazol 20mg', category: 'Antiácidos', stock: 35, minStock: 50, price: 8.90, status: 'low' },
    { id: 6, code: 'SUP-001', name: 'Multivitamínico', category: 'Suplementos', stock: 120, minStock: 40, price: 11.50, status: 'good' },
    { id: 7, code: 'BEL-001', name: 'Crema Hidratante SPF 50', category: 'Belleza', stock: 67, minStock: 30, price: 10.50, status: 'good' },
    { id: 8, code: 'MED-006', name: 'Losartán 50mg', category: 'Antihipertensivos', stock: 12, minStock: 40, price: 7.80, status: 'critical' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-700';
      case 'low': return 'bg-yellow-100 text-yellow-700';
      case 'critical': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'Stock Normal';
      case 'low': return 'Stock Bajo';
      case 'critical': return 'Stock Crítico';
      default: return 'Desconocido';
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || p.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="text-3xl text-gray-900 mb-2">Gestión de Inventario</div>
        <p className="text-gray-600">Administra el stock de productos</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Total Productos</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">892</div>
              <div className="text-sm text-gray-600">Stock Bueno</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">234</div>
              <div className="text-sm text-gray-600">Stock Bajo</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">121</div>
              <div className="text-sm text-gray-600">Stock Crítico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, código o categoría..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Todos los estados</option>
              <option value="good">Stock Normal</option>
              <option value="low">Stock Bajo</option>
              <option value="critical">Stock Crítico</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Exportar</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
              <Plus className="w-4 h-4" />
              <span>Nuevo Producto</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Código</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Producto</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Categoría</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Stock</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Stock Mín.</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Precio</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Estado</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">{product.code}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{product.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{product.category}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{product.stock}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{product.minStock}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">${product.price.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(product.status)}`}>
                      {getStatusText(product.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Mostrando {filteredProducts.length} de {products.length} productos
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}