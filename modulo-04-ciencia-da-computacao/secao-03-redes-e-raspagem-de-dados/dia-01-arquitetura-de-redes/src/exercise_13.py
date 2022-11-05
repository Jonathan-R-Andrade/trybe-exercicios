import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler

ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ssl_context.load_cert_chain(
    certfile="src/certificate/cert.pem", keyfile="src/certificate/key.pem"
)

HOST, PORT = "0.0.0.0", 8000

httpServer = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
httpServer.socket = ssl_context.wrap_socket(
    httpServer.socket, server_side=True
)

print("Rodando na porta", PORT)
httpServer.serve_forever()
