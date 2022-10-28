from abc import ABC, abstractmethod


class Imposto(ABC):
    @abstractmethod
    def calcular(self, valor: float | int) -> float | int:
        raise NotImplementedError


class ISS(Imposto):
    @classmethod
    def calcular(self, valor: float | int) -> float | int:
        return valor * 0.1


class ICMS(Imposto):
    @classmethod
    def calcular(self, valor: float | int) -> float | int:
        return valor * 0.06


class PIS(Imposto):
    @classmethod
    def calcular(self, valor: float | int) -> float | int:
        return valor * 0.0065


class COFINS(Imposto):
    @classmethod
    def calcular(self, valor: float | int) -> float | int:
        return valor * 0.03
