import { put } from '@vercel/blob';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { homedir } from 'os';

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

const BASE = join(homedir(), 'Desktop', 'Jesus Carveros');

const IMAGE_FOLDERS = [
  { folder: join(BASE, 'Work', 'ADHD'), prefix: 'adhd' },
  { folder: join(BASE, 'Work', 'PUNK PLATES'), prefix: 'punk-plates' },
  { folder: join(BASE, 'Work', 'BUT I LOVE YOU'), prefix: 'but-i-love-you' },
  { folder: join(BASE, 'Exhibitions', 'COMMON GROUND'), prefix: 'exhibitions' },
  { folder: join(BASE, 'Exhibitions', 'ORDERED CHAOS'), prefix: 'ordered-chaos' },
  { folder: join(BASE, 'Exhibitions', 'TRANSFORMATION'), prefix: 'transformation' },
  { folder: join(BASE, 'Portraits', 'MEXICAN WRESTLER ONE'), prefix: 'mexican-wrestler-one' },
  { folder: join(BASE, 'Portraits', 'MEXICAN WRESTLER TWO'), prefix: 'mexican-wrestler-two' },
  { folder: join(BASE, 'Portraits', 'MEXICAN WRESTLER THREE'), prefix: 'mexican-wrestler-three' },
  { folder: join(BASE, 'Architecture', 'CHANDLERS REACH'), prefix: 'architecture-chandlers-reach' },
  { folder: join(BASE, 'Architecture', 'DUNELAND'), prefix: 'architecture-duneland' },
  { folder: join(BASE, 'Architecture', 'LARKRISE'), prefix: 'architecture-larkrise' },
  { folder: join(BASE, 'Architecture', 'STARVECROW'), prefix: 'architecture-starvecrow' },
  { folder: join(BASE, 'Architecture', 'TIDE VIEW'), prefix: 'architecture-tide-view' },
  { folder: join(BASE, 'Personal Collections'), prefix: 'personal-collections' },
];

const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function uploadFolder({ folder, prefix }) {
  console.log(`\nUploading: ${folder}`);
  let files;
  try {
    files = readdirSync(folder).filter(f => {
      const fullPath = join(folder, f);
      const isFile = statSync(fullPath).isFile();
      const validExt = VALID_EXTENSIONS.includes(extname(f).toLowerCase());
      return isFile && validExt;
    });
  } catch {
    console.log(`  ⚠️  Folder not found, skipping: ${folder}`);
    return [];
  }

  const urls = [];
  for (const file of files) {
    const filePath = join(folder, file);
    const fileData = readFileSync(filePath);
    const blobName = `${prefix}/${file}`;
    
    try {
      const { url } = await put(blobName, fileData, { 
        access: 'public', 
        token: BLOB_READ_WRITE_TOKEN,
        addRandomSuffix: false
      });
      console.log(`  ✅ ${file} → ${url}`);
      urls.push({ file, url });
    } catch (error) {
      console.log(`  ❌ ${file} → Failed: ${error.message}`);
    }
  }
  return urls;
}

async function main() {
  const results = {};
  for (const folder of IMAGE_FOLDERS) {
    results[folder.prefix] = await uploadFolder(folder);
  }
  console.log('\n\n=== ALL URLS ===\n');
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);