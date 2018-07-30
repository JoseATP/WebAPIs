const todos = [
  {
    "id":1,
    "name":"todo 1"
  },
  {
    "id":2,
    "name":"todo 2"
  },
  {
    "id":3,
    "name":"todo 3"
  },
]


exports.getTodos = (req, res, next) => {

    return res.status(200).json(todos);

}

exports.getTodo = (req, res, next) => {

    let todoId =  req.params.todo_id;

    let todo = todos.find((todo) => {
      return todo.id == todoId
    });

    if(!todo){
      return res.status(404).json({error: "Todo not found"});
    }

    return res.status(200).json(todo);

}

exports.updateTodo = (req, res, next) => {

    var todo =  req.params.todo_id;

    res.json("Todo "+ todo + " updated");

}

exports.createTodo = (req, res, next) => {

    res.json("Todo created");

}

exports.deleteTodo = (req, res, next) => {

    var todo =  req.params.todo_id;

    res.json("Todo "+ todo +" deleted");

}
