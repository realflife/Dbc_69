const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const server = spawn('node', ['/home/hades/.gemini/config/plugins/google-workspace/workspace-server/dist/index.js', '--use-dot-names']);

let currentReqBuffer = '';
server.stdout.on('data', data => {
  currentReqBuffer += data.toString();
  let lines = currentReqBuffer.split('\n');
  currentReqBuffer = lines.pop(); 
  
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const res = JSON.parse(line);
      if (res.id === 1) {
        console.log(`Finished download:`, JSON.stringify(res));
        process.exit(0);
      }
    } catch (e) {
      currentReqBuffer = line + '\n' + currentReqBuffer;
    }
  }
});

const initReq = {
  jsonrpc: '2.0',
  id: 0,
  method: 'initialize',
  params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'cli', version: '1.0' } }
};
server.stdin.write(JSON.stringify(initReq) + '\n');

setTimeout(() => {
  const req = {
    jsonrpc: '2.0',
    id: 1,
    method: 'tools/call',
    params: {
      name: 'drive.downloadFile',
      arguments: {
        fileId: '1ApRl_bjGL7GpwyJp8F2RIEgYrjydaGY8',
        localPath: '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/juniors-web/images/29.jpg'
      }
    }
  };
  server.stdin.write(JSON.stringify(req) + '\n');
}, 1000);
