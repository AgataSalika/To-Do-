function ToDo({ todo, toggleTask, removeTask, index }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        // если todo.complete = true , то к диву добавляем 'item-text strike', если нет, то добавляем только 'item-text'
      >
        {index + 1}. {todo.task}
      </div>

      <div className="btn-box">
        <button className="ready-btn" onClick={() => toggleTask(todo.id)}>
          {todo.complete === true ? "Отменить" : "Выполнено"}
        </button>

        <button className="item-delete" onClick={() => removeTask(todo.id)}>
          Удалить задачу
        </button>
      </div>
    </div>
  );
}

export default ToDo;
