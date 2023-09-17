import { Todo } from "@/db/schema/todo";
import TodoItem from "./todo-item";
import { ScrollShadow } from "./ui/scroll-shadow";

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ScrollShadow id="todo-list">
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </ScrollShadow>
  );
}

export default TodoList;
