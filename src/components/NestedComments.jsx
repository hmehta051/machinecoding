import React, { useState } from 'react'
import { BiSolidDownArrowCircle, BiSolidUpArrowCircle } from 'react-icons/bi'
const initialComments = [
  {
    id: 'c1',
    author: 'Alice',
    text: 'This is the first top-level comment. What does everyone think?',
    timestamp: '2023-10-27T10:00:00Z',
    replies: [
      {
        id: 'c2',
        author: 'Bob',
        text: "Great point, Alice! I think it's a fantastic idea.",
        timestamp: '2023-10-27T10:05:00Z',
        replies: [
          {
            id: 'c3',
            author: 'Alice',
            text: 'Thanks, Bob! Glad you agree.',
            timestamp: '2023-10-27T10:10:00Z',
            replies: [],
          },
        ],
      },
      {
        id: 'c4',
        author: 'Charlie',
        text: 'I have a few reservations. Can you elaborate on the implementation details?',
        timestamp: '2023-10-27T10:08:00Z',
        replies: [],
      },
    ],
  },
  {
    id: 'c5',
    author: 'David',
    text: 'This is another separate comment thread.',
    timestamp: '2023-10-27T11:30:00Z',
    replies: [],
  },
]

const Comment = ({
  comments,
  expand,
  setIsexpand,
  handleDelete,
  handleAddReply,
}) => {
  const handleChange = comment => {
    setIsexpand(prev => {
      const newState = { ...prev, [comment.id]: !prev[comment.id] }
      return newState
    })
  }
  const addReply = comment => {
    const newReply = {
      id: Date.now() * Math.random(),
      author: prompt('Enter your name'),
      text: prompt('Enter your reply'),
      replies: [],
      timestamp: new Date().toISOString(),
    }
    handleAddReply(comment.id, newReply)
    setIsexpand(prev => ({ ...prev, [comment.id]: true }))
  }
  return (
    <div className="pl-4 border-l-2 border-gray-300">
      {comments.map(comment => {
        return (
          <div
            key={comment.id}
            className="bg-gray-100 p-4 my-2 rounded-lg shadow-sm"
          >
            <div className="font-semibold text-blue-700">{comment.author}</div>
            <div className="text-gray-800">{comment.text}</div>

            {comment.replies.length > 0 && (
              <button
                className="ml-2 text-xl text-blue-500 hover:text-blue-700"
                title={
                  expand[comment.id] ? 'Collapse replies' : 'Expand replies'
                }
                onClick={() => handleChange(comment)}
              >
                {expand[comment.id] ? (
                  <BiSolidUpArrowCircle />
                ) : (
                  <BiSolidDownArrowCircle />
                )}
              </button>
            )}
            <div className="flex space-x-4 mt-2 text-sm text-blue-600">
              <button
                className="hover:underline hover:text-blue-800"
                onClick={() => addReply(comment)}
              >
                Reply
              </button>
              <button
                className="hover:underline hover:text-red-600"
                onClick={() => handleDelete(comment.id)}
              >
                Delete
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {new Date(comment.timestamp).toLocaleString()}
            </div>

            {comment.replies.length > 0 && expand[comment.id] && (
              <div className="mt-3">
                <Comment
                  comments={comment.replies}
                  expand={expand}
                  setIsexpand={setIsexpand}
                  handleDelete={handleDelete}
                  handleAddReply={handleAddReply}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const NestedComments = () => {
  const [comments, setComments] = useState(initialComments)
  const [expand, setIsexpand] = useState({})
  const handleDelete = idToDelete => {
    const deleteRecurse = (commentList, idToDelete) => {
      return commentList
        .filter(comment => comment.id !== idToDelete)
        .map(comment => {
          return {
            ...comment,
            replies: comment.replies
              ? deleteRecurse(comment.replies, idToDelete)
              : [],
          }
        })
    }
    setComments(prev => deleteRecurse(prev, idToDelete))
  }
  const handleAddReply = (commentId, newReply) => {
    const addRecurse = (commentList, commentId, reply) => {
      return commentList.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, newReply] }
        }
        return {
          ...comment,
          replies: comment.replies
            ? addRecurse(comment.replies, commentId, newReply)
            : [],
        }
      })
    }
    setComments(prev => addRecurse(prev, commentId, newReply))
  }
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Nested Comments</h1>
      <Comment
        comments={comments}
        expand={expand}
        setIsexpand={setIsexpand}
        handleDelete={handleDelete}
        handleAddReply={handleAddReply}
      />
    </div>
  )
}

export default NestedComments
