import { Todo } from "@/db/schema/todo";
import { Checkbox } from "./ui/checkbox";
import { removeErrorMessageIfExistsBeforeHtmxRequest } from "@/lib/hyperscript";

function TodoCheckbox({ id, completed }: Todo) {
  return (
    <Checkbox
      id={id}
      checked={completed}
      hx-target="closest label"
      hx-swap="outerHTML"
      hx-post={`/api/todos/toggle/${id}`}
      _={`${removeErrorMessageIfExistsBeforeHtmxRequest("#server-error")}
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after #todo-item-${id}`}
    />
  );
}

export default TodoCheckbox;
