from time import sleep
from subprocess import check_output, run


def print_memory_info():
    memory_info = check_output(["free", "--mega"]).decode("utf-8").split("\n")
    run("clear")
    print("Informações sobre a memória:")
    print("Memória RAM total:              ", memory_info[1].split()[1], "MB")
    print("Memória RAM utilizada:          ", memory_info[1].split()[2], "MB")
    print("Memória RAM disponível:         ", memory_info[1].split()[6], "MB")


def main():
    while True:
        print_memory_info()
        sleep(1)


try:
    main()
except KeyboardInterrupt:
    run("clear")
    exit(0)
