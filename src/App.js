import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Shared/Header";
import AddTodo from "./components/Todo/AddTodo";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addtodo" element={<AddTodo/>}/>
      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;
