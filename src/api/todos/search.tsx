import ServerErrorAlert from "@/components/server-error-alert";
import TodoList from "@/components/todo-list";
import { searchTodo } from "@/db/schema/todo";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";

const bodySchema = Type.Object({
  search: Type.String({
    error: "Content is required",
  }),
});

export const post: RouteHandler<typeof bodySchema, undefined> = {
  handler: async (context) => {
    try {
      const todos = await searchTodo(context.body.search);

      return <TodoList todos={todos} />;
    } catch (error: any) {
      context.set.status = 400;
      return <ServerErrorAlert message={error.message} />;
    }
  },
  hooks: {
    body: bodySchema,
    error: ({ error }) => {
      return <ServerErrorAlert message={error.message} />;
    },
  },
};
