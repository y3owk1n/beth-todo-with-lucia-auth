import BaseHtml from "@/components/base-html";
import { NonDashboardLayout } from "@/components/layout/non-dashboard";

export async function get() {
  return (
    <BaseHtml>
      <NonDashboardLayout>
        <div
          hx-get="/api/auth/session"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></div>
        <div hx-get="/api/todos" hx-trigger="load" hx-swap="innerHTML"></div>
      </NonDashboardLayout>
    </BaseHtml>
  );
}
