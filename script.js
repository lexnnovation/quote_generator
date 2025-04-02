// Local Fetching of Quotes
function newQuotes() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

newQuotes();

// API fetching of Quotes
