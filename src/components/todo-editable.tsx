import { Todo } from "@/db/schema/todo";
import EditableInput from "./ui/editable-input";
import { StringifiedBoolean } from "@/types/util";

function TodoEditable({
  id,
  content,
  editState,
}: Todo & {
  editState: StringifiedBoolean;
}) {
  return (
    <EditableInput
      id={id}
      hx-post={`/api/todos/editable/${id}`}
      hx-target={`#todo-editable-container-${id}`}
      hx-include={`#todo-editable-container-${id}`}
      hx-swap="outerHTML"
      type="text"
      name="todo-content"
      value={content}
      editState={editState}
      _={`on htmx:beforeRequest remove #server-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after #todo-item-${id}`}
    />
  );
}

export default TodoEditable;
