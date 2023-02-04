import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQutes] = useState('');

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
      setQutes(data);
    });
  }
 
  // 🌊When refrash🌊
  useEffect(() => {
    getQuote();
  },[]);

  return (
    <div className={App} id="quote-box">
      <div id='text'>
        <p>{quotes.content}</p>
      </div>
      <div id='author'>
       <p>{quotes.author}</p>
      </div>
      <div className='btnContaniner'>
        <button onClick={getQuote} id='new-quote' className='btn'>
         Get Quote
        </button>
        <a href='' id='tweet-quote' className='btn'>
          Tweet
        </a>
      </div>
    </div>
  );
};

export default App
