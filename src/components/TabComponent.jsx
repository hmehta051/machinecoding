import React, { useState } from 'react'

const Tab = ({
  tabData,
  disabledTab = [],
  initialTab = 0,
  orientation = 'Horizontal',
}) => {
  const [idx, setIdx] = useState(initialTab)

  const isHorizontal = orientation === 'Horizontal'

  return (
    <div
      className={`flex ${isHorizontal ? 'flex-col items-center' : 'flex-row'} gap-6 w-full`}
    >
      {/* Tabs */}
      <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-3`}>
        {tabData.map((data, index) => {
          const isDisabled = disabledTab.includes(index)
          const isActive = idx === index

          return (
            <button
              key={index}
              onClick={() => !isDisabled && setIdx(index)}
              className={`
                px-4 py-2 rounded-md border text-sm font-medium transition-all duration-200 
                ${
                  isDisabled
                    ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                    : isActive
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                }
              `}
              disabled={isDisabled}
            >
              {data.title}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full text-center text-lg text-gray-800 border border-gray-300">
        {tabData[idx]?.description || 'No content'}
      </div>
    </div>
  )
}

const TabComponent = () => {
  const tabData = [
    { title: 'H1', description: 'Hello1' },
    { title: 'H2', description: 'Hello2' },
    { title: 'H3', description: 'Hello3' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tab Component</h1>

      <Tab
        tabData={tabData}
        disabledTab={[1, 2]}
        initialTab={0}
        orientation="Horizontal" // Try "Vertical" too
      />
    </div>
  )
}

export default TabComponent
