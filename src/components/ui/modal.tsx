import { Button, buttonVariants } from "@/components/ui/button";
import { PropsWithChildren } from "@kitajs/html";
import { cn } from "util/classname-helper";
import { Icons } from "../icons";
import cuid2 from "@paralleldrive/cuid2";
import { hx } from "util/hyperscript-helper";
import { VariantProps } from "class-variance-authority";

/**
 * Hyperscript helper to get dialog element from <ModalContent/>
 * It will return a `result` that can be used for next function
 */
const getDialogFromModalContent =
  "get the closest <dialog /> to the parentElement of me";

function Modal({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  const id = cuid2.createId();

  return (
    <div id={`modal-${id}`} class={cn("", className)} {...props}>
      {children}
    </div>
  );
}

function ModalTrigger({
  children,
  class: className,
  variant,
  size,
  ...props
}: PropsWithChildren &
  JSX.HtmlButtonTag &
  VariantProps<typeof buttonVariants>) {
  return (
    <Button
      {...props}
      class={cn(buttonVariants({ variant, size, className }))}
      _={`on click get the closest parent <div /> 
            then set modalId to its @id
            then showModal() from the first <dialog /> in #{modalId}
            then add @data-state='open' to the first <div /> in #{modalId}
            then add @data-state='open' to the first <form /> in #{modalId}
`}
    >
      {children}
    </Button>
  );
}

function ModalOverlay({
  children,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlTag) {
  return (
    <div
      id="modal-overlay"
      class={cn(
        "fixed m-0 inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    >
      <button
        class="w-full h-full focus-visible:outline-none"
        _={`on click ${getDialogFromModalContent}
                then set currentDialog to result
                then get the next <form/>
                then set currentForm to result
                then reset() from currentForm 
                then add @data-state='closed' to the first <div /> in currentDialog
                then add @data-state='closed' to the first <form /> in currentDialog
`}
      >
        Close
      </button>
    </div>
  );
}

function ModalContent({
  children,
  class: className,
  _: hxs,
  ...props
}: PropsWithChildren & Htmx.Attributes & JSX.HtmlFormTag) {
  return (
    <dialog class="">
      <ModalOverlay />
      <form
        class={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
          className,
        )}
        _={hx(
          `on webkitAnimationEnd 
            if event.animationName == 'exit' 
                then ${getDialogFromModalContent}
                then set currentDialog to result
                then add .hidden to currentDialog
                then close() from currentDialog
                then remove .hidden from currentDialog
            end
        `,
          hxs,
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
      id="modal-footer"
      class={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className,
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
  id,
  class: className,
  ...props
}: PropsWithChildren & JSX.HtmlButtonTag) {
  return (
    <Button
      type="button"
      value="cancel"
      variant="outline"
      class={cn("mt-2 sm:mt-0", className)}
      _={`on click ${getDialogFromModalContent} 
            then set currentDialog to result
            then get the closest <form/> to the parentElement of me
            then set currentForm to result
            then reset() from currentForm 
            then add @data-state='closed' to the first <div /> in currentDialog
            then add @data-state='closed' to the first <form /> in currentDialog
            then close() from currentDialog
`}
      {...props}
    >
      {children}
    </Button>
  );
}

function ModalCloseButton({
  class: className,
}: PropsWithChildren & JSX.HtmlButtonTag) {
  return (
    <Button
      type="button"
      _={`on click ${getDialogFromModalContent}
            then set currentDialog to result
            then get the closest <form/> to the parentElement of me
            then set currentForm to result
            then reset() from currentForm 
            then add @data-state='closed' to the first <div /> in currentDialog
            then add @data-state='closed' to the first <form /> in currentDialog
            then close() from currentDialog
`}
      value="cancel"
      variant="outline"
      size="icon"
      class={cn("absolute right-2 top-2", className)}
    >
      <Icons.X class="w-4 h-4" />
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
  getDialogFromModalContent,
};
