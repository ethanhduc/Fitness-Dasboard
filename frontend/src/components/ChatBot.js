import { useState } from 'react'

const ChatBot = () => {
  const [messages, setMessages] = useState([])  // [{sender: 'user'|'ai', text: '...'}]
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!input.trim()) return  // Prevent empty messages
    
    setLoading(true)
    setError(null)
    
    try {
      // POST request to backend with message and history
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input, history: messages })
      })

      // Parse response from backend
      const json = await response.json()
      
      if (!response.ok) {
        setError(json.error)
      } else {
        setMessages([
          ...messages, // Keep existing messages
          { sender: 'user', text: input }, // Add user's message
          { sender: 'ai', text: json.response } // Add AI's response
        ])
        setInput('')
      }
    } catch (error) {
      setError('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot">
      {/* Messages display */}
      {/* Input form */}
    </div>
  )
}