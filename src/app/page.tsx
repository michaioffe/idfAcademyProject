import { serverClient } from "./_trpc/serverClient";

import TodoList from "./_components/TodoList";
import { Metadata } from "next";
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Home() {
  
  // const todos = await serverClient.getTodos();
      return (
    <main className="max-w-3xl mx-auto mt-5">
      <TodoList />
    </main>
  );
}
