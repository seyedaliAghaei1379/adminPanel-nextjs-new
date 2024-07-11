import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-300 flex justify-center items-center">
      <Link href={"/panel"} className="text-white bg-slate-600 p-4 rounded-xl ">go to panel</Link>
    </div>
  );
}
