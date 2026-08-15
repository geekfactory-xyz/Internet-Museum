import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for suggestions
  app.post("/api/suggest", async (req, res) => {
    const { name, discord_url, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ error: "Missing name or description" });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || "https://discord.com/api/webhooks/1497730093903118588/Jdgh7U2eqac5pgkAdW0oQwaSIdC0vhYS18dcGwi0f5ilReaLyLdVjOqLPzl0N22QU4rt";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [{
            title: "New Artifact Suggestion",
            color: 15844367, // Gold color
            fields: [
              { name: "Artifact Name", value: name, inline: true },
              { name: "Source/Link", value: discord_url || "N/A", inline: true },
              { name: "Description", value: description }
            ],
            footer: { text: "Internet Museum Suggestion Box" },
            timestamp: new Date().toISOString()
          }]
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send to Discord");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error sending to Discord:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
