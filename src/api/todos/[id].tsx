import { deleteTodoById } from "../../db/schema/todo";
import { AppContext, RouteHandler } from "../../util/route-helper";
import { Type } from "@sinclair/typebox";

const paramsSchema = Type.Object({
  id: Type.String(),
});

export const del: RouteHandler<undefined, typeof paramsSchema> = {
  handler: async (context: AppContext) => {
    await deleteTodoById(context.params.id);
  },
  hooks: {
    params: paramsSchema,
  },
};
