import { Todo } from "@/db/schema/todo";
import TodoForm from "./todo-form";
import TodoItem from "./todo-item";

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="space-y-3">
      <TodoForm />
      <div class="space-y-3" id="todo-items">
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
