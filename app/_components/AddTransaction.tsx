"use client";

import { z } from "zod"

const formSchema = z.object({
    text: z.string().min(2).max(50),
    amount: z.number().min(0.01).max(10000),
})
export default function AddTransaction() {
    const clientAction = async (formData: FormData) => {
        console.log(formData.get('text'), formData.get('amount'));

    }
    return (
        <>
            <h3>Add transaction</h3>
            <form action={clientAction}>

            </form>
        </>
    )
}