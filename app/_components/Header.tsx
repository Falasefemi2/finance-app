import { CheckUser } from '@/lib/CheckUser'
import { SignInButton, SignIn, SignedOut, UserButton, SignedIn } from '@clerk/nextjs'

export default async function Header() {
    const user = await CheckUser()


    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h2 className="text-2xl font-bold tracking-tight">Finance Tracker</h2>
                    <div className="flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}