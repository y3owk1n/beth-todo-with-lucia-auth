import { PropsWithChildren } from "@kitajs/html";
import { Icons } from "../icons";
import { cn } from "util/classname-helper";
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
      class="peer h-6 w-6 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      hx-post={props["hx-post"]}
      hx-target={props["hx-target"]}
      hx-swap={props["hx-swap"]}
      _={props._}
    >
      <Icons.Check
        data-state={getDataState(checked)}
        class={cn("h-4 w-4 data-[state=unchecked]:hidden")}
      />
    </button>
  );
}

export { Checkbox };
