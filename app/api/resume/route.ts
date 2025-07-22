import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  return NextResponse.redirect(
    "https://drive.google.com/file/d/1MmH0L-1LXsWTM5WAQQACs5cQkqIEt7LH/view?usp=sharing",
    302
  )
}