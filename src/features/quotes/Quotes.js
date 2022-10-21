import React from "react";
// import store from "../../store";
import QuoteCard from "./QuoteCard";
import {useSelector} from "react-redux";

function Quotes() {
  const quotes = useSelector(store => store.quotes)

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotes.map(quote => <QuoteCard name={quote.author} content={quote.content} votes={quote.votes} />)}
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
