/** @format */

"use server";

interface TransactionData {
  text: string;
  amount: number;
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
  const amount: number = parseFloat(amountValue.toString());

  const transactionData: TransactionData = {
    text,
    amount,
  };

  return { data: transactionData };
}

export default addTransaction;
