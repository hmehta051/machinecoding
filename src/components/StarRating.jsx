import React, { useState } from 'react'

const StarRating = () => {
  const [click, setClick] = useState(0)
  const [hover, setHover] = useState(0)
  const getTheStar = index => {
    const value = hover || click
    return (
      <>
        {value >= index ? (
          <span className="text-yellow-400">&#9733;</span>
        ) : (
          <span className="text-gray-400">&#9733;</span>
        )}
      </>
    )
  }
  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      <h1 className="text-2xl font-bold">Star Rating</h1>
      <div className="flex space-x-2">
        {[...Array(5)].map((_, index) => {
          index += 1
          return (
            <button
              key={index}
              type="button"
              className="text-3xl transition-colors duration-200 focus:outline-none"
              onClick={() => setClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(click)}
            >
              {getTheStar(index)}
            </button>
          )
        })}
      </div>
      <p className="text-gray-600">You rated: {click} / 5</p>
    </div>
  )
}

export default StarRating
