const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const students = [
  {
    timestamp: "7/8/2026 12:44:29",
    fullName: "เกศรินทร์ คิดคนึง",
    nickname: "กลอย",
    hint: "นัด8มา10",
    image: "https://drive.google.com/open?id=1FTJt17aKVxuc2m7HrDhmJRPAdtZJQybU"
  },
  {
    timestamp: "7/8/2026 12:45:27",
    fullName: "นายภานุวิชญ์ ชมชูชื่น",
    nickname: "หยก",
    hint: "ฮาลาล",
    image: "https://drive.google.com/open?id=11oUSy7Ts-ZjCoFqwXHl2ycRG7GaMj43a"
  },
  {
    timestamp: "7/8/2026 12:46:08",
    fullName: "วรวิช สังข์ชื่น",
    nickname: "เพชร",
    hint: "หมดไปเยอะ",
    image: "https://drive.google.com/open?id=1cG4pS9gPcsPjgBkAefhyFRql2qG5Ihcb"
  },
  {
    timestamp: "7/8/2026 12:46:38",
    fullName: "วิทวัส สังข์ชื่น",
    nickname: "ฟิล์ม",
    hint: "gel nails ดิวะ",
    image: "https://drive.google.com/open?id=1umQ73c3iITdkDCUMcULBphRZvDYTOr3A"
  },
  {
    timestamp: "7/8/2026 12:47:16",
    fullName: "นางสาวอรพรรณ รสจันทร์",
    nickname: "ผักบุ้ง",
    hint: "ปากบอกไปแต่ใจจะบิด",
    image: "https://drive.google.com/open?id=1YkE4AQhrI_CtGNiR7zsx18lzvMFlQ6VF"
  },
  {
    timestamp: "7/8/2026 12:47:42",
    fullName: "ปวันรัตน์ สังสิงชัย",
    nickname: "จ๊ะจ๋า",
    hint: "ท่องราตรี",
    image: "https://drive.google.com/open?id=15KdGt1tLjMYOQFeFIGHh2tKGCXxU-Nps"
  },
  {
    timestamp: "7/8/2026 12:48:22",
    fullName: "นาย ยอดนคร ขุนอักษร",
    nickname: "บีม",
    hint: "ชื่อเล่น1พยางค์",
    image: "https://drive.google.com/open?id=1SU_aOJhiLv_ymd9o-cST5PW67l3dIosW"
  },
  {
    timestamp: "7/8/2026 12:48:25",
    fullName: "สิรินทิพย์ พูลเพิ่ม",
    nickname: "น้ำ",
    hint: "สี่สี่เอี่ยว",
    image: "https://drive.google.com/open?id=1nk2Xzqr19CWeexylDdKgFNmzFNRs5NeV"
  },
  {
    timestamp: "7/8/2026 12:49:02",
    fullName: "สุภิญญา ชาวแพรกน้อย",
    nickname: "ไข่มุก",
    hint: "มีหน้าม้า",
    image: "https://drive.google.com/open?id=1yk6B6nKJvyzsG9J693_RjN6FE0iiLM1-"
  },
  {
    timestamp: "7/8/2026 12:49:52",
    fullName: "จิรนันท์ สุขเกษม",
    nickname: "แพน",
    hint: "ดอลลี่อายพุ่งๆ",
    image: "https://drive.google.com/open?id=15iQFh_ZaL3iRpYaVvNdfW8c9VNF1-bN6"
  },
  {
    timestamp: "7/8/2026 12:50:18",
    fullName: "กนกวรรณ เบี่ยงสวาท",
    nickname: "มิเชล",
    hint: "ฟันเหล็กเด็กใคร",
    image: "https://drive.google.com/open?id=1ITDR2my-0blkPoWdDc2-F1Nj3IP0VpPC"
  },
  {
    timestamp: "7/8/2026 12:51:17",
    fullName: "ธันยพร สท้านพล",
    nickname: "มีนา",
    hint: "ตับเเข็ง",
    image: "https://drive.google.com/open?id=1t2gsCgC8pMkyguL-IJV393DfEYRDZ5NS"
  },
  {
    timestamp: "7/8/2026 12:51:47",
    fullName: "ศุภกร บูชาสุข",
    nickname: "จ๊าบ",
    hint: "ยิ้มง่ายแต่คุยไม่ค่อยเก่ง",
    image: "https://drive.google.com/open?id=1CU3f-SzYecB-MiQR2OEp1kfOd7NmsR_S"
  },
  {
    timestamp: "7/8/2026 12:52:01",
    fullName: "นายสรกฤช แก้วแสง",
    nickname: "ตาต้า",
    hint: "ปอดโยก",
    image: "https://drive.google.com/open?id=1svdZuuKdqSDRsXGJgkQdXbTY-BSYaZm1"
  },
  {
    timestamp: "7/8/2026 12:52:10",
    fullName: "กนกพร เพียรเรียน",
    nickname: "ใบหม่อน",
    hint: "ก๋วยเตี๋ยวคือของโปรด",
    image: "https://drive.google.com/open?id=1kdczMGHdsY9q_JAt2yZ6U_tfqhtqn49q"
  },
  {
    timestamp: "7/8/2026 12:52:14",
    fullName: "นางสาว ศุภาวรรณ กันยาโม้",
    nickname: "ข้าวเหนียว",
    hint: "สายเสมอ",
    image: "https://drive.google.com/open?id=1yUVu2UJF_EiXHaPr7JHNfxvGWwe_bbmy"
  },
  {
    timestamp: "7/8/2026 12:52:16",
    fullName: "น.ส.วรรณกร ศรีแจ้",
    nickname: "ใบตอง",
    hint: "”ไม่เคยถูกระเบียบ“",
    image: "https://drive.google.com/open?id=1ceWiw3EHRUq1C6CoZNYIhTFjbKBOyUQm"
  },
  {
    timestamp: "7/8/2026 12:52:58",
    fullName: "นางสาวพัชราภรณ์ หลักเมือง",
    nickname: "ข้าวผัด",
    hint: "ตื่นไม่เคยทัน",
    image: "https://drive.google.com/open?id=1cSS5WZj2_waIGd55vYnDWClU6mcBYuiw"
  },
  {
    timestamp: "7/8/2026 12:53:54",
    fullName: "ณฤพล จิตรออน",
    nickname: "เนส",
    hint: "สีชมพู",
    image: "https://drive.google.com/open?id=1-QTLld8Y0nTIbAbbnoVcrc0z_4xegOpJ"
  },
  {
    timestamp: "7/8/2026 12:54:12",
    fullName: "รุ่งรวี ศรีสอาด",
    nickname: "ยา",
    hint: "ง่วงทุกคาบ",
    image: "https://drive.google.com/open?id=1GNAs33vqiLqNSDUWbnx2erhCcQnR8Xz8"
  },
  {
    timestamp: "7/8/2026 12:54:25",
    fullName: "นางสาว ธีมาพร พลอยขาว",
    nickname: "คุ๊กกี้",
    hint: "ลายสักการะ",
    image: "https://drive.google.com/open?id=1z8iirhAnrlKbRA2xLWERBm0AARXlteqm"
  },
  {
    timestamp: "7/8/2026 12:55:26",
    fullName: "ฟาติมะห์ รอดปิ่ม",
    nickname: "ฟาร์",
    hint: "เมะมาแล้วคั้บ",
    image: "https://drive.google.com/open?id=1EO5hKOgdUXHgjtY9B4afqtloZalyabnd"
  },
  {
    timestamp: "7/8/2026 12:56:48",
    fullName: "ชัชชัย อยู่สนาน",
    nickname: "แทน",
    hint: "ง่วงทุกคาบ",
    image: "https://drive.google.com/open?id=1FbKqsDsN071bhlcR4FuvZrUX0oiHUBVe"
  },
  {
    timestamp: "7/8/2026 12:57:32",
    fullName: "นายถิรายุส ศรชัย",
    nickname: "ไทม์",
    hint: "Gel nails ดิวะ",
    image: "https://drive.google.com/open?id=1VrwAoIHtd5xrYgGBd9VuNjruzvOe5K3L"
  },
  {
    timestamp: "7/8/2026 12:58:06",
    fullName: "เมธา มีผลมาก",
    nickname: "มาร์ค",
    hint: "หม่าล่าทั่งเลิฟเวอร์",
    image: "https://drive.google.com/open?id=1QNzPeRyWJcZkfmpWKoqo10vH0mZggECS"
  },
  {
    timestamp: "7/8/2026 12:58:06",
    fullName: "นายภาธรธฤต เปี่ยมพูล",
    nickname: "ฟลุ๊ค ไร่สะท้อน",
    hint: "3287",
    image: "https://drive.google.com/open?id=12_SJW45WPxJ13eU8QRjUttT1PC7dyRcL"
  },
  {
    timestamp: "7/8/2026 12:58:50",
    fullName: "ธาดา ท้าวเม้ย",
    nickname: "เสาร์",
    hint: "ไตกับปอดเกือบได้ถอดพร้อมกัน",
    image: "https://drive.google.com/open?id=1Gi-RRppDJczJSA-Ko70dpBJPpXZOhasb"
  },
  {
    timestamp: "7/8/2026 13:00:00",
    fullName: "วงศกร ลวนางกูร",
    nickname: "มีย",
    hint: "3287",
    image: "https://drive.google.com/open?id=1lUreXTianesrhMTGnL_E52OoEa8krZjO"
  }
];

const server = spawn('node', ['/home/hades/.gemini/config/plugins/google-workspace/workspace-server/dist/index.js', '--use-dot-names']);
let reqId = 1;
const queue = [...students];
const updatedStudents = [];
const outDir = '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/juniors-web/images';

let currentReqBuffer = '';

server.stdout.on('data', data => {
  currentReqBuffer += data.toString();
  
  // Try to parse JSON from buffer lines
  let lines = currentReqBuffer.split('\n');
  currentReqBuffer = lines.pop(); // keep incomplete line
  
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const res = JSON.parse(line);
      if (res.id > 0) {
        // Request finished
        console.log(`Finished ${res.id}`);
        processNext();
      }
    } catch (e) {
      // Not complete JSON yet
      currentReqBuffer = line + '\n' + currentReqBuffer;
    }
  }
});

server.stderr.on('data', data => {
  // console.error('SERVER ERR:', data.toString());
});

const initReq = {
  jsonrpc: '2.0',
  id: 0,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'cli', version: '1.0' }
  }
};
server.stdin.write(JSON.stringify(initReq) + '\n');

function processNext() {
  if (queue.length === 0) {
    // Done, write data.js
    const dataJsPath = '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/juniors-web/data.js';
    fs.writeFileSync(dataJsPath, `const students = ${JSON.stringify(updatedStudents, null, 2)};\n`);
    console.log("ALL DONE!");
    process.exit(0);
  }
  
  const student = queue.shift();
  const idMatch = student.image.match(/id=([a-zA-Z0-9-_]+)/);
  if (idMatch) {
    const fileId = idMatch[1];
    const ext = '.jpg'; // Assume jpg
    const localPath = path.join(outDir, `${reqId}${ext}`);
    
    student.image = `images/${reqId}${ext}`;
    updatedStudents.push(student);
    
    const req = {
      jsonrpc: '2.0',
      id: reqId++,
      method: 'tools/call',
      params: {
        name: 'drive.downloadFile',
        arguments: {
          fileId,
          localPath
        }
      }
    };
    
    server.stdin.write(JSON.stringify(req) + '\n');
  } else {
    updatedStudents.push(student);
    processNext();
  }
}

setTimeout(processNext, 1000); // Start after init
