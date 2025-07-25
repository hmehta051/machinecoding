import React, { useEffect, useRef, useState } from 'react'
const fruits = [
  { id: 1, name: 'Apple', title: 'Red and sweet' },
  { id: 2, name: 'Banana', title: 'Yellow and soft' },
  { id: 3, name: 'Orange', title: 'Citrus and juicy' },
  { id: 4, name: 'Strawberry', title: 'Bright red and tangy' },
  { id: 5, name: 'Grape', title: 'Small and sweet' },
  { id: 6, name: 'Pineapple', title: 'Tropical and spiky' },
  { id: 7, name: 'Mango', title: 'Golden and tropical' },
  { id: 8, name: 'Peach', title: 'Fuzzy and juicy' },
  { id: 9, name: 'Cherry', title: 'Tiny and tart' },
  { id: 10, name: 'Watermelon', title: 'Large and refreshing' },
  { id: 11, name: 'Pear', title: 'Soft and grainy' },
  { id: 12, name: 'Kiwi', title: 'Green and tangy' },
  { id: 13, name: 'Blueberry', title: 'Small and sweet' },
  { id: 14, name: 'Raspberry', title: 'Delicate and tart' },
  { id: 15, name: 'Plum', title: 'Smooth and juicy' },
  { id: 16, name: 'Papaya', title: 'Soft and tropical' },
  { id: 17, name: 'Coconut', title: 'Hard shell, sweet inside' },
  { id: 18, name: 'Fig', title: 'Soft and sweet' },
  { id: 19, name: 'Pomegranate', title: 'Juicy seeds' },
  { id: 20, name: 'Lemon', title: 'Sour and zesty' },
]

const fetchFruitsApi = query => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const match = fruits.filter(el =>
        el.name.toLowerCase().includes(query.toLowerCase())
      )
      resolve(match)
    }, 300)
  })
}

const useOutSideClick = func => {
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        func()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [func])
  return { ref }
}

const useDebounce = (state, delay) => {
  const [debounceVal, setDebounceVal] = useState(state)

  useEffect(() => {
    let timeOut
    timeOut = setTimeout(() => {
      setDebounceVal(state)
    }, delay)

    return () => clearTimeout(timeOut)
  }, [state, delay])
  return { debounceVal }
}

const useThrottle = (state, limit) => {
  const [throttleVal, setThrottleVal] = useState(state)
  const lastRun = useRef(Date.now())
  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastRun.current >= limit) {
          lastRun.current = Date.now()
          setThrottleVal(state)
        }
      },
      Math.max(limit - (Date.now() - lastRun.current), 0)
    )

    return () => clearTimeout(handler)
  }, [state, limit])
  return throttleVal
}

const AutoComplete = () => {
  const [input, setInput] = useState('')
  const [filterData, setFilterData] = useState([])
  const [showDropDown, setShowDropDown] = useState(false)
  const { ref } = useOutSideClick(() => setShowDropDown(false))
  const { debounceVal } = useDebounce(input, 300)
  const handleChange = e => {
    setInput(e.target.value)
  }

  const fetchFruits = async query => {
    try {
      const data = await fetchFruitsApi(query)
      setFilterData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (debounceVal) {
      setShowDropDown(true)
      fetchFruits(debounceVal)
    } else {
      setShowDropDown(false)
      setFilterData([])
    }
  }, [debounceVal])

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter a fruit name"
          className="flex-1 border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
          value={input}
          onChange={handleChange}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Search
        </button>
      </div>

      <div className="space-y-2" ref={ref}>
        {showDropDown && (
          <div className="space-y-2">
            {filterData.length > 0 ? (
              filterData.map((el, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 rounded-md shadow-sm text-gray-700"
                >
                  {el.name}
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500 bg-yellow-100 rounded-md">
                No Result
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AutoComplete
