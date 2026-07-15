import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    if (referensiFoto && referensiFoto.size > 0) {
      try {
        const buffer = Buffer.from(await referensiFoto.arrayBuffer());

        // Upload ke Cloudinary
        fileUrl = await new Promise<string>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: "wasilah-furniture",
              resource_type: "auto", // Penting untuk support gambar dan PDF
            },
            (error, result) => {
              if (error || !result) return reject(error);
              resolve(result.secure_url);
            }
          );
          uploadStream.end(buffer);
        });

        console.log("✅ File berhasil diunggah ke Cloudinary:", fileUrl);

        // Coba perpendek URL menggunakan TinyURL API (Gratis & tanpa API key)
        try {
          const tinyUrlRes = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(fileUrl)}`);
          if (tinyUrlRes.ok) {
            const shortUrl = await tinyUrlRes.text();
            if (shortUrl && shortUrl.startsWith("http")) {
              fileUrl = shortUrl;
              console.log("✅ URL berhasil diperpendek:", fileUrl);
            }
          }
        } catch (shortenError) {
          console.error("⚠️ Gagal memperpendek URL (tetap menggunakan URL asli):", shortenError);
        }
      } catch (uploadError) {
        console.error("❌ Gagal mengunggah file ke Cloudinary:", uploadError);
      }
    }

    console.log("📬 Konsultasi baru diterima:", JSON.stringify(data, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: `Terima kasih, ${data.nama}! Konsultasi Anda telah kami terima.`,
        data: { id: `FRC-${Date.now()}`, fileUrl, ...data },
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
