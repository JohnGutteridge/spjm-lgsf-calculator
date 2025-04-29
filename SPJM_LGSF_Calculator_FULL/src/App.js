
import React, { useState } from 'react';

function App() {
  const [quoteRequested, setQuoteRequested] = useState(false);

  const handleRequestQuote = (e) => {
    e.preventDefault();
    setQuoteRequested(true);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>SPJM LGSF Cost Calculator</h1>
      <p>Estimate your project costs in real-time. Export results and request a quote directly.</p>

      <h2>Request a Quote</h2>
      {quoteRequested ? (
        <p>✅ Thank you! We'll contact you soon.</p>
      ) : (
        <form onSubmit={handleRequestQuote}>
          <input type="text" placeholder="Your Name" required /><br /><br />
          <input type="email" placeholder="Email" required /><br /><br />
          <input type="text" placeholder="Phone (optional)" /><br /><br />
          <select required>
            <option value="">Select Project Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Mixed-Use</option>
          </select><br /><br />
          <textarea placeholder="Project Details" required></textarea><br /><br />
          <button type="submit">Request Quote</button>
        </form>
      )}
    </div>
  );
}

export default App;
