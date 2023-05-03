import { Roboto } from "next/font/google";
import { AddItem, CompletedTodos, UncompletedTodos } from "@/components/todo";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  p-4 md:p-10 lg:p-24 ${roboto.className}`}
    >
      <h2
        className="
        font-bold text-2xl md:text-3xl  md:font-extrabold capitalize lg:text-4xl"
      >
        To do List
      </h2>

      {/* TODO */}
      <CompletedTodos />
      <UncompletedTodos />
      <AddItem />
    </main>
  );
}
