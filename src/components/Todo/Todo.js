import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useTodos from '../../hook/useTodos';
import Loading from '../Shared/Loading';
import ShowTodo from './ShowTodo';

const Todo = () => {
     const [todos , setTodos] = useTodos()
     return (
          <div>
            <h2 className='text-center text-2xl text-red-300'>Todos {todos.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 mt-6 '>
                 {
                      todos.map(todo => <ShowTodo  todo={todo} key={todo._id}></ShowTodo>)
                 }
            </div>
          </div>
     );
};

export default Todo;