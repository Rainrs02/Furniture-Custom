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

    let fileUrls: string[] = [];
    const fileUrlsStr = formData.get("fileUrls") as string;
    
    if (fileUrlsStr) {
      try {
        fileUrls = JSON.parse(fileUrlsStr);
      } catch (e) {
        console.error("Gagal parse fileUrls:", e);
      }
    }

    console.log("📬 Konsultasi baru diterima:", JSON.stringify(data, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: `Terima kasih, ${data.nama}! Konsultasi Anda telah kami terima.`,
        data: { id: `FRC-${Date.now()}`, fileUrls, ...data },
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
