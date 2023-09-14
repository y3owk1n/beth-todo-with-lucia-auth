import BaseHtml from "@/components/base-html";
import { NonDashboardLayout } from "@/components/layout/non-dashboard";
import TodoList from "@/components/todo-list";
import { getTodos } from "@/db/schema/todo";

export async function get() {
  const todos = await getTodos();

  return (
    <BaseHtml>
      <NonDashboardLayout>
        <div
          hx-get="/api/auth/session"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></div>
        <TodoList todos={todos} />
      </NonDashboardLayout>
    </BaseHtml>
  );
}
