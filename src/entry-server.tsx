import React from 'react';
import ReactDOMServer, {
  type PipeableStream,
  type RenderToPipeableStreamOptions,
} from 'react-dom/server';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StaticRouter } from 'react-router-dom/server';
import AppRouter from './AppRouter';

export function render(url: string, options?: RenderToPipeableStreamOptions): PipeableStream {
  const stream = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
}
