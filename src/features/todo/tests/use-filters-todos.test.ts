import { useFiltersTodos } from "../model/use-filters-todos";
import { act, renderHook } from "@testing-library/react";

describe("useFiltersTodos", () => {
  it("should filter todos by status complete", () => {
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
      {
        id: 3743501351934,
        status: true,
        dateCreated: "3 апреля 13:55",
        description: "Поход в кино",
      },
    ];

    const { result } = renderHook(() => useFiltersTodos(todos));

    act(() => result.current.setFilter("active"));
    let filteredTodos = result.current.filteredTodos;
    expect(filteredTodos.length).toBe(1);
    expect(filteredTodos.every((todo) => !todo.status)).toBe(true);

    act(() => result.current.setFilter("completed"));
    filteredTodos = result.current.filteredTodos;
    expect(filteredTodos.length).toBe(2);
    expect(filteredTodos.every((todo) => todo.status)).toBe(true);

    act(() => result.current.setFilter("all"));
    filteredTodos = result.current.filteredTodos;
    expect(filteredTodos).toEqual(todos);
  });
});
