from collections.abc import Iterator
from exercise_2 import Baralho, Carta


class BaralhoInversoIterador(Iterator):
    def __init__(self, cartas):
        self.__cartas = cartas
        self.__index = -1

    def __next__(self) -> Carta:
        if abs(self.__index) > len(self.__cartas):
            raise StopIteration
        carta = self.__cartas[self.__index]
        self.__index -= 1
        return carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterador(self._cartas)


if __name__ == "__main__":
    baralho = BaralhoInverso()

    for carta in baralho:
        print(carta)
