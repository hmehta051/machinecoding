import React, { useState } from 'react'

const Calculator = () => {
  const [displayNum, setDisplayNum] = useState('')
  const buttons = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    '.',
    '=',
    '+',
    '-',
    '*',
    '/',
    'Clear',
    'Delete',
  ]

  const handleClick = btn => {
    if (btn === 'Clear') {
      setDisplayNum('')
      return
    }
    if (btn === 'Delete') return setDisplayNum(prev => prev.slice(0, -1))
    if (btn === '=') {
      setDisplayNum(eval(displayNum).toString())
    } else {
      setDisplayNum(prev => prev + btn)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Calculator</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4 border border-gray-200">
        {/* Display */}
        <div className="bg-black text-white text-right text-2xl font-mono px-4 py-3 rounded">
          {displayNum || '0'}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
