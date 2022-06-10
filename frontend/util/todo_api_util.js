export const fetchToDos = () => (
    $.ajax({
        method: "GET",
        url: "/api/todos"
    })
)

export const createTodo = (todo) => {
    return $.ajax({
        method: "POST",
        url: "/api/todos",
        data: { todo: todo }
        // data: todo
    })
}