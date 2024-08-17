import { currentUser } from "@clerk/nextjs/server";
import Guest from "./_components/Guests";
import AddTransaction from "./_components/AddTransaction";


export default async function Home() {
  const user = await currentUser()
  if (!user) {
    return <Guest />
  }
  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <AddTransaction />
    </main>
  );
}
