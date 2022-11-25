from subprocess import check_output

cpu_info = check_output("lscpu").decode("utf-8").split("\n")

print("Informações sobre a CPU:")
print(cpu_info[7])
print(cpu_info[11])
print(cpu_info[14])
print(cpu_info[19])
print(cpu_info[20])
print(cpu_info[21])
print(cpu_info[22])

memory_info = check_output(["free", "--mega"]).decode("utf-8").split("\n")

print("\nInformações sobre a memória:")
print("Memória RAM total:              ", memory_info[1].split()[1], "MB")
print("Memória RAM utilizada:          ", memory_info[1].split()[2], "MB")
print("Memória RAM disponível:         ", memory_info[1].split()[6], "MB")
