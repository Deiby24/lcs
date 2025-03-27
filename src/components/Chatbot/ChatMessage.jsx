import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatMessage = ({ message, onOptionClick }) => {
  return (
    <div className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block p-3 rounded-lg ${message.sender === 'user' 
          ? 'bg-blue-100 text-blue-900 rounded-br-none' 
          : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
      >
        {message.text}
      </div>
      {message.options && (
        <div className="mt-2 space-y-2">
          {message.options.map((option, i) => (
            <button
              key={i}
              onClick={() => onOptionClick(option.action)}
              className="block w-full text-left p-2 bg-green-50 text-green-700 rounded hover:bg-green-100 text-sm flex items-center"
            >
              {option.action === 'whatsapp' && <FaWhatsapp className="mr-2" />}
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;