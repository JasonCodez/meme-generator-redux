import PropTypes from "prop-types";

const Meme = ({ deleteMeme, topText, bottomText, url, id }) => {
   const handleDeleteMeme = () => {
      deleteMeme(id)
   }

   return (
      <div>
        <span>{topText}</span>
        <img src={url} alt="a meme" />
        <span>{bottomText}</span>
        <button id="meme_deleteBtn" onClick={handleDeleteMeme}>
          DELETE
        </button>
      </div>
   )
   
}

Meme.propTypes = {
   topText: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   bottomText: PropTypes.string.isRequired
};

export default Meme;