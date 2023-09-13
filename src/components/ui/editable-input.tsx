import { PropsWithChildren } from "@kitajs/html";
import { Icons } from "../icons";
import { cn } from "util/classname-helper";

function EditableInput({
  idPrefix,
  class: className,
  ...props
}: PropsWithChildren<
  JSX.HtmlInputTag &
    Htmx.Attributes & {
      idPrefix: string;
    }
>) {
  return (
    <div id={`${idPrefix}-container-${props.id}`} class="space-y-2">
      <span
        {...props}
        id={`${idPrefix}-preview-${props.id}`}
        class={cn(
          "rounded-md w-full [&[contenteditable]]:focus:border-none [&[contenteditable]]:focus:outline-none [&[contenteditable]]:focus-visible:ring-2 [&[contenteditable]]:focus-visible:ring-ring [&[contenteditable]]:focus-visible:ring-offset-2",
          className
        )}
        contenteditable="true"
        hx-post={`${props["hx-post"]}`}
        hx-target={props["hx-target"]}
        hx-trigger={props["hx-trigger"]}
        hx-include={props["hx-include"]}
        hx-ext="loading-states"
        data-loading-target={`#${idPrefix}-loader-${props.id}`}
        data-loading-class-remove="hidden"
        data-loading-path={props["hx-post"]}
      >
        {props.value}
      </span>
      <input
        id={`${idPrefix}-hidden-${props.id}`}
        type="hidden"
        value={props.value}
        name={props.name}
        _={`on keyup from #${idPrefix}-preview-${props.id} put its innerHTML into my @value`}
      />

      <Icons.loader2
        id={`${idPrefix}-loader-${props.id}`}
        class="hidden mr-2 w-6 h-6 animate-spin"
      />
    </div>
  );
}

export default EditableInput;
