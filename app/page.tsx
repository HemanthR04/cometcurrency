import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/ui/sign-in";
export default function Home() {
  return (
    <>
   <div className="w-full h-[90vh] flex flex-col items-center justify-around">
       <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">COMET CURRENCY</h1>
        <p className="text-sm text-gray-500">Shop,Share,Earn</p>
       </div>
       <div className="flex flex-col gap-2">
        <SignIn />
       </div>
      </div>
    </>
  );
}
