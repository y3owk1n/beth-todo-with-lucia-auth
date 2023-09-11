CREATE TABLE IF NOT EXISTS "todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
