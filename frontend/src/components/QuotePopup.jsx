// components/QuotePopup.jsx
import React, { useState } from "react";
import { FaQuoteLeft, FaTimes } from "react-icons/fa";

const quotes = [
  { quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "I’ve missed more than 9000 shots in my career...", author: "Michael Jordan" },
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
];

const QuotePopup = ({ onClose }) => {
  const [current, setCurrent] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  const generateQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrent(newQuote);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
        >
          <FaTimes />
        </button>

        <div className="text-center">
          <FaQuoteLeft className="text-3xl text-blue-500 mx-auto mb-4" />
          <p className="text-lg italic text-gray-800 mb-4">"{current.quote}"</p>
          <p className="text-sm font-semibold text-gray-600">— {current.author}</p>
          <button
            onClick={generateQuote}
            className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:from-green-600 hover:to-blue-600 transition"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
