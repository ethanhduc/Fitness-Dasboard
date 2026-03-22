import { useState } from 'react'

const ChatBot = () => {
  const [messages, setMessages] = useState([])  // State to hold chat messages (array of objects)
  const [input, setInput] = useState('') // State for current input message
  const [loading, setLoading] = useState(false) // State to indicate if a message is being sent
  const [error, setError] = useState(null) // State to hold any error messages

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
        body: JSON.stringify({ message: input, history: messages }) // Send current message and chat history to backend
      })

      // Parse response from backend
      const json = await response.json()
      
      if (!response.ok) {
        setError(json.error)
      } else {
        setMessages(prev => [
          ...prev, // Keep existing messages
          { sender: 'user', text: input }, // Add user's message
          { sender: 'ai', text: json.response } // Add AI's response
        ])
        setInput('') // Clear input field
      }
    } catch (error) {
      setError('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot">
        <h3>Fitness Coach ChatBot</h3>
      {/* Messages display */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      {/* Input form */}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default ChatBot