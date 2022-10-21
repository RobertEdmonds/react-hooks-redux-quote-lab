// Action Creators
// TODO: Create action creators as defined in tests
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
}

export function votesUp(quote) {
  return {
    type: "votes/up",
    payload: quote,
  };
}

export function votesDown(quote) {
  return {
    type: "votes/down",
    payload: quote,
  };
}

export function deleteQuote(quote){
  return{
    type: "delete/quote",
    payload: quote
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "votes/up":
      return state.map((quote) => {
        if (quote.id === action.payload) {
          return {
            ...quote,
            votes: quote.votes + 1,
          };
        } else {
          return quote;
        }
      });
    case "votes/down":
      return state.map((quote) => {
        if (quote.id === action.payload) {
          return {
            ...quote,
            votes: quote.votes - 1,
          };
        } else {
          return quote;
        }
      });
    case "delete/quote":
      const newQuote = state.filter((quote) => quote.id !== action.payload);
      return newQuote;
    default:
      return state;
  }
}
