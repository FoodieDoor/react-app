import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {api} from '../../api';
import {useServerData} from '../../state/serverDataContext';

const Home = () => {
  const serverTodos = useServerData(data => {
    return data.todos || [];
  });
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(serverTodos);
  console.log(todos);
  return (
    <div>
      <h1>Home page</h1>
      <NavLink exact to="/about" activeClassName="active">
        About
      </NavLink>{' '}
      <br /> <br />
      <NavLink to="/logic" activeClassName="active">
        Link to logic page
      </NavLink>{' '}
      <br />
      <br />
      <a href="/about">Anchor tag for about</a>
      <form
        onSubmit={e => {
          e.preventDefault();

          const newTodo = {
            text,
          };

          api.todos.create(newTodo).then(res => {
            setTodos([...todos, res]);
            setText('');
          });
        }}
      >
        <label htmlFor="todo">Add a todo</label>
        <br />
        <input
          id="todo"
          type="text"
          value={text}
          autoComplete="off"
          onChange={e => setText(e.target.value)}
        />
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

Home.fetchData = req => {
  console.log(req.url, 'request');
  return api.todos.all().then(todos => {
    return {
      todos,
    };
  });
};

export default Home;
