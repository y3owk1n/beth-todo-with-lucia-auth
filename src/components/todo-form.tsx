function TodoForm() {
  return (
    <form
      class="flex flex-row items-center space-x-3"
      hx-post="/api/todos"
      hx-swap="afterend"
      _="on submit target.reset()"
    >
      <input type="text" name="content" class="border border-black" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
