import { NavLink } from 'react-router-dom';
import useTodos from '../../hook/useTodos';
import ShowTodo from './ShowTodo';

const Todo = () => {
     const [todos , setTodos] = useTodos()
     return (
          <div>
            <h2 className='text-center text-2xl text-gray-700 font-bold'>Todos</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 m-2 '>
                 {
                      todos.map(todo => <ShowTodo  todo={todo} key={todo._id}></ShowTodo>)
                 }

            </div>
            <div className='text-center mt-10'>

            <NavLink to="/addtodo">
            <button class="btn">Add Todo</button>

            </NavLink>
            </div>
          </div>
     );
};

export default Todo;