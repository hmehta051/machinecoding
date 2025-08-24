import React, { useState } from 'react'

const checkboxData = [
  {
    id: 1,
    name: 'fruits',
    children: [
      {
        id: 2,
        name: 'citrus',
        children: [
          { id: 3, name: 'orange' },
          { id: 4, name: 'lemon' },
        ],
      },
      {
        id: 5,
        name: 'berries',
        children: [
          { id: 6, name: 'strawberry' },
          { id: 7, name: 'blueberry' },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'vegetables',
    children: [
      {
        id: 9,
        name: 'leafy greens',
        children: [
          { id: 10, name: 'spinach' },
          { id: 11, name: 'kale' },
        ],
      },
      {
        id: 12,
        name: 'root vegetables',
        children: [
          { id: 13, name: 'carrot' },
          { id: 14, name: 'beetroot' },
        ],
      },
    ],
  },
]

const Checkbox = ({ data, checked, setChecked }) => {
  // const handleChange = (isChecked, node) => {
  //   setChecked(prev => {
  //     const newState = { ...prev, [node.id]: isChecked }

  //     const updateChildren = node => {
  //       node.children?.forEach(child => {
  //         newState[child.id] = isChecked
  //         child.children && updateChildren(child)
  //       })
  //     }
  //     updateChildren(node)

  //     const verifyChecked = node => {
  //       if (!node.children) return newState[node.id] || false
  //       const allChecked = node.children.every(child => verifyChecked(child))
  //       newState[node.id] = allChecked
  //       return allChecked
  //     }

  //     checkboxData.forEach(child => verifyChecked(child))
  //     return newState
  //   })
  // }

  const handleChange = (isChecked, node) => {
    setChecked(prev => {
      const newState = { ...prev }

      // Phase 1: Downward Propagation
      // Recursively update the clicked node and all its descendants.
      const updateDescendants = (currentNode, checkedStatus) => {
        newState[currentNode.id] = checkedStatus
        if (currentNode.children) {
          currentNode.children.forEach(child =>
            updateDescendants(child, checkedStatus)
          )
        }
      }
      updateDescendants(node, isChecked)

      // Phase 2: Upward Propagation
      // Recursively update all parent nodes based on their children's state.
      // This function ensures we check from the bottom of the tree upwards.
      const updateAncestors = nodes => {
        nodes.forEach(parentNode => {
          if (parentNode.children) {
            // Recurse to the deepest level first
            updateAncestors(parentNode.children)

            // After children are processed, determine the parent's state
            const allChildrenChecked = parentNode.children.every(
              child => newState[child.id]
            )
            newState[parentNode.id] = allChildrenChecked
          }
        })
      }
      updateAncestors(checkboxData) // Start the update from the top-level nodes

      return newState
    })
  }
  return (
    <>
      <div>
        {data.map(node => {
          return (
            <div
              style={{ paddingLeft: '20px' }}
              key={node.id}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={checked[node.id] || false}
                  onChange={e => handleChange(e.target.checked, node)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                <label
                  style={{ marginLeft: '10px' }}
                  htmlFor=""
                  className="text-gray-800 font-medium"
                >
                  {node?.name}
                </label>
              </div>
              {node.children && (
                <Checkbox
                  data={node.children}
                  checked={checked}
                  setChecked={setChecked}
                />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({})
  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
      <Checkbox data={checkboxData} checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default NestedCheckbox
