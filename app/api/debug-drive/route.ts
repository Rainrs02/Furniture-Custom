import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  const report: Record<string, string> = {};

  const rawKey = process.env.GOOGLE_PRIVATE_KEY || "";
  const email = process.env.GOOGLE_CLIENT_EMAIL || "";
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || "";

  report["folder_id_set"] = folderId ? `YES (${folderId.slice(0, 10)}...)` : "NO ❌";
  report["email_set"] = email ? `YES (${email})` : "NO ❌";
  report["private_key_set"] = rawKey ? `YES (length: ${rawKey.length})` : "NO ❌";
  report["key_starts_with_begin"] = rawKey.includes("BEGIN PRIVATE KEY") ? "YES ✅" : "NO ❌";
  report["key_has_literal_backslash_n"] = rawKey.includes("\\n") ? "YES (literal \\n)" : "NO";
  report["key_has_real_newline"] = rawKey.includes("\n") ? "YES (real newline)" : "NO";

  // Coba koneksi
  try {
    let privateKey = rawKey;
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: email, private_key: privateKey },
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({ version: "v3", auth });
    const res = await drive.files.list({ pageSize: 1, fields: "files(id, name)" });
    report["drive_connection"] = "SUCCESS ✅";
    report["sample_file"] = JSON.stringify(res.data.files?.[0] || "no files");
  } catch (err: unknown) {
    report["drive_connection"] = "FAILED ❌";
    report["error"] = err instanceof Error ? err.message : String(err);
  }

  return NextResponse.json(report, { status: 200 });
}
