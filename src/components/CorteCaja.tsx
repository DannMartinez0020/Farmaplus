import { useState } from 'react';
import { DollarSign, CreditCard, Smartphone, Banknote, TrendingUp, Calendar, Printer, Download } from 'lucide-react';

export function CorteCaja() {
  const [selectedDate, setSelectedDate] = useState('2025-11-29');

  const cashierData = {
    name: 'Juan Pérez',
    shift: 'Turno Mañana',
    startTime: '08:00 AM',
    endTime: '04:00 PM',
    date: '29/11/2025'
  };

  const paymentMethods = [
    { method: 'Efectivo', icon: <Banknote className="w-6 h-6" />, transactions: 45, amount: 1245.00, color: 'bg-green-500' },
    { method: 'Tarjeta Débito', icon: <CreditCard className="w-6 h-6" />, transactions: 32, amount: 895.50, color: 'bg-blue-500' },
    { method: 'Tarjeta Crédito', icon: <CreditCard className="w-6 h-6" />, transactions: 28, amount: 678.75, color: 'bg-purple-500' },
    { method: 'Yappy', icon: <Smartphone className="w-6 h-6" />, transactions: 18, amount: 445.20, color: 'bg-orange-500' },
  ];

  const transactions = [
    { id: 'V-2024-145', time: '03:45 PM', customer: 'María González', payment: 'Efectivo', amount: 12.90, status: 'completed' },
    { id: 'V-2024-144', time: '03:32 PM', customer: 'Carlos Ruiz', payment: 'Tarjeta Débito', amount: 35.50, status: 'completed' },
    { id: 'V-2024-143', time: '03:18 PM', customer: 'Ana Martínez', payment: 'Yappy', amount: 18.30, status: 'completed' },
    { id: 'V-2024-142', time: '03:05 PM', customer: 'Luis Pérez', payment: 'Efectivo', amount: 24.90, status: 'completed' },
    { id: 'V-2024-141', time: '02:50 PM', customer: 'Sofia Torres', payment: 'Tarjeta Crédito', amount: 42.40, status: 'completed' },
  ];

  const totalSales = paymentMethods.reduce((sum, method) => sum + method.amount, 0);
  const totalTransactions = paymentMethods.reduce((sum, method) => sum + method.transactions, 0);
  const averageTicket = totalSales / totalTransactions;

  const expenses = [
    { concept: 'Cambio inicial', amount: 200.00 },
    { concept: 'Devolución producto', amount: 12.50 },
    { concept: 'Gastos varios', amount: 5.50 },
  ];

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const netTotal = totalSales - totalExpenses;

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="text-3xl text-gray-900 mb-2">Corte de Caja</div>
        <p className="text-gray-600">Cierre y balance de operaciones</p>
      </div>

      {/* Cashier Info */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg mb-2">Cajero: {cashierData.name}</div>
            <div className="text-sm opacity-90">{cashierData.shift} • {cashierData.date}</div>
            <div className="text-sm opacity-90">Horario: {cashierData.startTime} - {cashierData.endTime}</div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition">
              <Calendar className="w-4 h-4" />
              <span>Cambiar fecha</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">${totalSales.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Ventas</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">{totalTransactions}</div>
              <div className="text-sm text-gray-600">Transacciones</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">${Math.round(averageTicket).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Ticket Promedio</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-900">${netTotal.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Neto</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-xl text-gray-900 mb-6">Desglose por Método de Pago</div>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`${method.color} text-white w-10 h-10 rounded-lg flex items-center justify-center`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">{method.method}</div>
                        <div className="text-xs text-gray-500">{method.transactions} transacciones</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg text-gray-900">${method.amount.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">
                        {((method.amount / totalSales) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${method.color} h-2 rounded-full`}
                      style={{ width: `${(method.amount / totalSales) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-xl text-gray-900 mb-6">Últimas Transacciones</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-sm text-gray-600">ID</th>
                    <th className="text-left py-3 px-2 text-sm text-gray-600">Hora</th>
                    <th className="text-left py-3 px-2 text-sm text-gray-600">Cliente</th>
                    <th className="text-left py-3 px-2 text-sm text-gray-600">Pago</th>
                    <th className="text-left py-3 px-2 text-sm text-gray-600">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 text-sm text-gray-600">{transaction.id}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{transaction.time}</td>
                      <td className="py-3 px-2 text-sm text-gray-900">{transaction.customer}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{transaction.payment}</td>
                      <td className="py-3 px-2 text-sm text-gray-900">${transaction.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary & Actions */}
        <div className="space-y-6">
          {/* Expenses */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-xl text-gray-900 mb-6">Egresos y Ajustes</div>
            <div className="space-y-3 mb-4">
              {expenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">{expense.concept}</span>
                  <span className="text-sm text-red-600">-${expense.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm">
              + Agregar egreso
            </button>
          </div>

          {/* Final Balance */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-xl text-gray-900 mb-6">Balance Final</div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Total Ventas:</span>
                <span className="text-gray-900">${totalSales.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Total Egresos:</span>
                <span className="text-red-600">-${totalExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-3 border-t-2 border-gray-300">
                <span className="text-lg text-gray-900">Total Neto:</span>
                <span className="text-lg text-emerald-700">${netTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                <Printer className="w-4 h-4" />
                <span>Imprimir Corte</span>
              </button>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                <span>Descargar PDF</span>
              </button>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Cerrar Caja
              </button>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-lg text-gray-900 mb-3">Notas del Turno</div>
            <textarea
              placeholder="Agregar observaciones del turno..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}