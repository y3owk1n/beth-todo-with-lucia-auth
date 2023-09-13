import { Todo } from "@/db/schema/todo";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import TodoCheckbox from "./todo-checkbox";

function TodoItem(todo: Todo) {
  const { id, content } = todo;
  return (
    <div
      id={`todo-item-${id}`}
      class="flex justify-between items-center space-x-3"
    >
      <p>{content}</p>
      <div class="flex gap-4 items-center">
        <TodoCheckbox {...todo} />
        <Button
          variant="destructive"
          hx-delete={`/api/todos/${id}`}
          hx-target={`#todo-item-${id}`}
          hx-swap="outerHTML"
          hx-ext="loading-states"
          data-loading-target={`#todo-loader-${id}`}
          data-loading-class-remove="hidden"
          data-loading-path={`/api/todos/${id}`}
          _={`on htmx:beforeRequest remove #server-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after #todo-item-${id}`}
        >
          <Icons.loader2
            id={`todo-loader-${id}`}
            class="hidden mr-2 w-6 h-6 animate-spin"
          />
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
