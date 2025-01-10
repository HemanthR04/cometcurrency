"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {useRouter} from "next/navigation"

export default function OnboardingPage() {
    const router = useRouter();
    const handleOnboardingComplete = () => {
        router.push("/home");
    };
    return (
        <>
        <div className="onboarding w-full px-2 py-4 border-2">
            form
        </div>
        </>
    );
}