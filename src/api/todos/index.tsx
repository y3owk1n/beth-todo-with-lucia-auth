import { addTodo, getTodos } from "../../db/schema/todo";

import TodoList from "../../components/todo-list";
import { t } from "elysia";
import TodoItem from "../../components/todo-item";
import { AppContext } from "../../util/route-helper";

export async function get() {
  const todos = await getTodos();

  return <TodoList todos={todos} />;
}

export const post = {
  handler: async (context: AppContext) => {
    const newTodo = await addTodo(context.body.content);

    return <TodoItem {...newTodo} />;
  },
  hooks: {
    body: t.Object({
      content: t.String(),
    }),
  },
};
