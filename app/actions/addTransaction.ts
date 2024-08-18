/** @format */

"use server";

import { db } from "@/db";
import { Transaction } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface TransactionData {
  id: string;
  text: string;
  amount: number;
  userId: string;
  createdAt: Date;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  // Check for input values
  if (
    !textValue ||
    typeof textValue !== "string" ||
    textValue.trim() === "" ||
    !amountValue ||
    isNaN(Number(amountValue))
  ) {
    return { error: "Please enter both valid text and amount." };
  }

  const text: string = textValue.toString();
  const amount: number = Math.round(parseFloat(amountValue.toString()) * 100); // Store as cents

  // get logged user
  const { userId } = auth();
  console.log(userId);

  // check for user
  if (!userId) {
    return { error: "User not logged in." };
  }

  try {
    const [transactionData] = await db
      .insert(Transaction)
      .values({
        text,
        amount,
        userId,
      })
      .returning();

    revalidatePath("/");
    return { data: transactionData as TransactionData };
  } catch (error) {
    console.error("Error adding transaction:", error);
    // Log the full error object
    console.log(JSON.stringify(error, null, 2));
    return { error: "Failed to add transaction. Please try again." };
  }
}

export default addTransaction;
