// // Local Fetching of Quotes
// function newQuotesLocal() {
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   console.log(quote);
// }

// newQuotesLocal();

// DOM Elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const xTwitterButton = document.getElementById("x-twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// API fetching of Quotes
let apiQuotes = [];

function showLoading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function newQuotes() {
  showLoading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  !quote.author
    ? (authorText.textContent = "Unknown")
    : (authorText.textContent = quote.author);
  // console.log(quote);

  if (quote.text.length > 250) {
    quoteText.classList.add("long-text");
  } else {
    quoteText.classList.remove("long-text");
  }
  quoteText.textContent = quote.text;
  hideLoading();
}

async function getQuotes() {
  showLoading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {}
}

// Button Click Events
function tweetQuote() {
  const xTwitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(xTwitterUrl, "_blank");
}

xTwitterButton.addEventListener("click", tweetQuote);
newQuoteButton.addEventListener("click", newQuotes);

// Call function
getQuotes();
