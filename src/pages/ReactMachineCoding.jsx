import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom'
import TodoApp from '../components/TodoApp'
import WeatherApp from '../components/WeatherApp'
import Calculator from '../components/Calculator'
import StarRating from '../components/StarRating'
import GridStack from '../components/GridStack'
import TabComponent from '../components/TabComponent'
import Accordian from '../components/Accordian'
import Toast from '../components/Toast'
import AutoComplete from '../components/AutoComplete'
import NestedCheckbox from '../components/NestedCheckbox'
import NestedComments from '../components/NestedComments'
import InfiniteScroll from '../components/InfiniteScroll'

function ReactMachineCoding() {
  const location = useLocation()

  // Check if we're on the main ReactMachineCoding page
  const isMainPage =
    location.pathname === '/reactMachineCoding' ||
    location.pathname === '/reactMachineCoding/'

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          React Machine Coding
        </h1>
        <p className="text-gray-600 mb-6">
          Practice React with these interactive coding challenges and projects.
        </p>

        {/* Sub Navigation */}
        <nav className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8 overflow-x-auto">
            <Link
              to="/reactMachineCoding"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                isMainPage
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Overview
            </Link>
            <Link
              to="/reactMachineCoding/todo"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/todo'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Todo App
            </Link>
            <Link
              to="/reactMachineCoding/toast"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/toast'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Toast
            </Link>
            <Link
              to="/reactMachineCoding/weather"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/weather'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Weather App
            </Link>
            <Link
              to="/reactMachineCoding/calculator"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/calculator'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Calculator
            </Link>
            <Link
              to="/reactMachineCoding/star-rating"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/star-rating'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Star Rating
            </Link>
            <Link
              to="/reactMachineCoding/gridstack"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/gridstack'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Grid Stack
            </Link>
            <Link
              to="/reactMachineCoding/tab"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/tab'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Tab
            </Link>
            <Link
              to="/reactMachineCoding/accordian"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/accordian'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Accordian
            </Link>
            <Link
              to="/reactMachineCoding/autocomplete"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/autocomplete'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Autocomplete
            </Link>
            <Link
              to="/reactMachineCoding/nestedCheckbox"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/nestedCheckbox'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              NestedCheckbox
            </Link>
            <Link
              to="/reactMachineCoding/nestedcomments"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/nnestedcomments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              NestedComments
            </Link>
            <Link
              to="/reactMachineCoding/infinite-scroll"
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === '/reactMachineCoding/infinite-scroll'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Infinite Scroll
            </Link>
          </div>
        </nav>

        {/* Nested Routes Content */}
        <Routes>
          <Route index element={<Overview />} />
          <Route path="todo" element={<TodoApp />} />
          <Route path="toast" element={<Toast />} />
          <Route path="weather" element={<WeatherApp />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="star-rating" element={<StarRating />} />
          <Route path="gridstack" element={<GridStack />} />
          <Route path="tab" element={<TabComponent />} />
          <Route path="accordian" element={<Accordian />} />
          <Route path="autocomplete" element={<AutoComplete />} />
          <Route path="nestedCheckbox" element={<NestedCheckbox />} />
          <Route path="nestedcomments" element={<NestedComments />} />
          <Route path="infinite-scroll" element={<InfiniteScroll />} />
        </Routes>
      </div>
    </div>
  )
}

// Overview component for the main page
function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Todo Application
        </h3>
        <p className="text-blue-600 mb-4">
          Build a complete todo app with add, delete, and toggle functionality.
        </p>
        <Link
          to="/reactMachineCoding/todo"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-3">Toast</h3>
        <p className="text-green-600 mb-4">Your Toast Component</p>
        <Link
          to="/reactMachineCoding/toast"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">
          Weather App
        </h3>
        <p className="text-purple-600 mb-4">
          Learn API integration and conditional rendering with a weather
          application.
        </p>
        <Link
          to="/reactMachineCoding/weather"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
        <h3 className="text-xl font-semibold text-orange-800 mb-3">
          Calculator
        </h3>
        <p className="text-orange-600 mb-4">
          Build a functional calculator with complex state management and
          operations.
        </p>
        <Link
          to="/reactMachineCoding/calculator"
          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
        <h3 className="text-xl font-semibold text-orange-800 mb-3">
          Star Rating
        </h3>
        <p className="text-orange-600 mb-4">Your Rating Component</p>
        <Link
          to="/reactMachineCoding/star-rating"
          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">
          Grid Stack
        </h3>
        <p className="text-purple-600 mb-4">Learn Stack</p>
        <Link
          to="/reactMachineCoding/gridstack"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Tab</h3>
        <p className="text-blue-600 mb-4">Tab for your Navigation</p>
        <Link
          to="/reactMachineCoding/tab"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">
          Accordian
        </h3>
        <p className="text-purple-600 mb-4">Your Accordian</p>
        <Link
          to="/reactMachineCoding/accordian"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">
          AutoComplete
        </h3>
        <p className="text-purple-600 mb-4">
          Learn API integration and Searching,Debouncing and Throttling
        </p>
        <Link
          to="/reactMachineCoding/autocomplete"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">
          NestedCheckbox
        </h3>
        <p className="text-purple-600 mb-4">
          Learn Recursion and Tree with NestedCheckbox
        </p>
        <Link
          to="/reactMachineCoding/nestedCheckbox"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">
          NestedComments
        </h3>
        <p className="text-purple-600 mb-4">
          Learn Recursion and Tree with NestedCheckbox
        </p>
        <Link
          to="/reactMachineCoding/nestedcomments"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>
       <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Infinite Scroll W/o API
        </h3>
        <p className="text-blue-600 mb-4">
          Build a Infinite Scroll Without API
        </p>
        <Link
          to="/reactMachineCoding/infinite-scroll"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Start Building →
        </Link>
      </div>
    </div>
  )
}

export default ReactMachineCoding
