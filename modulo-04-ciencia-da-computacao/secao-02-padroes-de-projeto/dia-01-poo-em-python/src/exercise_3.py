from abc import ABC, abstractmethod
from math import pi


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base * 2) + (self.altura * 2)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return pi * self.raio**2

    def perimetro(self):
        return pi * self.raio * 2


if __name__ == "__main__":
    raio, lado, base, altura = 10, 10, 10, 5

    quadrado = Quadrado(lado)
    retangulo = Retangulo(base, altura)
    circulo = Circulo(raio)

    print(f"Quadrado Lado {lado}:")
    print("     Área = ", quadrado.area())
    print("Perímetro = ", quadrado.perimetro())

    print(f"\nRetângulo Base {base} Altura {altura}:")
    print("     Área = ", retangulo.area())
    print("Perímetro = ", retangulo.perimetro())

    print(f"\nCírculo Raio {raio}:")
    print("     Área = ", circulo.area())
    print("Perímetro = ", circulo.perimetro())
