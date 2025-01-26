import React, { useState } from "react";
import "./ChatboxSupport.css";

function ChatboxSupport() {
  const [isChatboxOpen, setChatboxOpen] = useState(true); // State to track if the chatbox is open
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", from: "support" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { text: userMessage, from: "user" },
        { text: "Thanks for reaching out!", from: "support" },
      ]);
      setUserMessage("");
    }
  };

  const closeChatbox = () => {
    setChatboxOpen(false); // Close the chatbox
  };

  return (
    <>
      {isChatboxOpen && (
        <div className="chatbox-container">
          <div className="chatbox">
            <div className="chatbox-header">
              <span>Chat Support</span>
              <img
                src="ChatbotSupport.jpg" // Replace with chatbot image URL
                alt="Chatbot"
                className="chatbot-avatar"
              />
              <button className="close-button" onClick={closeChatbox}>
                &times; {/* Close icon */}
              </button>
            </div>
            <div className="messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-row ${
                    msg.from === "user"
                      ? "user-message-row"
                      : "support-message-row"
                  }`}
                >
                  <div
                    className={
                      msg.from === "user" ? "user-message" : "support-message"
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={userMessage}
                onChange={handleInputChange}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatboxSupport;
