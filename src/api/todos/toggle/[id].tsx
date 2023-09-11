import ErrorAlert from "@/components/error-alert";
import TodoItem from "@/components/todo-item";
import { toggleTodoCompletion } from "@/db/schema/todo";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";

const paramsSchema = Type.Object({
  id: Type.String(),
  content: Type.String({
    error: "Content is required",
  }),
});

export const post: RouteHandler<undefined, typeof paramsSchema> = {
  handler: async (context) => {
    const todo = await toggleTodoCompletion(context.params.id);

    return <TodoItem {...todo} />;
  },
  hooks: {
    params: paramsSchema,
    error: ({ error }) => {
      return <ErrorAlert message={error.message} />;
    },
  },
};
