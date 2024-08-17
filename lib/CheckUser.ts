/** @format */

import { db } from "@/db";
import { User } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function CheckUser() {
  try {
    const user = await currentUser();
    // console.log(user);

    if (!user) {
      return null;
    }

    // Check if user is in db
    const existingUser = await db
      .select()
      .from(User)
      .where(eq(User.clerkId, user.id))
      .limit(1);

    if (existingUser.length > 0) {
      // User already exists in the database
      return existingUser[0];
    } else {
      // User doesn't exist, create a new one
      const newUser = {
        id: user.id,
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        profileImageUrl: user.imageUrl ?? "",
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
      };

      const insertedUser = await db.insert(User).values(newUser).returning();
      return insertedUser[0];
    }
  } catch (error) {
    console.error("Error in CheckUser:", error);
    return null;
  }
}
