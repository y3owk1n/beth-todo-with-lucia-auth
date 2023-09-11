import { t } from "elysia";
import * as elements from "typed-html";
import { toggleTodoCompletion } from "../../../db/schema/todo";
import TodoItem from "../../../components/todo-item";
import { AppContext } from "../../../util/route-helper";

export const post = {
  handler: async (context: AppContext) => {
    const todo = await toggleTodoCompletion(context.params.id);

    return <TodoItem {...todo} />;
  },
  hooks: {
    params: t.Object({
      id: t.Numeric(),
    }),
  },
};
