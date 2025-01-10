import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/ui/sign-in";
import { Drawer } from 'vaul';
import VaulDrawer from "@/components/ui/drawer";

export default function Home() {
  return (
    <>
   <div className="w-full h-[90vh] flex flex-col items-center justify-start mt-32 gap-4">
        <h1 className="text-2xl font-semibold text-center">Welcome to Comet Currency!
        </h1>
        <p className="text-sm text-center max-w-[82%]">Comet Currency combines a powerful app that transforms shopping.<br></br> 
        </p>
        <p className="text-sm text-center max-w-[82%]">Pay at partnered brands, share your purchases, and earn 30-100% cashback—personalized to your social influence.</p>
       <div className="flex flex-col gap-2 mt-36">
      <VaulDrawer />
       </div>
      </div>
    </>
  );
}
