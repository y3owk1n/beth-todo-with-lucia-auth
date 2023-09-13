import { Todo } from "@/db/schema/todo";
import EditableInput from "./ui/editable-input";

function TodoEditable({ id, content }: Todo) {
  return (
    <>
      <EditableInput
        id={id}
        idPrefix="todo-editable"
        hx-post={`/api/todos/editable/${id}`}
        hx-target={`#todo-editable-container-${id}`}
        hx-include={`#todo-editable-container-${id}`}
        hx-trigger="blur delay:1000ms"
        hx-swap="outerHTML"
        name="todo-content"
        value={content}
      />
    </>
  );
}

export default TodoEditable;
