import ServerErrorAlert from "@/components/server-error-alert";
import TodoEditable from "@/components/todo-editable";
import { getTodoById, updateTodoContent } from "@/db/schema/todo";
import { StringifiedBoolean } from "@/types/util";
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

function toggleEditState(state: StringifiedBoolean): StringifiedBoolean {
  if (state === "true") return "false";
  return "true";
}

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
