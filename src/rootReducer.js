const initialState = {
   memes: []
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_MEME":
         return {
            ...state,
            memes: [
               ...state.memes, { ...action.memes }
            ]
         };
      case "DELETE_MEME":
         return {
            ...state,
            memes: state.memes.filter(meme => meme.id !== action.id)
         }
      default:
         return state;
   }
}

export default rootReducer;