const { google } = require('googleapis');
const fs = require('fs');

const envLocal = fs.readFileSync('.env.local', 'utf8');
envLocal.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    let val = match[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    process.env[match[1]] = val;
  }
});

async function testDrive() {
  try {
    console.log("Folder ID:", process.env.GOOGLE_DRIVE_FOLDER_ID);
    console.log("Client Email:", process.env.GOOGLE_CLIENT_EMAIL);
    console.log("Private Key length:", process.env.GOOGLE_PRIVATE_KEY?.length);
    console.log("Has \\n?", process.env.GOOGLE_PRIVATE_KEY?.includes('\\n'));
    console.log("Has real newline?", process.env.GOOGLE_PRIVATE_KEY?.includes('\n'));
    
    // Attempt parsing as Next.js would
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({ version: "v3", auth });
    
    console.log("Testing connection...");
    const res = await drive.files.list({
      pageSize: 1,
      fields: "files(id, name)",
    });
    console.log("Success! Files found:", res.data.files);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

testDrive();
