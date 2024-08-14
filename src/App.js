import Main from "./component/Main";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import AddNewItem from "./component/AddNewItem";
import UpdateItem from "./component/UpdateItem";
import DisplayAllItems from "./component/DisplayAllItems";
import { Route,Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Updateshow from "./component/updateshow";
import Delete from "./component/DeleteItem";
function App(){
  return(
    <>
    <Main/>
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/updateshow" element={<Updateshow/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/delete" element={<Delete/>} />
      <Route path="/add" element={<AddNewItem/>} />
      <Route path="/update/:id" element={<UpdateItem/>} />
      <Route path="/display" element={<DisplayAllItems/>} />
      </Routes>
    <Footer/>
    </>

  )

}
export default App;