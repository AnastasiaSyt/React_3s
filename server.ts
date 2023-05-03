import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer(): Promise<void> {
  const app = express();

  const vite: ViteDevServer = await createViteServer(
    {
    server: { middlewareMode: true },
    appType: 'custom',
    }
  );

  app.use(vite.middlewares);

  app.use(express.static('../src/styles'));

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split(`<!--ssr-outlet-->`);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const { pipe } = render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(html.join(''));
          res.end();
        },
      });
    } catch (err: unknown) {
      vite.ssrFixStacktrace(err as Error);
      next(err as Error);
    }
  });

  const port = process.env.PORT || 5173;

  app.listen(port, () => console.log(`App is listening on http://localhost:${port}`));
}

createServer();
