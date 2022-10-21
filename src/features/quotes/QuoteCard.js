import React from "react";
import {useDispatch} from "react-redux";
import {votesUp, votesDown, deleteQuote} from "./quotesSlice"
// import store from "../../store";

function QuoteCard({quote, name, content, votes}) {
  const dispatch = useDispatch()

  function handleUpClick(){
    dispatch(votesUp(quote.id))
  }

  function handleDownClick(){
    dispatch(votesDown(quote.id))
  }

  function handleDelete(){
    dispatch(deleteQuote(quote.id))
  }
  
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{name}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownClick}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
