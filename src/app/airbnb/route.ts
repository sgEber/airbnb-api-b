import { NextResponse, NextRequest } from "next/server";
import { places } from "@/mock/place";

export function GET(req: NextRequest){
    return NextResponse.json(places);
}