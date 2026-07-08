import { NextRequest, NextResponse } from "next/server";

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

    // TODO: Integrasikan dengan email service (Nodemailer/Resend/EmailJS)
    // atau simpan ke database (Prisma/Supabase/Firebase)
    // Untuk saat ini, kita log dan kembalikan sukses

    console.log("📬 Konsultasi baru diterima:", JSON.stringify(data, null, 2));

    // Simulasi delay proses
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: `Terima kasih, ${data.nama}! Konsultasi Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1x24 jam melalui ${data.telepon} atau ${data.email}.`,
        data: { id: `FRC-${Date.now()}`, ...data },
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
