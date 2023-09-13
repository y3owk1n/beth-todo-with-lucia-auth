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
  "todo-edit-state": Type.String({
    error: "State is required",
  }),
});

function toggleEditState(state: StringifiedBoolean): StringifiedBoolean {
  if (state === "true") return "false";
  return "true";
}

export const post: RouteHandler<typeof bodySchema, typeof paramsSchema> = {
  handler: async (context) => {
    // await Bun.sleep(3000);
    const todoEditState = context.body["todo-edit-state"];

    if (todoEditState === "false") {
      const todo = await getTodoById(context.params.id);
      return (
        <TodoEditable editState={toggleEditState(todoEditState)} {...todo} />
      );
    }

    if (todoEditState === "true") {
      const todo = await updateTodoContent(
        context.params.id,
        context.body["todo-content"]
      );

      return (
        <TodoEditable editState={toggleEditState(todoEditState)} {...todo} />
      );
    }

    context.set.status = 400;
    return <ServerErrorAlert message="Todo state is invalid" />;
  },
  hooks: {
    params: paramsSchema,
    body: bodySchema,
    error: ({ error }) => {
      return <ServerErrorAlert message={error.message} />;
    },
  },
};
