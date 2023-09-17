import BaseHtml from "@/components/base-html";
import { NonDashboardLayout } from "@/components/layout/non-dashboard";
import TodoList from "@/components/todo-list";
import TodoListContainer from "@/components/todo-list-container";
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
        <TodoListContainer>
          <TodoList todos={todos} />
        </TodoListContainer>
      </NonDashboardLayout>
    </BaseHtml>
  );
}
