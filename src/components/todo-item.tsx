import { Todo } from "@/db/schema/todo";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import TodoCheckbox from "./todo-checkbox";
import TodoEditable from "./todo-editable";
import { removeErrorMessageIfExistsBeforeHtmxRequest } from "@/lib/hyperscript";

function TodoItem(todo: Todo) {
  const { id } = todo;

  return (
    <div
      id={`todo-item-${id}`}
      class="flex justify-between items-center space-x-3 px-4 py-2 bg-muted rounded-md"
    >
      <TodoEditable {...todo} />
      <div class="flex gap-4 items-center">
        <TodoCheckbox {...todo} />
        <Button
          variant="destructive"
          size="icon"
          hx-delete={`/api/todos/${id}`}
          hx-target={`#todo-item-${id}`}
          hx-swap="outerHTML"
          hx-ext="loading-states"
          data-loading-target={`#todo-loader-${id}`}
          data-loading-class-remove="hidden"
          data-loading-path={`/api/todos/${id}`}
          _={`${removeErrorMessageIfExistsBeforeHtmxRequest("#server-error")}
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after #todo-item-${id}`}
        >
          <Icons.loader2
            id={`todo-loader-${id}`}
            class="hidden mr-2 w-4 h-4 animate-spin"
          />
          <Icons.Trash2 class="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
