const { spawn } = require('child_process');

const TOKEN = 'rNMu81pb7vgrh0GnoOe7ZUy3ZXaPBbMZugaWTvUC8giZC2LcLFGetWzr36eLvbiD5ganCMAS';
const URL = 'https://cloud.activepieces.com/api/v1/projects/5LqDwU6x5B6AaVXCfyTfY/mcp-server/http';

const child = spawn('npx', [
  '-y', 'mcp-remote', URL, 
  '--header', `Authorization: Bearer ${TOKEN}`
], { shell: true });

let output = '';
child.stdout.on('data', (data) => {
  output += data.toString();
  try {
    const json = JSON.parse(output.split('\n')[0]);
    console.log('Got response:', JSON.stringify(json, null, 2));
    process.exit(0);
  } catch (e) {
    // Wait for more data
  }
});

child.stderr.on('data', (data) => {
  console.error('Stderr:', data.toString());
});

// Send listTools after a short delay
setTimeout(() => {
  const request = JSON.stringify({
    jsonrpc: '2.0',
    method: 'tools/list',
    params: {},
    id: 1
  }) + '\n';
  child.stdin.write(request);
}, 2000);

setTimeout(() => {
    console.log('Timeout reached. Output so far:', output);
    process.exit(0);
}, 10000);
