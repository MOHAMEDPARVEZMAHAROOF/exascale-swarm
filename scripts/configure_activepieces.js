const TOKEN = 'rNMu81pb7vgrh0GnoOe7ZUy3ZXaPBbMZugaWTvUC8giZC2LcLFGetWzr36eLvbiD5ganCMAS';
const PROJECT_ID = '5LqDwU6x5B6AaVXCfyTfY';

/**
 * Premium Glassmorphism Email Template (White)
 * Aesthetic: Frozen Light × Crystalline Precision
 */
const EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F0EEF5; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="padding: 60px 20px; text-align: center;">
    <div style="max-width: 600px; margin: 0 auto; background: rgba(255, 255, 255, 0.85); border: 1px solid rgba(255, 255, 255, 1); border-radius: 32px; padding: 48px; box-shadow: 0 12px 48px rgba(100, 90, 140, 0.12);">
      
      <!-- Logo/Brand -->
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 4px; color: #0F0D1A; margin-bottom: 40px; text-transform: uppercase; font-weight: 700;">
        EXASCALE MOE SWARM
      </div>

      <!-- Heading -->
      <h1 style="font-size: 32px; font-weight: 700; color: #0F0D1A; margin: 0 0 24px 0; letter-spacing: -1.5px; line-height: 1.2;">
        Your intelligence request is in orbit.
      </h1>

      <!-- Quote Box -->
      <div style="background: rgba(43, 92, 230, 0.05); border-left: 4px solid #2B5CE6; padding: 24px; border-radius: 0 16px 16px 0; margin-bottom: 32px; text-align: left;">
        <p style="font-size: 18px; font-style: italic; color: #2D2840; margin: 0; line-height: 1.6;">
          "{{quote}}"
        </p>
      </div>

      <!-- Action Button -->
      <a href="https://maharoof.github.io/exascale-swarm/" style="display: inline-block; background: #2B5CE6; color: #FFFFFF; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-size: 15px; font-weight: 600; box-shadow: 0 8px 16px rgba(43, 92, 230, 0.25);">
        Return to Swarm Dashboard
      </a>

      <!-- Footer -->
      <p style="font-size: 13px; color: #8B85A0; margin-top: 40px; margin-bottom: 0;">
        Autonomous Intelligence Nodes · No Latency · No Limits.
      </p>
    </div>
  </div>
</body>
</html>
`;

const QUOTES = [
  "Intelligence is not just what you know, but how fast you can adapt.",
  "The future belongs to the swarms that scale without queueing.",
  "Exascale isn't a destination; it's the new baseline.",
  "Distributed minds, unified results.",
  "In the MoE era, every expert has its moment of brilliance."
];

async function setupFlow() {
  console.log('--- EXASCALE AUTOMATION BOOTSTRAP ---');
  console.log('Using Token:', TOKEN.substring(0, 8) + '...');
  
  try {
    // 1. Check if we can reach Activepieces
    const response = await fetch('https://cloud.activepieces.com/api/v1/projects/' + PROJECT_ID + '/mcp-server/http', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/list',
        params: {},
        id: 1
      })
    });

    if (!response.ok) {
        console.error('Failed to communicate with MCP Server. Status:', response.status);
        console.log('Falling back to manual instruction for flow creation...');
        return;
    }

    const data = await response.json();
    console.log('MCP Tools available:', JSON.stringify(data, null, 2));

    // NOTE: If tools are available, we would proceed to call create_flow. 
    // Since the system environment is still re-initializing, I will provide the manual backup.
  } catch (err) {
    console.error('Bootstrap Error:', err.message);
  }
}

setupFlow();
