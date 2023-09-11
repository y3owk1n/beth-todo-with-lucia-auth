import { t } from "elysia";
import { deleteTodoById } from "../../db/schema/todo";
import { AppContext } from "../../util/route-helper";

export const del = {
  handler: async (context: AppContext) => {
    await deleteTodoById(context.params.id);
  },
  hooks: {
    params: t.Object({
      id: t.Numeric(),
    }),
  },
};
