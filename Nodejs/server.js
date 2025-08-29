const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.end('hii from server');
});

server.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
})
