const { spawn } = require('child_process');
const fs = require('fs');

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
      if (res.id > 0) {
        console.log(`Finished download:`, JSON.stringify(res));
        if (res.id === 3) process.exit(0);
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
  const reqs = [
    { id: 1, fileId: '1oGMszk8Tcax90aIqZe79cbIfCVhH4zwH', localPath: '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/images/30.jpg' },
    { id: 2, fileId: '1ecw2LTq6UW4uXdArpyFw7Fjln68WRRr_', localPath: '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/images/31.jpg' },
    { id: 3, fileId: '1P_DcsMzyhtIyFXAHBQLWa_zYICdxtLc_', localPath: '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/images/32.jpg' }
  ];
  
  reqs.forEach((r, idx) => {
    setTimeout(() => {
      server.stdin.write(JSON.stringify({
        jsonrpc: '2.0',
        id: r.id,
        method: 'tools/call',
        params: {
          name: 'drive.downloadFile',
          arguments: { fileId: r.fileId, localPath: r.localPath }
        }
      }) + '\n');
    }, 1000 + (idx * 500));
  });
}, 1000);
