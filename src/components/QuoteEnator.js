import { useState } from 'react';
import './QuoteEnator.scss';
const quoteBank = [
    {
      "quote": "Content precedes design. Design in the absence of content is not design, it's decoration.",
      "author": "Jeffrey Zeldman",
      "category": "Famous"
    },
    {
      "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
      "author": "A. J. Liebling",
      "category": "Famous"
    },
    {
      "quote": "This book fills a much-needed gap.",
      "author": "Moses Hadas in a review",
      "category": "Famous"
    },
    {
      "quote": "A mathematician is a device for turning coffee into theorems.",
      "author": "Paul Erdos",
      "category": "Famous"
    },
    {
      "quote": "The only difference between me and a madman is that I'm not mad.",
      "author": "Salvador Dali",
      "category": "Famous"
    },
    {
      "quote": "Content informs design; design without content is decoration.",
      "author": "Jeffrey Zeldman",
      "category": "Famous"
    },
    {
      "quote": "If you are going through hell, keep going.",
      "author": "Sir Winston Churchill ",
      "category": "Famous"
    },
    {
      "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
      "author": "Friedrich Nietzsche",
      "category": "Famous"
    },
    {
      "quote": "Usability is like love. You have to care, you have to listen, and you have to be willing to change. You’ll make mistakes along the way, but that’s where growth and forgiveness come in.",
      "author": "Jeffrey Zeldman",
      "category": "Famous"
    },
    {
      "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
      "author": "Frank Lloyd Wright",
      "category": "Famous"
    },
    {
      "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
      "author": "Sir Winston Churchill",
      "category": "Famous"
    }
  ];
  const backgrounds = [
    'brown', 'orange', 'black', 'gray', 'blue', 'navy', 'purple', 'darkcyan'
  ];

  const NewQuoteButton = ({pick}) => {
    return (
      <button 
        onClick={pick}
        className="btn btn-primary" id="new-quote">New Quote</button>
    )
  }

  export default function QuoteEnator() {

  let pick = Math.floor(Math.random() * (quoteBank.length -1));
  const [quote, setQuote] = useState(pick);
  const [bgColor, setBgColor] = useState(0);
  
  const returnRand =(len)=> {
    return Math.floor(Math.random() * (len));
  }
  const pickNew =()=> {
    let newQuote = returnRand(quoteBank.length);
    let newBg = returnRand(backgrounds.length);
    setQuote(newQuote);
    setBgColor(newBg);
  }
  return (
      <div id="main" className="text-center">
        <div id="quote-box"
          style={{backgroundColor : backgrounds[bgColor]}}
          >
          <p id="text">{quoteBank[quote].quote}</p>
          <p id="author">
            <a target="_blank"
              href={"https://en.wikipedia.org/wiki/" + 
                   quoteBank[quote].author.replace(' ','_')}
            >{quoteBank[quote].author}</a></p>
          <p id="share">
            <a href={"https://twitter.com/intent/tweet?hashtags=quotes&text=%22" + quoteBank[quote].quote + "%22%20" + quoteBank[quote].author} 
              id="tweet-quote" 
              target="_blank">
              <i class="fa-brands fa-twitter"></i> Tweet This</a>
          </p>
         <p id="new">
            <NewQuoteButton pick={pickNew} />
          </p>
        </div>
      </div>
    )
  
  }