import { PropsWithChildren } from "@kitajs/html";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "util/classname-helper";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  class: className,
  variant,
  children,
  ...props
}: PropsWithChildren<JSX.HtmlTag & VariantProps<typeof alertVariants>>) {
  return (
    <div
      role="alert"
      class={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertTitle({
  class: className,
  children,
  ...props
}: PropsWithChildren<JSX.HtmlTag>) {
  return (
    <h5
      class={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h5>
  );
}

function AlertDescription({
  children,
  class: className,
  ...props
}: PropsWithChildren<JSX.HtmlTag>) {
  return (
    <p class={cn("text-sm [&_p]:leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export { Alert, AlertTitle, AlertDescription };
