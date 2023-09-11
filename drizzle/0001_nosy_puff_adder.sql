CREATE TABLE IF NOT EXISTS "auth_user" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_key" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"hashed_password" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_session" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"active_expires" bigint NOT NULL,
	"idle_expires" bigint NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_key" ADD CONSTRAINT "user_key_user_id_auth_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_session" ADD CONSTRAINT "user_session_user_id_auth_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
