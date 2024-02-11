import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./inputarea";
import Note from "./Note.jsx"

function App() {
  let [cardl , addcardl]=useState([])
  function additem(card){
    addcardl(cardl.concat(card))
    return cardl 
    
}
function deleteitem(id){
  addcardl(cardl.filter((item,index)=>{return index!==id }))
  
  return cardl
}
  return (
    <div>
      <Header />
      <Input onclicked={additem}/>
      {cardl.map((x,index)=><Note key={index} id={index} title={x.title} content={x.content} onclicked={deleteitem} />)}
      <Footer />
    </div>
  );
}
export default App;
