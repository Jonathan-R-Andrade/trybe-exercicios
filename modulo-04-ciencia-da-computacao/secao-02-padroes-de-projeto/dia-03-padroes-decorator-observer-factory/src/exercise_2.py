from typing import List
from abc import ABC, abstractmethod


class Rotina(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class Alarme:
    def __init__(self):
        self.__rotinas: List[Rotina] = []

    def adicionar_rotina(self, rotina: Rotina):
        self.__rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("😴️⏰️🔔️📢️🎶️😵‍💫️")
        self.acionar_rotinas()


class AcenderLuzes(Rotina):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Acendendo as luzes...")


class PrepararCafe(Rotina):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Preparando o café...")


class LigarComputador(Rotina):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Ligando o computador...")


if __name__ == "__main__":
    alarme = Alarme()
    AcenderLuzes(alarme)
    PrepararCafe(alarme)
    LigarComputador(alarme)
    alarme.despertar()
