import BaseHtml from "@/components/base-html";
import { NonDashboardLayout } from "@/components/layout/non-dashboard";
import RegisterForm from "@/components/register-form";

export async function get() {
  return (
    <BaseHtml>
      <NonDashboardLayout>
        <section class="text-center">
          <h1 class="mb-2 text-2xl font-semibold tracking-tight">New here?</h1>
          <p class="text-muted-foreground mb-4 text-sm">
            Register an account and get started.
          </p>
        </section>
        <RegisterForm />
      </NonDashboardLayout>
    </BaseHtml>
  );
}
