import { useState } from 'react';
import { Search, UserPlus, Edit, Trash2, Shield, User, CheckCircle } from 'lucide-react';

export function Usuarios() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@farmaplus.com',
      role: 'Cajero',
      status: 'active',
      lastLogin: '29/11/2025 10:30 AM',
      shifts: 'Mañana'
    },
    {
      id: 2,
      name: 'María González',
      email: 'maria.gonzalez@farmaplus.com',
      role: 'Cajero',
      status: 'active',
      lastLogin: '29/11/2025 08:15 AM',
      shifts: 'Tarde'
    },
    {
      id: 3,
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@farmaplus.com',
      role: 'Cajero',
      status: 'active',
      lastLogin: '28/11/2025 04:45 PM',
      shifts: 'Noche'
    },
    {
      id: 4,
      name: 'Ana Martínez',
      email: 'ana.martinez@farmaplus.com',
      role: 'Administrativo',
      status: 'active',
      lastLogin: '29/11/2025 09:00 AM',
      shifts: 'Completo'
    },
    {
      id: 5,
      name: 'Luis Torres',
      email: 'luis.torres@farmaplus.com',
      role: 'Cajero',
      status: 'inactive',
      lastLogin: '25/11/2025 02:30 PM',
      shifts: 'Mañana'
    },
    {
      id: 6,
      name: 'UsuarioAuditoria',
      email: 'auditoria@farmaplus.com',
      role: 'Administrativo',
      status: 'active',
      lastLogin: '29/11/2025 07:00 AM',
      shifts: 'Completo'
    },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const stats = [
    { label: 'Total Usuarios', value: users.length, color: 'bg-blue-500' },
    { label: 'Activos', value: users.filter(u => u.status === 'active').length, color: 'bg-green-500' },
    { label: 'Cajeros', value: users.filter(u => u.role === 'Cajero').length, color: 'bg-purple-500' },
    { label: 'Administrativos', value: users.filter(u => u.role === 'Administrativo').length, color: 'bg-orange-500' },
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="text-3xl text-gray-900 mb-2">Gestión de Usuarios</div>
        <p className="text-gray-600">Administración de usuarios y permisos del sistema</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre o email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Todos los roles</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Cajero">Cajero</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            <UserPlus className="w-4 h-4" />
            <span>Nuevo Usuario</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Usuario</th>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Email</th>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Rol</th>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Turno</th>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Último Acceso</th>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Estado</th>
                <th className="text-left py-4 px-6 text-sm text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${user.role === 'Administrativo' ? 'bg-orange-100' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
                        {user.role === 'Administrativo' ? (
                          <Shield className="w-5 h-5 text-orange-600" />
                        ) : (
                          <User className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">{user.name}</div>
                        {user.name === 'UsuarioAuditoria' && (
                          <div className="text-xs text-orange-600">Auditoría Especial</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{user.email}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                      user.role === 'Administrativo' 
                        ? 'bg-orange-100 text-orange-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{user.shifts}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{user.lastLogin}</td>
                  <td className="py-4 px-6">
                    {user.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Activo
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        Inactivo
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
