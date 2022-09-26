import { Add, Delete, Update } from "./todo.type";

let todos = localStorage.getItem("todos");

const initialState = {
  todos: todos ? JSON.parse(todos) : [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Add: {
      let UpdateTodos = [
        ...state.todos,
        {
          ...payload,
          id: Date.now(),
          status: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(UpdateTodos));
      return {
        ...state,
        todos: UpdateTodos,
      };
    }
    case Delete: {
      let newTodos = state.todos.filter((todo) => todo.id !== payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };
    }
    case Update: {
      let newTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          if (todo.status === false) {
            return {
              ...todo,
              status: true,
            };
          } else {
            return {
              ...todo,
              status: false,
            };
          }
        } else {
          return todo;
        }
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };
    }

    default: {
      return state;
    }
  }
};
