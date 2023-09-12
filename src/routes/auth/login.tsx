import BaseHtml from "@/components/base-html";
import { NonDashboardLayout } from "@/components/layout/non-dashboard";
import LoginForm from "@/components/login-form";

export async function get() {
  return (
    <BaseHtml>
      <NonDashboardLayout>
        <section class="text-center">
          <h1 class="mb-2 text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p class="text-muted-foreground mb-4 text-sm">
            Login to your account now.
          </p>
        </section>
        <LoginForm />
      </NonDashboardLayout>
    </BaseHtml>
  );
}
