import TodoForm from "./todo-form";
import TodoItem from "./todo-item";
import { Todo } from "../db/schema/todo";

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="space-y-3">
      <TodoForm />
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
