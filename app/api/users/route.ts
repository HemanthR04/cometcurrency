import { NextResponse } from "next/server"

    export function GET(){
        return NextResponse.json({message: "Hello World GET"})
    }


    export function POST(){
        return NextResponse.json({message: "Hello World POST"})
    }