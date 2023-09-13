import ServerErrorAlert from "@/components/server-error-alert";
import TodoEditable from "@/components/todo-editable";
import { updateTodoContent } from "@/db/schema/todo";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";

const paramsSchema = Type.Object({
  id: Type.String(),
});

const bodySchema = Type.Object({
  "todo-content": Type.String({
    error: "Content is required",
  }),
});

export const post: RouteHandler<typeof bodySchema, typeof paramsSchema> = {
  handler: async (context) => {
    // await Bun.sleep(3000);

    try {
      const todo = await updateTodoContent(
        context.params.id,
        context.body["todo-content"]
      );
      return <TodoEditable {...todo} />;
    } catch (error: any) {
      return <ServerErrorAlert message={error.message} />;
    }
  },
  hooks: {
    params: paramsSchema,
    body: bodySchema,
    error: ({ error }) => {
      return <ServerErrorAlert message={error.message} />;
    },
  },
};
