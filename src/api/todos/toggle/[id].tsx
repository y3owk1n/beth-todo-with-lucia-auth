import ServerErrorAlert from "@/components/server-error-alert";
import TodoCheckbox from "@/components/todo-checkbox";
import { toggleTodoCompletion } from "@/db/schema/todo";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";

const paramsSchema = Type.Object({
  id: Type.String(),
});

export const post: RouteHandler<undefined, typeof paramsSchema> = {
  handler: async (context) => {
    const todo = await toggleTodoCompletion(context.params.id);

    return <TodoCheckbox {...todo} />;

    // return <TodoItem {...todo} />;
  },
  hooks: {
    params: paramsSchema,
    error: ({ error }) => {
      return <ServerErrorAlert message={error.message} />;
    },
  },
};
