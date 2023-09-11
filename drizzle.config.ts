import type { Config } from "drizzle-kit";
import { connectionString } from "./src/db";

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString,
  },
} satisfies Config;
