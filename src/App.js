import Meme from './Meme';
import MemeForm from './MemeForm';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
   const memes = useSelector(state => state.memes);
   const dispatch = useDispatch();

   const addMeme = (newMeme) => {
      dispatch({ type: "ADD_MEME", meme: newMeme})
   }

   const deleteMeme = (id) => {
      dispatch({ type: "DELETE_MEME", id})
   }

   const memeComps = memes.map(m => (
      <Meme 
         key={m.id}
         topText={m.topText}
         bottomText={m.bottomText}
         url={m.url}
         deleteMeme={() => deleteMeme(m.id)}
      />
   ));
      

  return (
    <div className="App">
      <MemeForm addMeme={addMeme} />
      <hr />
      {memeComps}
    </div>
  );
}

export default App;
