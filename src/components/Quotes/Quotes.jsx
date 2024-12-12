import "./Quotes.css";

function Quotes() {
  const quotes = [
    {
      quote:
        "Should we fear <span>h4ckers?</span> Intention is at the heart of this <span>discussion</span>. ",
      author: "Kevin Mitnick",
    },
    {
      quote:
        "No <span>technology</span>  that’s connected to the internet is <span>unhackable</span>. ",
      author: "Kevin Mitnick",
    },
    {
      quote:
        "The best <span>defense</span>  against a nuke is not another nuke, but a <span>code</span>. ",
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
