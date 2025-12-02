import { 
  Bell, 
  Database, 
  FileDown, 
  Building2, 
  DollarSign, 
  Package, 
  Calculator, 
  Calendar, 
  CreditCard, 
  FileText,
  Settings,
  Save
} from 'lucide-react';

export function Configuracion() {
  const configSections = [
    {
      title: 'Notificaciones',
      items: [
        { icon: <Bell className="w-5 h-5" />, label: 'Alertas y Recordatorios', description: 'Configurar notificaciones del sistema' },
      ]
    },
    {
      title: 'Seguridad y Datos',
      items: [
        { icon: <Database className="w-5 h-5" />, label: 'Copias de Seguridad y Cifrado', description: 'Gestionar backups y encriptación' },
        { icon: <FileDown className="w-5 h-5" />, label: 'Formatos de Exportación', description: 'Configurar formatos de descarga (PDF, Excel, TXT)' },
      ]
    },
    {
      title: 'Información Empresarial',
      items: [
        { icon: <Building2 className="w-5 h-5" />, label: 'Datos de la Empresa', description: 'Nombre, RUC, dirección y contacto' },
        { icon: <DollarSign className="w-5 h-5" />, label: 'Configuración de Moneda', description: 'Moneda, formato y símbolo' },
      ]
    },
    {
      title: 'Productos y Servicios',
      items: [
        { icon: <Package className="w-5 h-5" />, label: 'Catálogo de Productos y Servicios', description: 'Gestionar categorías y clasificaciones' },
        { icon: <Calculator className="w-5 h-5" />, label: 'Ajustes de Impuestos', description: 'Configurar ITBMS y otros impuestos' },
      ]
    },
    {
      title: 'Pagos y Facturación',
      items: [
        { icon: <Calendar className="w-5 h-5" />, label: 'Fechas de Pago', description: 'Configurar plazos y vencimientos' },
        { icon: <CreditCard className="w-5 h-5" />, label: 'Métodos de Pago', description: 'Gestionar formas de pago aceptadas' },
        { icon: <FileText className="w-5 h-5" />, label: 'Plantillas de Facturas', description: 'Personalizar diseño de documentos' },
      ]
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="text-3xl text-gray-900 mb-2">Configuración del Sistema</div>
        <p className="text-gray-600">Administra las preferencias y ajustes generales de FarmaPlus</p>
      </div>

      {/* Quick Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-6">
          <Settings className="w-8 h-8 mb-3 opacity-90" />
          <div className="text-2xl mb-1">Sistema Activo</div>
          <div className="text-sm opacity-90">Versión 2.4.1</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-emerald-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Última copia de seguridad</span>
            <Database className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-lg text-gray-900">29/11/2025</div>
          <div className="text-xs text-gray-500">02:00 AM</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-emerald-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Usuarios activos</span>
            <Bell className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-lg text-gray-900">5 Usuarios</div>
          <div className="text-xs text-gray-500">En línea ahora</div>
        </div>
      </div>

      {/* Configuration Sections */}
      <div className="space-y-6">
        {configSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="text-lg text-gray-900">{section.title}</div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition text-left group"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 mb-1">{item.label}</div>
                      <div className="text-xs text-gray-600">{item.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
          Restaurar Valores
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
          <Save className="w-4 h-4" />
          <span>Guardar Cambios</span>
        </button>
      </div>
    </div>
  );
}
