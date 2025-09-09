import React, { useState, useRef } from 'react';

const QuizGen = () => {
  const [pdfText, setPdfText] = useState('');
  const [userText, setUserText] = useState('');
  const [questionCount, setQuestionCount] = useState(5);
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [fileName, setFileName] = useState('Select PDF File(s)');
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFileName(`Processing ${files.length} file(s)...`);
      // Simulate PDF processing
      setTimeout(() => {
        setFileName(`${files.length} file(s) loaded.`);
        setPdfText('Simulated PDF content loaded successfully.');
      }, 2000);
    } else {
      setFileName('Select PDF File(s)');
      setPdfText('');
    }
  };

  const generateQuiz = async () => {
    if (!pdfText && !userText) {
      alert('Please upload a PDF or enter some text to generate a quiz.');
      return;
    }

    setIsLoading(true);

    const sourceContent = `PDF Content:\n${pdfText}\n\nUser Notes/Text:\n${userText}`;
    const prompt = `Based on the following content, generate a ${questionCount}-question multiple-choice quiz. The questions should test understanding of the key concepts in the text. Each question must have exactly 4 options. One of the options must be the correct answer. Provide the output ONLY in the specified JSON format. Do not include any other text or markdown formatting before or after the JSON.
    
Content:
---
${sourceContent}
---
`;

    try {
      const schema = {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            question: { type: "STRING" },
            options: {
              type: "ARRAY",
              items: { type: "STRING" }
            },
            answer: { type: "STRING" }
          },
          required: ["question", "options", "answer"]
        }
      };

      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema
        }
      };
      
      const apiKey = "AIzaSyDZ5hEmR_dWrNBUYl2bS8Yz5NOlr-TBr8o";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        const errorBody = await response.text();
        console.error("API Error Response:", errorBody);
        throw new Error(`API request failed with status ${response.status}. See console for details.`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        
        const jsonText = result.candidates[0].content.parts[0].text;
        const parsedQuiz = JSON.parse(jsonText);
        setQuizData(parsedQuiz);
        setShowQuiz(true);
      } else {
        console.error("Unexpected API response structure:", result);
        throw new Error('The AI failed to generate a valid quiz. Please try again with different content.');
      }

    } catch (error) {
      console.error('Error generating quiz:', error);
      alert(error.message || 'An unknown error occurred while generating the quiz.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const submitQuiz = () => {
    let correctAnswers = 0;
    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizData([]);
    setShowQuiz(false);
    setShowResults(false);
    setUserAnswers({});
    setScore(0);
    setPdfText('');
    setUserText('');
    setQuestionCount(5);
    setFileName('Select PDF File(s)');
  };

  const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white antialiased">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            QuizGen AI
          </h1>
          <p className="text-gray-400 mt-2">Upload a PDF and add notes to instantly generate a multiple-choice quiz.</p>
        </header>

        {/* Main Content */}
        <main className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
          {!showQuiz && !showResults && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PDF Upload */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-200">1. Upload PDF(s) (Optional)</label>
                  <div className="relative overflow-hidden inline-block w-full">
                    <button
                      onClick={handleFileUpload}
                      className="bg-gray-700 text-white w-full py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <span>{fileName}</span>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf"
                      multiple
                      className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Text Input */}
                <div className="space-y-4">
                  <label htmlFor="chat-input" className="block text-lg font-semibold text-gray-200">2. Add Context or Text</label>
                  <textarea
                    id="chat-input"
                    rows="5"
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                    placeholder="Or, paste your text here. Add any specific instructions for the quiz..."
                  />
                </div>
              </div>

              {/* Question Count Input */}
              <div className="mt-6">
                <label htmlFor="question-count" className="block text-lg font-semibold text-gray-200 mb-2 text-center">3. How many questions?</label>
                <input
                  type="number"
                  id="question-count"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value) || 5)}
                  min="1"
                  max="20"
                  className="w-full max-w-xs mx-auto p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow block text-center"
                />
              </div>

              {/* Generate Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={generateQuiz}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707" />
                  </svg>
                  <span>{isLoading ? 'Generating...' : 'Generate Quiz'}</span>
                  {isLoading && (
                    <div className="w-6 h-6 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin ml-3"></div>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Quiz Display */}
          {showQuiz && !showResults && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-center mb-6">Your Quiz is Ready!</h2>
              <div className="space-y-6">
                {quizData.map((question, index) => (
                  <div key={index} className="bg-gray-700 p-5 rounded-lg shadow-md">
                    <p className="text-lg font-semibold mb-4">{index + 1}. {escapeHtml(question.question)}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className="flex items-center p-3 rounded-md hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question${index}`}
                            value={option}
                            onChange={() => handleAnswerSelect(index, option)}
                            className="mr-3"
                          />
                          <span className="text-gray-300">{escapeHtml(option)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={submitQuiz}
                  className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-colors shadow-md"
                >
                  Submit Answers
                </button>
              </div>
            </div>
          )}

          {/* Results Display */}
          {showResults && (
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">Quiz Complete!</h2>
              <p className="text-2xl mb-6">
                You scored <span className="font-bold text-green-400">{score}</span> out of <span className="font-bold">{quizData.length}</span>!
              </p>
              <button
                onClick={resetQuiz}
                className="bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-500 transition-colors"
              >
                Create Another Quiz
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default QuizGen;
