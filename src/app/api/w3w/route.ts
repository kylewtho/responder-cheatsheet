import { NextRequest, NextResponse } from 'next/server';

const COORDINATES_PATTERN = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;

export async function GET(request: NextRequest) {
  const coordinates = request.nextUrl.searchParams.get('coordinates');

  if (!coordinates || !COORDINATES_PATTERN.test(coordinates)) {
    return NextResponse.json({ error: 'Invalid or missing coordinates' }, { status: 400 });
  }

  const apiKey = process.env.WHAT3WORDS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'what3words API key not configured' }, { status: 500 });
  }

  const res = await fetch(
    `https://api.what3words.com/v3/convert-to-3wa?coordinates=${encodeURIComponent(coordinates)}&key=${apiKey}`
  );
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
