import Todo from "../Models/todoModel.js";

const addTodo = async (req, res) => {
  const { title, desc } = req.body;

  console.log(req.body);
  const todo = await Todo.create({
    title,
    desc,
    user:req.user._id,
  });

  // response pass in a json format
  res.json(todo);
};

const getTodo = async (req, res) => {
  const todos = await Todo.find({user:req.user._id});
  res.json(todos);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Todo.findByIdAndDelete(id);
  res.send("deleted");
};

const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, desc,status } = req.body;

  const todo = await Todo.findById(id);

  // todo.titile il njamal adikkana new title varum || allel todo il ullath thanne ayil kaanikkum
  todo.title = title || todo.title;
  todo.desc = desc || todo.desc;
  todo.status = status || todo.status;

  // save function vacchu update aakki updatedTodo kk store aakki
  const updatedTodo = await todo.save();

  // updated todo ne frontent kk pass aakka
  res.json(updatedTodo);
};
export { addTodo, getTodo, deleteTodo, getTodoById, updateTodo };
