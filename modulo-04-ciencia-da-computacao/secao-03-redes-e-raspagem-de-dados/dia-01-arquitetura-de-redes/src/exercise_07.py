from socketserver import DatagramRequestHandler, UDPServer


class MyUDPHandler(DatagramRequestHandler):
    def handle(self):
        print("Cliente conectado.")
        self.wfile.write("Olá, cliente!\n".encode("utf-8"))
        data = self.rfile.readline().strip().decode("utf-8")
        print(data)
        self.wfile.write(f"{data}\n".encode("utf-8"))
        self.wfile.write("Tchau 👋\n".encode("utf-8"))
        print("Cliente desconectado.")


if __name__ == "__main__":
    HOST, PORT = "localhost", 8084

    with UDPServer((HOST, PORT), MyUDPHandler) as server:
        print(f"Rodando na porta {PORT}")
        server.serve_forever()
