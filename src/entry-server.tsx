import React from 'react';
import ReactDOMServer, {
  type PipeableStream,
} from 'react-dom/server';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StaticRouter } from 'react-router-dom/server';
import AppRouter from './AppRouter';

export function render(url: string, options?: object): PipeableStream {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </Provider>,
    options
  );
}
