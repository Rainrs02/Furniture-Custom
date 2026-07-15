import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const data = {
      nama: formData.get("nama") as string,
      alamat: formData.get("alamat") as string,
      email: formData.get("email") as string,
      telepon: formData.get("telepon") as string,
      ruangan: formData.get("ruangan") as string,
      deskripsi: formData.get("deskripsi") as string,
      material: formData.get("material") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      timestamp: new Date().toISOString(),
    };

    // Validasi field wajib
    if (!data.nama || !data.email || !data.telepon) {
      return NextResponse.json(
        { error: "Data tidak lengkap. Nama, email, dan telepon wajib diisi." },
        { status: 400 }
      );
    }

    let fileUrl = "";
    const referensiFoto = formData.get("referensiFoto") as File | null;

    // Log status file yang diterima
    console.log("📁 File diterima:", {
      ada: !!referensiFoto,
      nama: referensiFoto?.name,
      ukuran: referensiFoto?.size,
      tipe: referensiFoto?.type,
    });

    if (referensiFoto && referensiFoto.size > 0) {
      try {
        let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";
        // Jika tidak sengaja terbungkus tanda kutip dari Vercel
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
          privateKey = privateKey.slice(1, -1);
        }
        privateKey = privateKey.replace(/\\n/g, "\n");

        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: privateKey,
          },
          scopes: ["https://www.googleapis.com/auth/drive"],
        });

        const drive = google.drive({ version: "v3", auth });
        
        const buffer = Buffer.from(await referensiFoto.arrayBuffer());
        const stream = Readable.from(buffer);

        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

        const driveRes = await drive.files.create({
          requestBody: {
            name: referensiFoto.name,
            mimeType: referensiFoto.type,
            parents: folderId ? [folderId] : undefined,
          },
          media: {
            mimeType: referensiFoto.type,
            body: stream,
          },
          fields: "id, webViewLink",
        });

        const fileId = driveRes.data.id;
        
        if (fileId) {
          // Jadikan file publik (Anyone with link can view)
          await drive.permissions.create({
            fileId,
            requestBody: {
              role: "reader",
              type: "anyone",
            },
          });
          
          fileUrl = driveRes.data.webViewLink || "";
          console.log("✅ File berhasil diunggah ke Google Drive:", fileUrl);
        }
      } catch (uploadError: unknown) {
        const errMsg = uploadError instanceof Error ? uploadError.message : String(uploadError);
        const errStack = uploadError instanceof Error ? uploadError.stack : "";
        console.error("❌ Gagal mengunggah file ke Google Drive:");
        console.error("Message:", errMsg);
        console.error("Stack:", errStack);
        // Kita tidak akan throw error, tapi fileUrl dibiarkan kosong agar data form tetap terkirim
      }
    }

    console.log("📬 Konsultasi baru diterima:", JSON.stringify(data, null, 2));

    console.log("📤 Response fileUrl:", fileUrl || "(kosong - tidak ada file atau upload gagal)");

    return NextResponse.json(
      {
        success: true,
        message: `Terima kasih, ${data.nama}! Konsultasi Anda telah kami terima.`,
        data: { id: `FRC-${Date.now()}`, fileUrl, ...data },
        debug_file_received: !!referensiFoto && referensiFoto.size > 0,
        debug_file_name: referensiFoto?.name || null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error processing consultation:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "API Konsultasi Wasilah Furniture aktif." },
    { status: 200 }
  );
}
