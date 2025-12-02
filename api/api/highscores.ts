// api/highscores.ts
// Einfacher Test-Endpoint, um zu prüfen, ob Vercel-Funktionen laufen

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
      res.status(200).json({
        ok: true,
        message: 'Highscore-API läuft 🚀 (noch ohne Datenbank)',
      });
      return;
    }
  
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed' });
  }  