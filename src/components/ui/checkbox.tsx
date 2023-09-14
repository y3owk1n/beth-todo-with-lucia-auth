import { PropsWithChildren } from "@kitajs/html";
import { Icons } from "../icons";
import { CheckState } from "@/types/util";

type DataState = CheckState;

function getDataState(checked: boolean | string | undefined): DataState {
  if (typeof checked === "boolean") {
    if (checked === true) {
      return "checked";
    } else {
      return "unchecked";
    }
  }

  return "indeterminate";
}

function Checkbox({
  class: className,
  variant,
  id,
  checked,
  ...props
}: PropsWithChildren<JSX.HtmlInputTag & Htmx.Attributes>) {
  return (
    <button
      id={id}
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-state={getDataState(checked)}
      value="on"
      class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      hx-post={props["hx-post"]}
      hx-target={props["hx-target"]}
      hx-swap={props["hx-swap"]}
      _={props._}
    >
      <span class="flex items-center justify-center text-current">
        <Icons.Check
          data-state={getDataState(checked)}
          class={
            "h-4 w-4 data-[state=checked]:animate-in data-[state=checked]:fade-in data-[state=checked]:zoom-in data-[state=checked]:ease-in-out data-[state=unchecked]:hidden"
          }
        />
      </span>
    </button>
  );
}

export { Checkbox };
