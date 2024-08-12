import { SignInButton } from "@clerk/nextjs";

export default function Guest() {
    return (
        <div className="text-center py-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Finance Tracker
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Take control of your finances. Sign in to get started.
            </p>
            <SignInButton />
        </div>
    )
}