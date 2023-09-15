import { Todo } from "@/db/schema/todo";
import TodoForm from "./todo-form";
import TodoItem from "./todo-item";
import { ScrollShadow } from "./ui/scroll-shadow";

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="space-y-3">
      <TodoForm />
      <ScrollShadow>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </ScrollShadow>
    </div>
  );
}

export default TodoList;
