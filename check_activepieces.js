const TOKEN = 'rNMu81pb7vgrh0GnoOe7ZUy3ZXaPBbMZugaWTvUC8giZC2LcLFGetWzr36eLvbiD5ganCMAS';
const MCP_URL = 'https://cloud.activepieces.com/api/v1/projects/5LqDwU6x5B6AaVXCfyTfY/mcp-server/http';

async function listTools() {
  const body = {
    jsonrpc: '2.0',
    method: 'tools/list',
    params: {},
    id: 1
  };

  try {
    const res = await fetch(MCP_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`HTTP Error: ${res.status}`);
      console.error(`Response: ${text}`);
      return;
    }

    const data = await res.json();
    console.log('MCP Tools Result:', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error:', err.message);
  }
}

listTools();
