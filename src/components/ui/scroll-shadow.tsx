import { PropsWithChildren } from "@kitajs/html";
import { cn } from "util/classname-helper";

function ScrollShadow({
  class: className,
  children,
  orientation = "vertical",
  shadowSize = 80,
  ...props
}: PropsWithChildren<
  JSX.HtmlTag & {
    orientation: "horizontal" | "vertical";
    shadowSize: number;
  }
>) {
  return (
    <div
      role="alert"
      class={cn(
        "space-y-3 max-h-96 overflow-y-auto data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
        className,
      )}
      data-orientation={orientation}
      data-top-scroll="false"
      data-bottom-scroll="true"
      style={`--scroll-shadow-size: ${shadowSize}px;`}
      _={`on scroll
            set contentHeight to event.target.scrollHeight
            set scrolledHeight to event.target.scrollTop + event.target.clientHeight
            if event.target.scrollTop is greater than 0 and scrollHeight is not contentHeight
                log 'scrolling'
                then remove @data-top-scroll from me
                then remove @data-bottom-scroll from me
                then add [@data-top-bottom-scroll=true] to me
            end
            if event.target.scrollTop == 0
                log 'at top'
                then add [@data-top-scroll=false] to me
                then add [@data-bottom-scroll=true] to me
                then remove @data-top-bottom-scroll from me
            end
            if scrolledHeight == contentHeight
                log 'at bottom'
                then add [@data-top-scroll=true] to me
                then add [@data-bottom-scroll=false] to me
                then remove @data-top-bottom-scroll from me
            end
`}
      {...props}
    >
      {children}
    </div>
  );
}

export { ScrollShadow };
