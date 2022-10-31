class TV:
    def __init__(soft, tamanho):
        soft.__volume = 50
        soft.__canal = 1
        soft.__tamanho = tamanho
        soft.__ligada = False

    def aumentar_volume(soft):
        if soft.__volume < 99:
            soft.__volume += 1
            print(f"Volume alterado para {soft.__volume}")

    def diminuir_volume(soft):
        if soft.__volume > 0:
            soft.__volume -= 1
            print(f"Volume alterado para {soft.__volume}")

    def modificar_canal(soft, canal):
        if canal < 1 or canal > 99:
            raise ValueError("Canal não encontrado.")
        soft.__canal = canal
        print(f"Canal alterado para {soft.__canal}")

    def ligar_desligar(soft):
        if soft.__ligada:
            print("Desligando a TV")
            soft.__ligada = False
        else:
            soft.__ligada = True
            print("TV ligada")

    @property
    def tamanho(soft):
        return soft.__tamanho

    def __str__(soft):
        return (
            "TV:\n"
            f"tamanho - {soft.__tamanho}\n"
            f" ligada - {soft.__ligada}\n"
            f"  canal - {soft.__canal}\n"
            f" volume - {soft.__volume}\n"
        )


if __name__ == "__main__":
    tv = TV(50)

    print(tv)
    tv.ligar_desligar()

    print(tv)
    tv.diminuir_volume()

    print(tv)
    tv.modificar_canal(4)

    print(tv)
    for index in range(100):
        tv.diminuir_volume()

    print(tv)
    for index in range(100):
        tv.aumentar_volume()

    print(tv)
    tv.ligar_desligar()

    print(tv)
    tv.ligar_desligar()

    print(tv)

    try:
        tv.modificar_canal(2022)
        print(tv)
    except ValueError as error:
        print(f"Erro: {error}")
