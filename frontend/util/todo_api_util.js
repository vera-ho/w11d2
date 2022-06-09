export const fetchToDos = () => (
    $.ajax({
        method: "GET",
        url: "/api/todos"
    })
)

