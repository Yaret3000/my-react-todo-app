import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButtom } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';


function AppUI(){
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        
            <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
    
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
            </TodoList>

            {openModal && (<Modal>
                <TodoForm/>
              </Modal>)}

      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export {AppUI};