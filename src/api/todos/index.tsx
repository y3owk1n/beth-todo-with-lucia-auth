import ServerErrorAlert from "@/components/server-error-alert";
import TodoItem from "@/components/todo-item";
import TodoList from "@/components/todo-list";
import { addTodo, getTodos } from "@/db/schema/todo";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";

const bodySchema = Type.Object({
  content: Type.String({
    error: "Content is required",
  }),
});

export async function get() {
  // await Bun.sleep(3000);
  const todos = await getTodos();

  return <TodoList todos={todos} />;
}

export const post: RouteHandler<typeof bodySchema, undefined> = {
  handler: async (context) => {
    await Bun.sleep(3000);
    const newTodo = await addTodo(context.body.content);

    return <TodoItem {...newTodo} />;
  },
  hooks: {
    body: bodySchema,
    error: ({ error }) => {
      return <ServerErrorAlert message={error.message} />;
    },
  },
};
