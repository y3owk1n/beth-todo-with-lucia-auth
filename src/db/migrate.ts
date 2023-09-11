import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connectionString } from ".";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

try {
  const migrationClient = postgres(connectionString, { max: 1 });
  await migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" });
  console.log(`Migration completed`);
  process.exit(0);
} catch (error) {
  console.log(`Migration failed!`, error);
  process.exit(1);
}
