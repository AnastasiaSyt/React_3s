import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares);
  app.use(express.static('../src/styles'));

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
  
    try {
      // 1. Чтение index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )
  
      // 2. Применить преобразования Vite HTML. Это вводит клиент Vite HMR и
      // также применяет преобразования HTML из плагинов Vite, например глобальные преамбулы
      // из @ vitejs / plugin-react
      template = await vite.transformIndexHtml(url, template)
  
      // 3. Загрузите запись о сервере. vite.ssrLoadModule автоматически преобразует
      // ваш исходный код ESM будет использоваться в Node.js! Нет комплектации
      // требуется и обеспечивает эффективную аннулирование, аналогичную HMR.
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  
      // 4. рендерим HTML приложения. Это предполагает экспортированный файл `render` из entry-server.js
      // функция вызывает соответствующие API SSR фреймворка,
      // например, ReactDOMServer.renderToString ()
      const appHtml = await render(url);
  
      // 5. Вставьте HTML-код, отрисованный приложением, в шаблон.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
  
      // 6. Отправляем обработанный HTML обратно.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // Если обнаружена ошибка, пусть Vite исправит трассировку стека, чтобы она сопоставлялась с
      // ваш фактический исходный код.
      vite.ssrFixStacktrace(e)
      next(e)
    }
  });

  app.listen(5173);
}

createServer();
