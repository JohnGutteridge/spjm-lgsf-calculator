
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [area, setArea] = useState(100);
  const [floors, setFloors] = useState(2);
  const [steelPrice, setSteelPrice] = useState(1.2);
  const [quoteRequested, setQuoteRequested] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const totalCost = area * floors * steelPrice * 25;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRequestQuote = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'quotes'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        area,
        floors,
        steelPrice,
        totalCost,
        timestamp: serverTimestamp()
      });
      setQuoteRequested(true);
    } catch (error) {
      alert("Failed to submit quote. Check Firebase config.");
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>SPJM LGSF Cost Calculator</h1>

      <h2>Project Inputs</h2>
      <label>Area (m²):</label><br />
      <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} /><br /><br />

      <label>Floors:</label><br />
      <input type="number" value={floors} onChange={(e) => setFloors(Number(e.target.value))} /><br /><br />

      <label>Steel Price (£/kg):</label><br />
      <input type="number" value={steelPrice} onChange={(e) => setSteelPrice(Number(e.target.value))} /><br /><br />

      <h2>Total Estimated Cost: £{totalCost.toLocaleString()}</h2>

      <h2>Request a Quote</h2>
      {quoteRequested ? (
        <p>✅ Thank you! Your quote has been submitted.</p>
      ) : (
        <form onSubmit={handleRequestQuote}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} required /><br /><br />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required /><br /><br />
          <textarea name="message" placeholder="Project Details" onChange={handleInputChange} required></textarea><br /><br />
          <button type="submit">Request Quote</button>
        </form>
      )}
    </div>
  );
}

export default App;
