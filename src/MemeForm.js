import { useState } from "react";
import { v4 as uuidv4} from "uuid"


   const initialForm = {
      url: "",
      topText: "",
      bottomText: ""
   }

   const MemeForm = ({addMeme}) => {
      const [form, setForm] = useState(initialForm);

      const handleSubmit = (e) => {
         e.preventDefault();
         addMeme({ ...form, id: uuidv4()})
         setForm(initialForm);
      }

      const handleChange = (e) => {
         const { name, value } = e.target;
         setForm(prevForm => ({ ...prevForm, [name]: value })) 
      }

      return (
         <div>
            <form onSubmit={handleSubmit}>
               <label htmlFor="url">Image URL</label>
               <input
                  type="text"
                  name="url"
                  id="form_url"
                  onChange={handleChange}
                  value={form.url}
               />
               <label htmlFor="topText">Top Text</label>
               <input
                  type="text"
                  name="topText"
                  id="form_topText"
                  onChange={handleChange}
                  value={form.topText}
               />
               <label htmlFor="bottomText">Bottom Text</label>
               <input
                  type="text"
                  name="bottomText"
                  id="form_bottomText"
                  onChange={handleChange}
                  value={form.bottomText}
               />
               <button type="submit" id="form_submit">
                  Generate Meme!
               </button>
            </form>
         </div>
      )
   }


   


export default MemeForm;