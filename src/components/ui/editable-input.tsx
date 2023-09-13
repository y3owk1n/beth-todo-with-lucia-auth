import { PropsWithChildren } from "@kitajs/html";
import { Input } from "./input";
import { cn } from "util/classname-helper";
import { StringifiedBoolean } from "@/types/util";
import { Icons } from "../icons";

function EditableInput({
  editState = "false",
  class: className,
  ...props
}: PropsWithChildren<
  JSX.HtmlInputTag & Htmx.Attributes & { editState?: StringifiedBoolean }
>) {
  return (
    <div
      id={`todo-editable-container-${props.id}`}
      data-state={editState}
      class="space-y-2"
    >
      <input hidden name={`todo-edit-state`} value={editState} />
      <button
        safe
        id={`todo-editable-preview-${props.id}`}
        tabindex="0"
        data-state={editState}
        class="data-[state=true]:hidden"
        hx-post={props["hx-post"]}
        hx-include={props["hx-include"]}
        hx-target={props["hx-target"]}
        hx-swap={props["hx-swap"]}
        hx-ext="loading-states"
        data-loading-target={`#editable-loader-${props.id}`}
        data-loading-class-remove="hidden"
        data-loading-path={props["hx-post"]}
        _={props._}
      >
        {props.value}
      </button>
      <Input
        id={`todo-editable-input-${props.id}`}
        name={props.name}
        data-state={editState}
        class={cn("data-[state=false]:hidden", className)}
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
      <p
        data-state={editState}
        class="text-sm text-muted-foreground data-[state=false]:hidden"
      >
        Press enter/return to proceed.
      </p>

      <Icons.loader2
        id={`editable-loader-${props.id}`}
        class="hidden mr-2 w-6 h-6 animate-spin"
      />
    </div>
  );
}

export default EditableInput;
