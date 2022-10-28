from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class BaralhoIterador(Iterator):
    def __init__(self, cartas, inverso):
        self.__cartas = cartas
        self.__index = -1 if inverso else 0
        self.__inverso = inverso

    def __next__(self) -> Carta:
        if not self.__inverso and self.__index == len(self.__cartas):
            raise StopIteration
        if self.__inverso and abs(self.__index) > len(self.__cartas):
            raise StopIteration

        carta = self.__cartas[self.__index]
        self.__index += -1 if self.__inverso else 1
        return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, inverso=False):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.__inverso = inverso

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterador(self._cartas, self.__inverso)


if __name__ == "__main__":
    baralho = Baralho()
    baralhoInverso = Baralho(inverso=True)

    print("Baralho normal:")
    for carta in baralho:
        print(carta)

    print("\nBaralho inverso:")
    for carta in baralhoInverso:
        print(carta)
