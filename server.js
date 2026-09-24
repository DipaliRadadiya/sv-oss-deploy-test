// A deploy test: shows which version is live, under which Node, and
// whether the build step ran.
const http = require('http');
const fs = require('fs');

const read = (file) => { try { return fs.readFileSync(`${__dirname}/${file}`, 'utf8').trim(); } catch { return 'missing'; } };
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`sv-oss-deploy-test (Node)\nversion: ${read('VERSION')}\nnode: ${process.version}\nbuild: ${read('BUILD')}\n`);
}).listen(port, () => console.log(`listening on ${port}`));
