import todoReducer, {
  initialState,
  addTodo,
  removeTodo,
  toggleStatusTodo,
  saveEditTodo,
} from "../model/todo-slice";

describe("todoSlice", () => {
  it("should return default state when passed empty action", () => {
    const result = todoReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });

  it("should add new todo item with 'addTodo' action", () => {
    const action = {
      type: addTodo.type,
      payload: "Починить машину",
    };

    const result = todoReducer(initialState, action);

    expect(result.todos[0].description).toBe("Починить машину");
    expect(result.todos[0].status).toBe(false);
  });

  it("should remove todo item with 'removeTodo' action", () => {
    const todos = [
      {
        id: 1743501351934,
        status: false,
        dateCreated: "1 апреля 12:55",
        description: "Починить машину",
      },
      {
        id: 2743501351934,
        status: true,
        dateCreated: "2 апреля 13:55",
        description: "Почитать книгу",
      },
    ];

    const action = {
      type: removeTodo.type,
      payload: 1743501351934,
    };

    const result = todoReducer({ ...initialState, todos }, action);

    expect(result.todos.length).toBe(1);
    expect(result.todos.find((todo) => todo.id === action.payload)).toBe(undefined);
  });

  it("should toggle status todo item with 'toggleStatusTodo' action", () => {
    const todos = [
      {
        id: 1743501351934,
        status: false,
        dateCreated: "1 апреля 12:55",
        description: "Починить машину",
      },
    ];

    const action = {
      type: toggleStatusTodo.type,
      payload: 1743501351934,
    };

    const result = todoReducer({ ...initialState, todos }, action);

    expect(result.todos[0].status).toBe(true);
  });

  it("should save edit description todo item with 'saveEditTodo' action", () => {
    const todos = [
      {
        id: 1743501351934,
        status: false,
        dateCreated: "1 апреля 12:55",
        description: "Починить машину",
      },
    ];

    const action = {
      type: saveEditTodo.type,
      payload: "Починить машину до 18:00",
    };

    const result = todoReducer({ ...initialState, edittingTodoId: 1743501351934, todos }, action);

    expect(result.todos[0].description).toBe(action.payload);
  });
});
