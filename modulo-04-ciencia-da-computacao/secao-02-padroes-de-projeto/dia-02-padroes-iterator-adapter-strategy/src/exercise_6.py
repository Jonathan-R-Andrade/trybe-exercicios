import impostos


class Orcamento:
    def __init__(self, valor: float | int):
        self.valor = valor

    def calcular_imposto(self, imposto: impostos.Imposto):
        return imposto.calcular(self.valor)


if __name__ == "__main__":
    orcamento = Orcamento(1000)

    print(f"ISS: {orcamento.calcular_imposto(impostos.ISS)}")
    print(f"ICMS: {orcamento.calcular_imposto(impostos.ICMS)}")
    print(f"PIS: {orcamento.calcular_imposto(impostos.PIS)}")
    print(f"COFINS: {orcamento.calcular_imposto(impostos.COFINS)}")
