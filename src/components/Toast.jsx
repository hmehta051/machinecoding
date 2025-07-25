import { useState } from 'react'

const ToastMini = ({ type, message, idx, onClose }) => {
  const colorMap = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
    error: 'bg-red-500',
  }

  const ariaLiveMap = {
    success: 'polite',
    info: 'polite',
    warning: 'assertive',
    error: 'assertive',
  }
  const ariaRoleMap = {
    success: 'status',
    info: 'status',
    warning: 'alert',
    error: 'alert',
  }

  const handleKeyDown = e => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      onClose(id)
    }
  }

  return (
    <div
      className={`text-white px-4 py-3 rounded shadow-lg transform transition-all duration-300 ease-in-out mt-2 flex justify-between items-center ${colorMap[type]} animate-slideInFromRight`}
      style={{
        animation: 'slideInFromRight 0.3s ease-out forwards',
      }}
      onKeyDown={handleKeyDown}
      aria-live={ariaLiveMap[type]}
      role={ariaRoleMap[type]}
    >
      <span>
        {message} - {idx}
      </span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 font-bold text-lg"
        aria-label="Dismiss notification"
      >
        ×
      </button>
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

function Toast() {
  const [toasts, setToasts] = useState([])
  const [position, setPosition] = useState('top-right')

  const showToast = (type, message) => {
    const id = Date.now() + Math.random()
    const newToast = { id, type, message }

    setToasts(prev => [...prev, newToast])

    // Auto-remove after 4 seconds
    setTimeout(() => {
      removeToast(id)
    }, 4000)
  }

  const removeToast = id => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const getPositionClasses = pos => {
    switch (pos) {
      case 'top-left':
        return 'top-4 left-4'
      case 'top-right':
        return 'top-4 right-4'
      case 'bottom-left':
        return 'bottom-4 left-4'
      case 'bottom-right':
        return 'bottom-4 right-4'
      case 'top':
        return 'top-4 left-1/2 -translate-x-1/2'
      case 'bottom':
        return 'bottom-4 left-1/2 -translate-x-1/2'
      default:
        return 'top-4 right-4'
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Toast Component Demo
      </h1>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Toast Types
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            onClick={() =>
              showToast('success', 'Success! Operation completed.')
            }
          >
            Success
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            onClick={() =>
              showToast('warning', 'Warning! Please check your input.')
            }
          >
            Warning
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            onClick={() => showToast('info', 'Info: New updates available.')}
          >
            Info
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            onClick={() => showToast('error', 'Error! Something went wrong.')}
          >
            Error
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Position: {position}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <button
            className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              position === 'top-left'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setPosition('top-left')}
          >
            Top Left
          </button>
          <button
            className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              position === 'top-right'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setPosition('top-right')}
          >
            Top Right
          </button>
          <button
            className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              position === 'bottom-left'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setPosition('bottom-left')}
          >
            Bottom Left
          </button>
          <button
            className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              position === 'bottom-right'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setPosition('bottom-right')}
          >
            Bottom Right
          </button>
          <button
            className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              position === 'bottom'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setPosition('bottom')}
          >
            Bottom
          </button>
          <button
            className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              position === 'top'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setPosition('top')}
          >
            Top
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <div
        className={`fixed z-50 ${getPositionClasses(position)} max-w-sm w-full`}
      >
        {toasts.map((toast, idx) => (
          <ToastMini
            key={toast.id}
            type={toast.type}
            message={toast.message}
            idx={idx}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Toast
