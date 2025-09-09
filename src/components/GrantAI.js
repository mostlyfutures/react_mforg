import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const GrantAI = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I am Grant AI, What do you need twin?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const chatMessagesRef = useRef(null);

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  const addMessage = (role, content) => {
    setMessages(prev => [...prev, { role, content }]);
    setTimeout(scrollToBottom, 100);
  };

  const showStatusIndicator = (text) => {
    const statusId = `status-${Date.now()}`;
    addMessage('bot', (
      <div className="flex items-center space-x-2">
        <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>{text}</span>
      </div>
    ));
    return statusId;
  };

  const simulateGoogleSearch = async (query) => {
    console.log(`Simulating Google Search for: "${query}"`);
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    let resultSnippet;
    if (query.toLowerCase().includes("weather")) {
      resultSnippet = `The weather in Auckland today (${formattedDate}) is partly cloudy with a high of 18°C and a low of 10°C.`;
    } else if (query.toLowerCase().includes("stock market") || query.toLowerCase().includes("spy current price")) {
      resultSnippet = `As of ${formattedDate}, the simulated current price for SPY is around $525.00. The broader stock market (NZX 50) is up 0.5% today. Global markets are stable.`;
    } else if (query.toLowerCase().includes("bitcoin") || query.toLowerCase().includes("crypto")) {
      resultSnippet = `As of ${formattedDate}, Bitcoin (BTC) is currently trading around $65,000. Ethereum (ETH) is at $3,500.`;
    } else if (query.toLowerCase().includes("current date") || query.toLowerCase().includes("today's date")) {
      resultSnippet = `Today's date is ${formattedDate}.`;
    } else {
      resultSnippet = `Simulated information on "${query}" as of ${formattedDate}: This would typically contain up-to-date data relevant to your query if connected to a real search engine.`;
    }
    
    return JSON.stringify({ results: [{ snippet: resultSnippet }] });
  };

  const getChatResponse = async (userMessage) => {
    setIsLoading(true);
    
    const apiKey = "AIzaSyDZ5hEmR_dWrNBUYl2bS8Yz5NOlr-TBr8o";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    const systemPrompt = 'You are a general purpose ai. Provide concise, accurate information. Be professional but approachable and always add twin at the end of your sentences. If a user uploads a file (document or image), acknowledge the upload, describe the content (or summarize it if a document), and ask how you can help analyze it.';
    
    const chatHistory = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Hello! I am Grant AI. What do you want twin?" }] },
      ...messages.slice(1).map(msg => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      { role: "user", parts: [{ text: userMessage }] }
    ];

    const toolDeclarations = [
      {
        functionDeclarations: [
          {
            name: "simulateGoogleSearch",
            description: "Searches the web for up-to-date information based on a query, useful for current events, news, or factual data. NOTE: This is a simulated search and does not fetch real-time data from the internet.",
            parameters: {
              type: "OBJECT",
              properties: {
                query: { type: "STRING", description: "The search query." },
              },
              required: ["query"],
            },
          },
        ],
      },
    ];

    const payload = { 
      contents: chatHistory,
      tools: toolDeclarations 
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      const responseText = await response.text();
      if (!responseText) {
        throw new Error("Empty response from Gemini API.");
      }

      const result = JSON.parse(responseText);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${result.error?.message || 'Unknown error'}`);
      }
      
      // Check if Gemini wants to call a function
      if (result.candidates && result.candidates.length > 0 && 
          result.candidates[0].content && result.candidates[0].content.parts.length > 0 && 
          result.candidates[0].content.parts[0].functionCall) {
        
        const functionCall = result.candidates[0].content.parts[0].functionCall;
        console.log("Gemini wants to call a function:", functionCall);
        addMessage('bot', 'Grant AI is using a tool to get more information...');

        // Execute the function
        let toolOutput;
        if (functionCall.name === "simulateGoogleSearch") {
          toolOutput = await simulateGoogleSearch(functionCall.args.query);
        } else {
          throw new Error(`Unknown function called: ${functionCall.name}`);
        }

        // Send the tool's output back to Gemini
        const followUpPayload = { 
          contents: [
            ...chatHistory,
            {
              role: "function",
              parts: [{ 
                functionResponse: { 
                  name: functionCall.name, 
                  response: JSON.parse(toolOutput)
                } 
              }]
            }
          ]
        };

        const followUpResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(followUpPayload),
        });

        const followUpResponseText = await followUpResponse.text();
        const followUpResult = JSON.parse(followUpResponseText);

        if (followUpResult.candidates && followUpResult.candidates.length > 0 && 
            followUpResult.candidates[0].content && followUpResult.candidates[0].content.parts.length > 0 &&
            followUpResult.candidates[0].content.parts[0].text) {
          
          const botResponseText = followUpResult.candidates[0].content.parts[0].text;
          addMessage('bot', botResponseText);
        } else {
          addMessage('bot', "I received an unusual response after tool use. Please try again.");
        }

      } else if (result.candidates && result.candidates.length > 0 && 
                 result.candidates[0].content && result.candidates[0].content.parts.length > 0 &&
                 result.candidates[0].content.parts[0].text) {
        // If no function call, process the text response directly
        const botResponseText = result.candidates[0].content.parts[0].text;
        addMessage('bot', botResponseText);
      } else {
        addMessage('bot', "I received an unusual response. Please try again.");
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      addMessage('bot', `❌ Sorry, an error occurred: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (message === '') return;

    addMessage('user', message);
    setInputValue('');

    // Check for payment commands
    if (message.toLowerCase().includes('send') && message.includes('$')) {
      await handlePaymentRequest(message);
    } else if (message.toLowerCase().startsWith('/video ')) {
      const videoPrompt = message.substring(7);
      await generateVideo(videoPrompt);
    } else {
      await getChatResponse(message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    addMessage('user', `Uploading and processing "${file.name}"...`);
    showStatusIndicator('Processing file content...');

    // Simulate file processing
    setTimeout(() => {
      addMessage('bot', `File "${file.name}" processed. How can I help you analyze it?`);
    }, 2000);
  };

  const handlePaymentRequest = async (message) => {
    // Simulate payment processing
    addMessage('bot', '💸 Payment processing is not available in this demo version, twin!');
  };

  const generateVideo = async (prompt) => {
    // Simulate video generation
    addMessage('bot', `🎥 Video generation for "${prompt}" is not available in this demo version, twin!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-4 sm:p-8 flex flex-col">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-300 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Chat Container */}
      <div className="max-w-3xl mx-auto flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-full flex-grow my-auto">
        {/* Header */}
        <div className="p-4 bg-blue-800/80 text-center text-xl font-bold">
          Grant AI
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto chat-messages" ref={chatMessagesRef}>
          {messages.map((message, index) => (
            <div key={index} className={`message mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 px-4 rounded-2xl max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-blue-600 rounded-br-none' 
                  : 'bg-white/10 rounded-bl-none'
              }`}>
                {typeof message.content === 'string' ? message.content : message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-blue-900/50">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for a chat or /video prompt..."
              className="flex-1 py-3 px-4 border-none rounded-xl bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
              disabled={isLoading}
            />
            <div className="flex space-x-2 w-full sm:w-auto">
              <button
                onClick={handleFileUpload}
                className="py-3 px-4 bg-purple-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-purple-500 active:scale-95 whitespace-nowrap flex-1"
              >
                Upload File
              </button>
              <button
                onClick={() => addMessage('user', '💸 Starting payment process...')}
                className="py-3 px-4 bg-green-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-green-500 active:scale-95 whitespace-nowrap flex-1"
              >
                💸 Send Money
              </button>
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="py-3 px-6 bg-blue-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-blue-500 active:scale-95 flex-1 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
          <p className="text-xs text-white/50 text-center mt-2">Example: /video a majestic eagle flying over mountains</p>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.docx,image/*"
        className="hidden"
      />
    </div>
  );
};

export default GrantAI;
