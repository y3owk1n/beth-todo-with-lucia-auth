import { toggleTodoCompletion } from "../../../db/schema/todo";
import TodoItem from "../../../components/todo-item";
import { RouteHandler } from "../../../util/route-helper";
import { Type } from "@sinclair/typebox";

const paramsSchema = Type.Object({
  id: Type.String(),
});

export const post: RouteHandler<undefined, typeof paramsSchema> = {
  handler: async (context) => {
    const todo = await toggleTodoCompletion(context.params.id);

    return <TodoItem {...todo} />;
  },
  hooks: {
    params: paramsSchema,
  },
};
