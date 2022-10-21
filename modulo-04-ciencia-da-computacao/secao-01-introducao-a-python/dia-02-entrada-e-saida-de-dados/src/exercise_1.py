name = input("Qual é o seu nome? ").upper()

name_length = len(name)

for index in range(name_length):
    print(name[0:name_length - index])
