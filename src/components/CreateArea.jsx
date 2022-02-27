import React, { useState } from "react";

function CreateArea(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if(name === "title") {
      setTitle(value);
    } else if(name === "content") {
      setContent(value);
    }
  }
  return (
    <div>
      <form >
        <input onChange={handleChange} name="title" placeholder="Title" value={title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={content}/>
        <button onClick={(event)=>{
          if(content && title){
            props.onClick(content,title);
            setTitle("");
            setContent("");
          } 
            event.preventDefault();
        }}>
        Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
