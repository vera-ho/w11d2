export const fetchToDos = () => (
    $.ajax({
        method: "GET",
        url: "/api/todos"
    })
)

export const createToDo = (todo) => {
    // debugger
    return $.ajax({
        method: "POST",
        url: "/api/todos",
        data: todo
    })
}