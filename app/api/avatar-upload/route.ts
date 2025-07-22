import { type NextRequest, NextResponse } from "next/server"
import { writeFileSync } from "fs"
import { join } from "path"

// This is a simple implementation - in production, you'd want proper authentication
export async function POST(request: NextRequest) {
  try {
    // Check for admin authentication (simplified)
    const authHeader = request.headers.get("authorization")
    if (!authHeader || authHeader !== "Bearer admin-secret-key") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("avatar") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 })
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save to public/images directory
    const filename = `avatar-${Date.now()}.${file.name.split(".").pop()}`
    const filepath = join(process.cwd(), "public", "images", filename)

    writeFileSync(filepath, buffer)

    return NextResponse.json(
      {
        message: "Avatar uploaded successfully",
        filename,
        url: `/images/${filename}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Avatar upload error:", error)
    return NextResponse.json({ error: "Failed to upload avatar" }, { status: 500 })
  }
}
