import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalImagePath = path.join(__dirname, '../public/images/hero-bg.webp');
const compressedImagePath = path.join(__dirname, '../public/images/hero-bg-compressed.webp');

async function compressImage() {
  console.log(`⏳ Processing image from: ${originalImagePath}`);
  try {
    const info = await sharp(originalImagePath)
      .resize(2560, null, { withoutEnlargement: true }) // Limit max width for ultra-hd screens
      .webp({ quality: 85, effort: 6 }) // 85 is usually indistinguishable from 100 but much smaller
      .toFile(compressedImagePath);
    
    console.log(`✅ Success! Compressed image saved to: ${compressedImagePath}`);
    console.log(`📏 New size: ${(info.size / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error('❌ Error during compression:', err);
  }
}

compressImage();
