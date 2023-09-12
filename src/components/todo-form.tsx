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
      data-loading-target="#loader"
      data-loading-class-remove="hidden"
      _="on htmx:beforeRequest remove #server-error
        on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText before <button />
            else reset() me"
    >
      <Input type="text" name="content" placeholder="content" />
      <Button id="submit" data-loading-disable data-loading-busy type="submit">
        <Icons.loader2 id="loader" class="hidden mr-2 w-6 h-6 animate-spin" />
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
