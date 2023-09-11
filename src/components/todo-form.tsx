function TodoForm() {
  return (
    <form
      class="flex flex-row items-center space-x-3"
      hx-post="/api/todos"
      hx-swap="afterend"
      _="on htmx:beforeRequest remove #error-message
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText into #todo-error
            else reset() me"
    >
      <input type="text" name="content" class="border border-black" />
      <div id="todo-error"></div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
