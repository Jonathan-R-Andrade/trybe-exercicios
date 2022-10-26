# import statistics
from collections import Counter
from math import floor


class Estatistica:
    def media(soft, numeros):
        # return statistics.mean(numeros)
        return sum(numeros) / len(numeros)

    def mediana(soft, numeros):
        # return statistics.median(numeros)
        numeros.sort()
        index = floor(len(numeros) / 2)
        eh_par = len(numeros) % 2 == 0

        if eh_par:
            return (numeros[index - 1] + numeros[index]) / 2
        else:
            return numeros[index]

    def moda(soft, numeros, amodal=False):
        # return statistics.multimode(numeros)
        modas = []
        frequencias = Counter(numeros).most_common()
        maior_frequencia = frequencias[0][1]

        for numero, frequencia in frequencias:
            if frequencia == maior_frequencia:
                modas.append(numero)
                continue
            break

        if amodal and len(modas) == len(frequencias):
            raise Exception(
                f"Conjunto Amodal. Frequência dos números = {maior_frequencia}"
            )

        return modas


if __name__ == "__main__":
    estatistica = Estatistica()

    print("Média:")

    media1 = [2, 3]
    media2 = [1, 2, 3]
    media3 = [10, 10, 10]

    print(f"A média de {media1} é {estatistica.media(media1)}")
    print(f"A média de {media2} é {estatistica.media(media2)}")
    print(f"A média de {media3} é {estatistica.media(media3)}")

    print("\nMediana:")

    mediana1 = [3]
    mediana2 = [7, 9, 5]
    mediana3 = [7, 8, 5, 6]

    print(f"A mediana de {mediana1} é {estatistica.mediana(mediana1)}")
    print(f"A mediana de {mediana2} é {estatistica.mediana(mediana2)}")
    print(f"A mediana de {mediana3} é {estatistica.mediana(mediana3)}")

    print("\nModa:")

    moda1 = [1, 2, 2, 3]
    moda2 = [1, 1, 2, 2, 3]
    moda3 = [1, 1, 2, 2, 3, 3]

    print(f"A moda de {moda1} é {estatistica.moda(moda1)}")
    print(f"As modas de {moda2} são {estatistica.moda(moda2)}")
    print(f"As modas de {moda3} são {estatistica.moda(moda3)}")
    try:
        print(
            f"As modas de {moda3} são {estatistica.moda(moda3, amodal=True)}"
        )
    except Exception as error:
        print(f'As modas de {moda3} são "Erro: {error}"')
