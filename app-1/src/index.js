require('http').createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(require('fs').readFileSync(require('path').join(__dirname, './example.html'), 'utf-8'));
}).listen(3001);
