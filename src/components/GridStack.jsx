import React, { useState } from 'react'

const GridStack = () => {
  const [order, setOrder] = useState([])

  const config = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
  ]

  const activateCells = idx => {
    const newOrder = [...order, idx]
    setOrder(newOrder)

    const totalActiveCells = config.flat(1).filter(Boolean).length
    if (newOrder.length === totalActiveCells) {
      deactivate()
    }
  }

  const deactivate = () => {
    const id = setInterval(() => {
      setOrder(prev => {
        const newOrder = [...prev]
        newOrder.pop() // correctly mutate the copy
        if (newOrder.length === 0) clearInterval(id)
        return newOrder
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grid Stack</h1>

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
          width: '600px',
          height: '600px',
        }}
      >
        {config.flat(1).map((elem, idx) =>
          elem ? (
            <button
              key={idx}
              onClick={() => activateCells(idx)}
              className={`transition-all duration-200 rounded-md border border-gray-500 shadow-sm ${
                order.includes(idx)
                  ? 'bg-green-500 text-white'
                  : 'bg-white hover:bg-blue-100'
              }`}
            >
              {elem}
            </button>
          ) : (
            <div
              key={idx}
              className="bg-gray-300 border border-gray-400 rounded-md"
            ></div>
          )
        )}
      </div>
    </div>
  )
}

export default GridStack
