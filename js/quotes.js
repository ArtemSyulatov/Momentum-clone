const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuoteButton = document.querySelector(".change-quote");

async function getQuotes() {
  const quotes = "https://type.fit/api/quotes";
  const res = await fetch(quotes);
  const data = await res.json();
  let randomQuote = data[Math.floor(Math.random() * quotes.length)];
  if (randomQuote.author === null) {
    getQuotes();
  } else {
    quote.innerHTML = `${randomQuote.text}`;
    author.innerHTML = `${randomQuote.author}`;
  }
}
getQuotes();
changeQuoteButton.addEventListener("click", getQuotes);
