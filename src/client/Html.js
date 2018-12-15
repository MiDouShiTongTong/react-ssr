const Html = ({ body, title }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <div id="app1">${body}</div>
  </body>
</html>
`;

export default Html;
