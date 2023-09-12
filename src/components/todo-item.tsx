import { Todo } from "@/db/schema/todo";
import { Icons } from "./icons";
import { Button } from "./ui/button";

function TodoItem({ id, content, completed }: Todo) {
  return (
    <div class="flex justify-between items-center space-x-3">
      <p>{content}</p>
      <div class="flex gap-4 items-center">
        <input
          type="checkbox"
          checked={completed}
          hx-post={`/api/todos/toggle/${id}`}
          _="on htmx:beforeRequest remove #server-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after closest parent <div />
            else put detail.xhr.responseText into me"
        />
        <Button
          variant="destructive"
          hx-delete={`/api/todos/${id}`}
          hx-ext="loading-states"
          data-loading-target="#loader"
          data-loading-class-remove="hidden"
          _="on htmx:beforeRequest remove #server-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after closest parent <div />
            else put detail.xhr.responseText into me"
        >
          <Icons.loader2 id="loader" class="hidden mr-2 w-6 h-6 animate-spin" />
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
