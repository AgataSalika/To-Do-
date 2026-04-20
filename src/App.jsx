import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [showToDos, setShowToDos] = useState(todos);

  const addTask = (userInput) => {
    if (
      userInput
    ) // если userInput не пустая строка, то создаем новую задачу и добавляем ее в массив задач
    {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
      setShowToDos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    setShowToDos([...todos.filter((todo) => todo.id !== id)]);
  };
  // если id текущей задачи (todo) не равен тому id, кот мы передали в функцию, то мы эту задачу добавляем в новый (результирующий) массив
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);

    setShowToDos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      )
    ])
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Список задач</h1>
          <h2>Количество задач: {todos.length}</h2>
        </header>

        <ToDoForm addTask={addTask} />

        <form>
          <input
            onChange={function (event) {
              setSearch(event.target.value);

              let filteredToDos = todos.filter((todo) => {
                return todo.task.includes(event.target.value);  
                 
              })
               console.log(filteredToDos);
               setShowToDos(filteredToDos)
            }}
            placeholder="Поиск"
            value={search}
          ></input>
        </form>
        <div className="tasks">
          {showToDos.map((todo, index) => {
            return (
              <ToDo
                index={index}
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
