
import { useState } from "react";


const Quotes = () => {
  const [quote, setQuote] = useState("wisdom");
  const [selectedText, setSelectedText] = useState([
    { author: "", quote: "", categories: [] },
  ]);


  const imagePath = quote === "all" ? "/public/img/all.JPG" : `/public/img/${quote}.JPG`;

  async function getQuote() {
    let url =
      quote === "all"
        ? `https://api.api-ninjas.com/v2/randomquotes`
        : `https://api.api-ninjas.com/v2/quotes?categories=${quote}`;
    const response = await fetch(url, {
      headers: { "X-Api-Key": "QfdBJbKcMXAuPDzbLc822urUT7AyhN1OWiwsCpvt" },
    });
    setSelectedText(await response.json());
  }
  
  return (
    <div className="container">
      <div className="quotes-flex">
        <div className="quotes-top">
          <img 
            className="top-img" 
            src={imagePath} 
            alt="img"
          ></img>
        </div>

        <div className="quotes-bottom">
          <select
            value={quote}
            onChange={function (event) {
              setQuote(event.target.value);
            }}
          ><option value="all">any category</option>
            <option value="wisdom">wisdom</option>
            <option value="life">life</option>
            <option value="time">time</option>
            
          </select>
          <button
            onClick={() => {
              getQuote();
            }}
            className="click"
          >
            Show quote
          </button>

          <p>{selectedText[0].author}</p>
          <p>{selectedText[0].quote}</p>
          <ul>
            {selectedText[0].categories.map((el, index) => {
              return (
                <li
                  key={index}
                  style={{
                    backgroundColor: quote === el ? "#764ba2" : "transparent",
                  }}
                >
                  '{el}'
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quotes;