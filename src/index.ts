import * as http from "http";

function createEndpoint(url: string, statusCode: number, responseBody: string) {
  const server = http.createServer((request, response) => {
    if (request.url === url) {
      response.writeHead(statusCode, { "Content-Type": "text/plain", "server": `node ${process.version}` });
      response.end(responseBody);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Not found");
    }
  });

  server.listen(3000, () => {
    console.log(`Server listening on port 3000. Endpoint available at ${url}`);
  });
}


createEndpoint("/", 200, "It works!")