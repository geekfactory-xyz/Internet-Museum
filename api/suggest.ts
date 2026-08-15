export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parse body if string (in case body parsing isn't done automatically)
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  }

  const { name, discord_url, description } = body || {};

  if (!name || !description) {
    return res.status(400).json({ error: 'Missing name or description' });
  }

  const webhookUrl =
    process.env.DISCORD_WEBHOOK_URL ||
    'https://discord.com/api/webhooks/1497730093903118588/Jdgh7U2eqac5pgkAdW0oQwaSIdC0vhYS18dcGwi0f5ilReaLyLdVjOqLPzl0N22QU4rt';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: 'New Artifact Suggestion',
            color: 15844367, // Gold color
            fields: [
              { name: 'Artifact Name', value: String(name), inline: true },
              { name: 'Source/Link', value: String(discord_url || 'N/A'), inline: true },
              { name: 'Description', value: String(description) },
            ],
            footer: { text: 'Internet Museum Suggestion Box' },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      console.error('Discord webhook responded with error:', response.status, errText);
      return res.status(502).json({ error: 'Failed to forward to Discord' });
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error sending to Discord:', error);
    return res.status(500).json({ error: error?.message || 'Internal server error' });
  }
}
