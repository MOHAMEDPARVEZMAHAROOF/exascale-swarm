const { spawn } = require('child_process');
const fs = require('fs');

const TOKEN = 'rNMu81pb7vgrh0GnoOe7ZUy3ZXaPBbMZugaWTvUC8giZC2LcLFGetWzr36eLvbiD5ganCMAS';
const URL = 'https://cloud.activepieces.com/api/v1/projects/5LqDwU6x5B6AaVXCfyTfY/mcp-server/http';

async function listTools() {
    return new Promise((resolve) => {
        const child = spawn('npx', [
            '-y', 'mcp-remote', URL, 
            '--header', `Authorization: Bearer ${TOKEN}`
        ], { shell: true });

        let output = '';
        let error = '';

        child.stdout.on('data', (data) => {
            output += data.toString();
            console.log('STDOUT:', data.toString());
        });

        child.stderr.on('data', (data) => {
            error += data.toString();
            console.log('STDERR:', data.toString());
        });

        setTimeout(() => {
            const request = JSON.stringify({
                jsonrpc: '2.0',
                method: 'tools/list',
                params: {},
                id: 1
            }) + '\n';
            child.stdin.write(request);
        }, 3000);

        setTimeout(() => {
            child.kill();
            fs.writeFileSync('mcp_tools_output.json', output);
            resolve(output);
        }, 12000);
    });
}

listTools();
