import { currentUser } from "@clerk/nextjs/server";
import Guest from "./_components/Guests";


export default async function Home() {
  const user = await currentUser()
  if (!user) {
    return <Guest />
  }
  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
    </main>
  );
}
