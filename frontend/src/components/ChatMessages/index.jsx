import React from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/main.css';

export default function ChatMessages({ messages, isTyping, chatRef }) {
    return (
        <div className="chat-container" ref={chatRef}>
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === 'bot' ? 'bot' : 'user'}`}>
                    {msg.sender === 'bot' ? (
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                        <span>{msg.text}</span>
                    )}
                </div>
            ))}

            {isTyping && (
                <div className="loading-indicator">
                    <em>Печатает...</em>
                </div>
            )}
        </div>
    );
}
