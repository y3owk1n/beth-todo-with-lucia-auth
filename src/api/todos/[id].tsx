import ErrorAlert from "@/components/error-alert";
import { deleteTodoById } from "@/db/schema/todo";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";

const paramsSchema = Type.Object({
  id: Type.String(),
});

export const del: RouteHandler<undefined, typeof paramsSchema> = {
  handler: async (context) => {
    await deleteTodoById(context.params.id);
  },
  hooks: {
    params: paramsSchema,
    error: ({ error }) => {
      return <ErrorAlert message={error.message} />;
    },
  },
};
