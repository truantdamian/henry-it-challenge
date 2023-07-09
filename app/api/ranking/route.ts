import { NextRequest, NextResponse } from "next/server";
import { rankings } from "../../../mock/rankings";

export async function GET(request: NextRequest, response: NextResponse) {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  };

  const urlQuery = new URL(request.url);
  const searchParams = new URLSearchParams(urlQuery.search);
  const tourId = searchParams.get("tour-id");
  const seassonId = searchParams.get("seasson-id");

  if (!seassonId || !tourId) {
    return NextResponse.json(
      { message: "you must set tour-id and seasson-id" },
      { status: 404 }
    );
  }

  //   if (process.env.MOCK) {
  //     return NextResponse.json(rankings);
  //   }

  const url = `${process.env.NEXT_PUBLIC_RAPID_API_URL_BASE}/tour-rankings/${tourId}/${seassonId}`;
  const options = {
    method: "GET",
    headers,
  };
  const result = await fetch(url, options);
  const { results } = await result.json();

  const { rankings } = results;

  return NextResponse.json(rankings);
}
