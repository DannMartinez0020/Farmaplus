import { useState } from 'react';
import { Search, Plus, Minus, Trash2, User, CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';

export function PuntoVenta() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Acetaminofén 500mg', price: 4.50, quantity: 2, code: 'MED-001' },
    { id: 2, name: 'Ibuprofeno 400mg', price: 6.75, quantity: 1, code: 'MED-002' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const products = [
    { id: 3, name: 'Amoxicilina 500mg', price: 12.50, code: 'MED-003', stock: 45 },
    { id: 4, name: 'Loratadina 10mg', price: 5.25, code: 'MED-004', stock: 120 },
    { id: 5, name: 'Omeprazol 20mg', price: 8.90, code: 'MED-005', stock: 78 },
    { id: 6, name: 'Multivitamínico', price: 11.50, code: 'SUP-001', stock: 56 },
  ];

  const updateQuantity = (id: number, change: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setSelectedPaymentMethod(null);
  };

  const processPayment = () => {
    if (!selectedPaymentMethod) {
      alert('Por favor selecciona un método de pago');
      return;
    }
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
      setCart([]);
      setSelectedPaymentMethod(null);
    }, 2000);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07; // 7% ITBMS en Panamá
  const total = subtotal + tax;

  const paymentMethods = [
    { id: 'efectivo', name: 'Efectivo', icon: <Banknote className="w-5 h-5" /> },
    { id: 'debito', name: 'Tarjeta Débito', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'credito', name: 'Tarjeta Crédito', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'yappy', name: 'Yappy', icon: <Smartphone className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-emerald-600 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-scale-in">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-2xl text-gray-900 mb-2">¡Pago Realizado!</div>
              <div className="text-gray-600">Transacción completada exitosamente</div>
              <div className="text-sm text-emerald-600 mt-2">Método: {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}</div>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 p-4 md:p-8 overflow-hidden flex flex-col">
        <div className="mb-4 md:mb-6">
          <div className="text-2xl md:text-3xl text-gray-900 mb-2">Punto de Venta</div>
          <p className="text-gray-600">Sistema de ventas y facturación</p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
          {/* Product Search & List */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col overflow-hidden">
            {/* Search */}
            <div className="mb-4 md:mb-6 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar producto por nombre o código..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pr-2">
                {products.filter(p => 
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.code.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="p-3 md:p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition text-left"
                  >
                    <div className="text-xs md:text-sm text-gray-500 mb-1">{product.code}</div>
                    <div className="text-sm md:text-base text-gray-900 mb-2">{product.name}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-700">${product.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">Stock: {product.stock}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Checkout */}
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col overflow-hidden max-h-[calc(100vh-180px)] lg:max-h-full">
            {/* Customer Info */}
            <div className="mb-4 p-3 md:p-4 bg-gray-50 rounded-lg flex-shrink-0">
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <User className="w-4 h-4" />
                <span>Cliente:</span>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700 text-sm">
                + Buscar cliente
              </button>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto mb-4 min-h-0">
              <div className="text-sm text-gray-700 mb-3 flex-shrink-0">Productos ({cart.length})</div>
              <div className="space-y-2 md:space-y-3 pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="p-2 md:p-3 border border-gray-200 rounded-lg flex-shrink-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs md:text-sm text-gray-900 truncate">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.code}</div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 md:gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 md:w-7 md:h-7 bg-gray-100 rounded hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
                        >
                          <Minus className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                        <span className="w-6 md:w-8 text-center text-xs md:text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 md:w-7 md:h-7 bg-gray-100 rounded hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
                        >
                          <Plus className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                      </div>
                      <div className="text-xs md:text-sm text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="border-t border-gray-200 pt-3 md:pt-4 mb-3 md:mb-4 space-y-2 flex-shrink-0">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">ITBMS (7%):</span>
                <span className="text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg md:text-xl border-t border-gray-200 pt-2">
                <span className="text-gray-900">Total:</span>
                <span className="text-emerald-700">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-3 md:mb-4 flex-shrink-0">
              <div className="text-sm text-gray-700 mb-2">Método de pago:</div>
              <div className="grid grid-cols-4 gap-2">
                {paymentMethods.map(method => (
                  <button
                    key={method.id}
                    className={`p-2 md:p-3 border-2 ${selectedPaymentMethod === method.id ? 'bg-emerald-50 border-emerald-500' : 'bg-gray-50 border-gray-200'} rounded-lg flex flex-col items-center gap-1 hover:border-emerald-300 transition`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className={selectedPaymentMethod === method.id ? 'text-emerald-600' : 'text-gray-600'}>
                      {method.icon}
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-600 text-center leading-tight">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 flex-shrink-0">
              <button
                className="w-full bg-emerald-600 text-white py-2 md:py-3 rounded-lg hover:bg-emerald-700 transition text-sm md:text-base"
                onClick={processPayment}
              >
                Procesar Pago (${total.toFixed(2)})
              </button>
              <button
                className="w-full border-2 border-gray-300 text-gray-700 py-2 md:py-3 rounded-lg hover:bg-gray-50 transition text-sm md:text-base"
                onClick={clearCart}
              >
                Limpiar Venta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}