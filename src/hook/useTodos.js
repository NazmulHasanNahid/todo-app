const { useState, useEffect } = require("react")

const useTodos = () =>{
     const [todos , setTodos] = useState([])
     useEffect(()=>{
          fetch('https://powerful-mesa-99940.herokuapp.com/todos')
           .then(res => res.json())
           .then(data => setTodos(data))
     },[])
     return [todos , setTodos]
}

export default useTodos;