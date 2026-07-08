const { spawn } = require('child_process');

const server = spawn('node', ['/home/hades/.gemini/config/plugins/google-workspace/workspace-server/dist/index.js', '--use-dot-names']);

let buffer = '';

server.stdout.on('data', data => {
  buffer += data.toString();
  if (buffer.includes('"id":1')) {
    console.log(buffer);
    process.exit(0);
  }
});

server.stderr.on('data', data => {
  // console.error('SERVER ERR:', data.toString());
});

const req = {
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/call',
  params: {
    name: 'drive.downloadFile',
    arguments: {
      fileId: '1FTJt17aKVxuc2m7HrDhmJRPAdtZJQybU',
      localPath: '/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/juniors-web/images/1.jpg'
    }
  }
};

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

setTimeout(() => {
  server.stdin.write(JSON.stringify(req) + '\n');
}, 1000);

setTimeout(() => {
  console.log("TIMEOUT");
  process.exit(1);
}, 15000);
