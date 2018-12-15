import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import Html from '../client/Html';

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  const title = 'hello world';
  const body = renderToString(<App />);

  res.send(
    Html({
      body,
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
