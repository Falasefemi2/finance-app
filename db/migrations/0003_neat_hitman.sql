ALTER TABLE "finance_transactions" ALTER COLUMN "user_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "finance_users" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "finance_users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();