import { timestamp, pgTable, text, bigint } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const authUser = pgTable("auth_user", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type AuthUser = typeof authUser.$inferSelect;
export type NewAuthUser = typeof authUser.$inferInsert;

export const userKey = pgTable("user_key", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => authUser.id),
  hashedPassword: text("hashed_password"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UserKey = typeof userKey.$inferSelect;
export type NewUserKey = typeof userKey.$inferInsert;

export const userSession = pgTable("user_session", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => authUser.id),
  activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
  idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UserSession = typeof userSession.$inferSelect;
export type NewUserSession = typeof userSession.$inferInsert;
