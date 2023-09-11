import * as elements from "typed-html";
import { Todo } from "../db/schema/todo";

function TodoItem({ id, content, completed }: Todo) {
  return (
    <div class="flex flex-row items-center space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/api/todos/toggle/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      />
      <button
        class="text-red-500"
        hx-delete={`/api/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
