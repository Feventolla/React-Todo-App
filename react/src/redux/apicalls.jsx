// const addTodo = async (todo) => {
//   const token = localStorage.getItem("token");
//   console.log("token addd", token);
//   const res = await fetch("/api/todos", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });
//   const todos = await res.json();
//   setTitle(todos.title);
//   setDescription(todos.description);

//   setTodo([...todo, todos]);
//   console.log(todo);
// };
