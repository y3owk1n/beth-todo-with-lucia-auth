import { Button, buttonVariants } from "@/components/ui/button";
import { PropsWithChildren } from "@kitajs/html";
import { cn } from "util/classname-helper";
import { Icons } from "../icons";

function Modal({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <div class={cn("", className)} {...props}>
      {children}
    </div>
  );
}

function ModalTrigger({
  children,
  id,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlButtonTag) {
  return (
    <Button
      class={cn(buttonVariants(), className)}
      _={`on click showModal() from #modal-${id}`}
      {...props}
    >
      {children}
    </Button>
  );
}

function ModalOverlay({
  children,
  id,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <form
      method="dialog"
      class={cn(
        "fixed m-0 inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    >
      <button class="w-full h-full focus-visible:outline-none">Close</button>
    </form>
  );
}

function ModalContent({
  children,
  id,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlFormTag) {
  return (
    <dialog id={`modal-${id}`} class="">
      <ModalOverlay />
      <form
        method="dialog"
        class={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
          className
        )}
        {...props}
      >
        {children}
      </form>
    </dialog>
  );
}

function ModalHeader({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <div
      class={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function ModalTitle({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <h2 class={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}

function ModalDescription({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <p class={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

function ModalFooter({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <div
      class={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ModalAction({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlButtonTag) {
  return (
    <Button type="submit" class={cn("", className)} {...props}>
      {children}
    </Button>
  );
}

function ModalCancel({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlButtonTag) {
  return (
    <Button variant="outline" class={cn("mt-2 sm:mt-0", className)} {...props}>
      {children}
    </Button>
  );
}

function ModalCloseButton({
  class: className,
}: PropsWithChildren & JSX.HtmlButtonTag) {
  return (
    <Button
      variant="outline"
      size="icon"
      class={cn("absolute right-2 top-2", className)}
    >
      <Icons.X class="w-6 h-6" />
    </Button>
  );
}

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalAction,
  ModalCancel,
  ModalCloseButton,
};
