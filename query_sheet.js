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
      if (res.id === 1) {
        fs.writeFileSync('/mnt/hades/HadesData/My Work/ปี 3/จับรหัส 69/sheet_data.json', JSON.stringify(res, null, 2));
        console.log('SUCCESS');
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
      name: 'sheets.getText',
      arguments: {
        spreadsheetId: '1Be2nH0IbxrKmxFmhcmFM1LT6PsheckwTNAflExyafrU',
        format: 'json'
      }
    }
  };
  server.stdin.write(JSON.stringify(req) + '\n');
}, 1000);
