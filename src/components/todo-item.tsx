import { Todo } from "@/db/schema/todo";

function TodoItem({ id, content, completed }: Todo) {
  return (
    <div class="flex flex-row items-center space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/api/todos/toggle/${id}`}
        _="on htmx:beforeRequest remove #error-message
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after closest parent <div />
            else put detail.xhr.responseText into me"
      />
      <button
        class="text-red-500"
        hx-delete={`/api/todos/${id}`}
        _="on htmx:beforeRequest remove #error-message
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after closest parent <div />
            else put detail.xhr.responseText into me"
      >
        Delete
      </button>
      <div id="todo-error"></div>
    </div>
  );
}

export default TodoItem;
