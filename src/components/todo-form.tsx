import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function TodoForm() {
  return (
    <form
      class="flex flex-row items-center space-x-3"
      hx-post="/api/todos"
      hx-swap="afterend"
      hx-ext="loading-states"
      data-loading-target="#todo-form-loader"
      data-loading-class-remove="hidden"
      data-loading-path="/api/todos"
      _="on htmx:beforeRequest remove #server-error
        on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after me
            else reset() me"
    >
      <Input type="text" name="content" placeholder="content" />
      <Button id="submit" data-loading-disable data-loading-busy type="submit">
        <Icons.loader2
          id="todo-form-loader"
          class="hidden mr-2 w-6 h-6 animate-spin"
        />
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
