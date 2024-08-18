/** @format */

import {
  boolean,
  integer,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `finance_${name}`);

// export const User = pgTable("users", {
//   id: varchar("id", { length: 255 }).primaryKey(),
//   clerkId: text("clerk_id").notNull().unique(),
//   email: text("email").notNull(),
//   profileImageUrl: text("profile_image_url").notNull(),
//   createdAt: timestamp("created_at").notNull().defaultNow(),
//   updatedAt: timestamp("updated_at").notNull().defaultNow(),
//   firstName: varchar("first_name", { length: 100 }).notNull(),
//   lastName: varchar("last_name", { length: 100 }).notNull(),
// });

// export const Transaction = pgTable("transactions", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   userId: varchar("user_id", { length: 255 })
//     .notNull()
//     .references(() => User.id),
//   text: text("text").notNull(),
//   amount: integer("amount").notNull(),
//   createdAt: timestamp("created_at").notNull().defaultNow(),
// });

export const User = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(), // Changed to uuid
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  profileImageUrl: text("profile_image_url").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
});

export const Transaction = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => User.id),
  text: text("text").notNull(),
  amount: integer("amount").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
