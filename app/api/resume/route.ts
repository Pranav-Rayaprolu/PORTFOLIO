import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  try {
    // Path to the resume file in the public directory
    const resumePath = join(process.cwd(), "public", "resume.pdf")

    try {
      const resumeBuffer = readFileSync(resumePath)

      return new NextResponse(resumeBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": 'attachment; filename="Pranav_Rayaprolu_Resume.pdf"',
        },
      })
    } catch (fileError) {
      // If file doesn't exist, return a message
      return NextResponse.json(
        {
          error: "Resume not found",
          message: "Please add your resume.pdf file to the public directory",
        },
        { status: 404 },
      )
    }
  } catch (error) {
    console.error("Resume API error:", error)
    return NextResponse.json({ error: "Failed to fetch resume" }, { status: 500 })
  }
}
