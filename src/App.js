import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Fetch the quotes when the component mounts
  useEffect(() => {
    fetch("https://navalravikantbackendquote.onrender.com/quotes")
      .then(response => response.json())
      .then(data => setQuotes(data.map(quote => quote.text)))
      .catch(error => console.error("Error fetching quotes:", error));
  }, []);

  const changeQuote = () => {
    let nextIndex = currentQuoteIndex + 1;

    if (nextIndex === quotes.length) {
      nextIndex = 0; // If we're at the end of the list, loop back to the start
    }

    setCurrentQuoteIndex(nextIndex);
  }

  return (
    <div className="App">
      <div className="card">
      {quotes.length ? (
        <>
          <p>{quotes[currentQuoteIndex]}</p>
          <button className="button" onClick={changeQuote}><span className="button-text">GIVE ME ADVICE!</span></button>
        </>
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
    </div>
  );
}

export default App;