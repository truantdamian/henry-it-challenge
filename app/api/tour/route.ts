import { NextResponse } from "next/server";
import { tours } from "../../../mock/tours";

export async function GET() {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  };

  if (process.env.MOCK) {
    return NextResponse.json(tours);
  }

  const url = `${process.env.NEXT_PUBLIC_RAPID_API_URL_BASE}/tours`;
  const options = {
    method: "GET",
    headers,
  };
  const response = await fetch(url, options);
  const { results } = await response.json();
  return NextResponse.json(results);
}
