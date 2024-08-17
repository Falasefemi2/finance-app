ALTER TABLE "finance_transactions" DROP CONSTRAINT "finance_transactions_user_id_finance_users_clerk_id_fk";
--> statement-breakpoint
ALTER TABLE "finance_transactions" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "finance_users" ALTER COLUMN "id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "finance_users" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "finance_transactions" ADD CONSTRAINT "finance_transactions_user_id_finance_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."finance_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
