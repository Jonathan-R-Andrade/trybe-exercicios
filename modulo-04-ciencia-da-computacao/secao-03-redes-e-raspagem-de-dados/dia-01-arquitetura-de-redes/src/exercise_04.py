from socketserver import StreamRequestHandler, TCPServer


class MyTCPHandler(StreamRequestHandler):
    def handle(self):
        print("Cliente conectado.")
        self.wfile.write("Olá, cliente!\n".encode("utf-8"))
        while True:
            data = self.rfile.readline().strip().decode("utf-8")
            if not data:
                self.wfile.write("Tchau 👋\n".encode("utf-8"))
                print("Cliente desconectado.")
                break
            print(data)
            self.wfile.write(f"{data}\n".encode("utf-8"))


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    with TCPServer((HOST, PORT), MyTCPHandler) as server:
        print(f"Rodando na porta {PORT}")
        server.serve_forever()
