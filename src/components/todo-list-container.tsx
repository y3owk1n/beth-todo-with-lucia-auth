import TodoForm from "./todo-form";
import { PropsWithChildren } from "@kitajs/html";

function TodoListContainer({ children }: PropsWithChildren) {
  return (
    <div class="space-y-3">
      <TodoForm />
      {children}
    </div>
  );
}

export default TodoListContainer;
