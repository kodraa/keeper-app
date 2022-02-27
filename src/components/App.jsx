import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems] = useState([]);

  function addItems(content,title){
      setItems(prevItems => {
        return [...prevItems, { title: title, content: content }];
      });
    
  }
  
  function deleteItems(id){
    setItems((prevItems =>{
      return prevItems.filter((item,index) =>{
        return index !== id;
      });
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addItems}/>
      {items.map((item,index) => 
      <Note onDelete={deleteItems} id={index} key={index} title={item.title} content={item.content}/>
      )}
      <Footer />
    </div>
  );
}

export default App;
