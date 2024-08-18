"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import addTransaction from "../actions/addTransaction"


const formSchema = z.object({
    text: z.string().min(2).max(50),
    amount: z.number().min(0.01).max(10000),
});
export default function AddTransaction() {
    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         text: "",
    //         amount: 0,
    //     },
    // });

    // const onSubmit = async (data: z.infer<typeof formSchema>) => {
    //     const formData = new FormData();
    //     formData.append('text', data.text);
    //     formData.append('amount', data.amount.toString());

    //     try {
    //         const result = await addTransaction(formData);

    //         if (result.error) {
    //             console.error("Error from server:", result.error);
    //             toast.error(result.error);
    //         } else if (result.data) {
    //             toast.success("Transaction added successfully.");
    //             console.log("Transaction data:", result.data);
    //             form.reset(); // Reset the form after successful submission
    //         }
    //     } catch (err) {
    //         console.error("Unexpected error:", err);
    //         toast.error("An unexpected error occurred");
    //     }
    // };
    return (
        <>
            <h3>Add transaction</h3>
            {/* <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Text</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter transaction description" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a brief description of the transaction.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="Enter amount"
                                        {...field}
                                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter the transaction amount.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Add Transaction</Button>
                </form>
            </Form> */}
            <form action={addTransaction}>
                <input type="text" name="text" />
                <input type="number" name="amount" />
                <button type="submit">Add Transaction</button>
            </form>

        </>
    )
}