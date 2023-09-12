import { PropsWithChildren } from "@kitajs/html";

export function NonDashboardLayout({ children }: PropsWithChildren) {
  return (
    <main class="container flex h-screen min-h-screen w-screen flex-col items-center justify-center">
      <div class="mx-auto flex w-full max-w-[350px] flex-col justify-center gap-4">
        {children}
      </div>
    </main>
  );
}
