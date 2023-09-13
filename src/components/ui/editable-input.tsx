import { PropsWithChildren } from "@kitajs/html";
import { Input } from "./input";
import { cn } from "util/classname-helper";
import { Icons } from "../icons";

function EditableInput({
  class: className,
  ...props
}: PropsWithChildren<JSX.HtmlInputTag & Htmx.Attributes>) {
  return (
    <div id={`todo-editable-container-${props.id}`} class="space-y-2">
      <button
        safe
        id={`todo-editable-preview-${props.id}`}
        tabindex="0"
        class="data-[state=true]:hidden"
        _="on click toggle [@data-state=true] on me then toggle [@data-state=true] on the next <div/>"
      >
        {props.value}
      </button>
      <div class="hidden data-[state=true]:grid gap-1">
        <Input
          id={`todo-editable-input-${props.id}`}
          name={props.name}
          class={cn("", className)}
          hx-post={`${props["hx-post"]}`}
          hx-target={props["hx-target"]}
          hx-swap={props["hx-swap"]}
          hx-ext="loading-states"
          data-loading-target={`#editable-loader-${props.id}`}
          data-loading-class-remove="hidden"
          data-loading-path={props["hx-post"]}
          _={props._}
          {...props}
        />
        <p class="text-sm text-muted-foreground">
          Press enter/return to proceed.
        </p>
      </div>

      <Icons.loader2
        id={`editable-loader-${props.id}`}
        class="hidden mr-2 w-6 h-6 animate-spin"
      />
    </div>
  );
}

export default EditableInput;
