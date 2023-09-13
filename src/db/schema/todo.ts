import { text, timestamp, boolean, pgTable } from "drizzle-orm/pg-core";
import { db } from "..";
import { eq } from "drizzle-orm";
import { ensureSingleItem } from "../../util/db-helper";
import sanitizeHtml from "sanitize-html";
import { createId } from "@paralleldrive/cuid2";

export const todo = pgTable("todo", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  content: text("content").notNull(),
  completed: boolean("completed").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Todo = typeof todo.$inferSelect;
export type NewTodo = typeof todo.$inferInsert;

export async function getTodos() {
  return await db.select().from(todo);
}

export async function getTodoById(id: Todo["id"]) {
  const data = await db.select().from(todo).where(eq(todo.id, id));
  const singleTodo = ensureSingleItem(data);
  return singleTodo;
}

export async function updateTodoContent(
  id: Todo["id"],
  content: Todo["content"]
) {
  const sanitizedContent = sanitizeHtml(content);
  if (sanitizedContent.length === 0) {
    throw new Error(`Cannot be empty`);
  }

  const currentTodo = await getTodoById(id);
  const updatedData = await db
    .update(todo)
    .set({
      content,
    })
    .where(eq(todo.id, currentTodo.id))
    .returning();

  return ensureSingleItem(updatedData);
}

export async function toggleTodoCompletion(id: Todo["id"]) {
  const currentTodo = await getTodoById(id);
  const updatedData = await db
    .update(todo)
    .set({
      completed: !currentTodo.completed,
    })
    .where(eq(todo.id, currentTodo.id))
    .returning();

  return ensureSingleItem(updatedData);
}

export async function deleteTodoById(id: Todo["id"]) {
  return await db.delete(todo).where(eq(todo.id, id));
}

export async function addTodo(content: Todo["content"]) {
  const sanitizedContent = sanitizeHtml(content);
  if (sanitizedContent.length === 0) {
    throw new Error(`Cannot be empty`);
  }

  const data = await db
    .insert(todo)
    .values({
      content: sanitizedContent,
      completed: false,
    })
    .returning();

  const singleTodo = ensureSingleItem(data);

  return singleTodo;
}
