import React, { useState } from 'react'

const TodoApp = () => {
  const [todoVal, setTodoVal] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editMode, setEditMode] = useState(null)

  const handleChange = e => {
    setTodoVal(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()

    if (editMode !== null) {
      updateHandler()
    } else {
      addHandler()
    }
  }

  const updateHandler = () => {
    const updatedList = todoList.map((list, idx) => {
      if (idx === editMode) {
        return todoVal
      } else {
        return list
      }
    })
    setTodoList(updatedList)
    setEditMode(null)
    setTodoVal('')
  }
  const addHandler = () => {
    setTodoList(() => [...todoList, todoVal])
    setTodoVal('')
  }
  const handleRemove = index => {
    const newList = todoList.filter((list, idx) => idx !== index)
    setTodoList(newList)
  }

  // Prompt Menthod

  // const handleEdit = (item, idx) => {
  //   const updatedTodo = prompt('Edit todo', item)
  //   if (updatedTodo && updatedTodo.trim()) {
  //     const newList = todoList.map((todo, index) => {
  //       return index === idx ? updatedTodo : todo
  //     })
  //     setTodoList(newList)
  //   }
  // }

  const handleEdit = (item, idx) => {
    setEditMode(idx)
    setTodoVal(item)
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

        <form onSubmit={submitHandler} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              name="todoVal"
              placeholder="Enter your todo"
              className="flex-1 border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={todoVal}
              onChange={handleChange}
              required
              minLength={2}
              autoComplete="off"
            />
            <button
              type="submit"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {editMode !== null ? 'Update' : 'Add'}
            </button>
            {editMode !== null && (
              <button
                type="button"
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                onClick={() => {
                  setEditMode(null)
                  setTodoVal('')
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div>
          <h2 className="text-xl font-semibold mb-2">Todo</h2>
          {todoList.length > 0 ? (
            <div className="space-y-3">
              {todoList.length === 0 ? (
                'Loading'
              ) : (
                <>
                  {todoList.map((list, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border p-3 rounded-md shadow-sm"
                    >
                      <span className="text-gray-800">{list}</span>
                      <div className="space-x-2">
                        <button
                          className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                          onClick={() => handleEdit(list, index)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                          onClick={() => handleRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ) : (
            <p className="text-gray-500 italic">No Todo Found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
