import { Todo } from "@/db/schema/todo";
import { Checkbox } from "./ui/checkbox";

function TodoCheckbox({ id, completed }: Todo) {
  return (
    <Checkbox
      checked={completed}
      hx-target="this"
      hx-swap="outerHTML"
      hx-post={`/api/todos/toggle/${id}`}
      _={`on htmx:beforeRequest remove #server-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after #todo-item-${id}`}
    />
  );
}

export default TodoCheckbox;
