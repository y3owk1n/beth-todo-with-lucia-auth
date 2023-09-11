import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const connectionString = process.env.DATABASE_URL as string;
export const queryClient = postgres(connectionString);
export const db = drizzle(queryClient);
