import "./Quotes.css";

function Quotes() {
  const quotes = [
    {
      quote:
        "Should we fear <span>h4ckers?</span> Intention is at the heart of this discussion.",
      author: "Kevin Mitnick",
    },
    {
      quote: "No technology that’s connected to the internet is unhackable.",
      author: "Kevin Mitnick",
    },
    {
      quote: "The best defense against a nuke is not another nuke, but a code.",
      author: "Abhijit Naskar",
    },
  ];

  return (
    <>
      <div className="quote-container">
        {quotes.map((quote, index) => (
          <div className="quote-box" key={index}>
            <h2 dangerouslySetInnerHTML={{ __html: quote.quote }} />
            <p>- {quote.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Quotes;
