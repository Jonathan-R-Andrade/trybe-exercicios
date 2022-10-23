def get_number_of_character(character):
    number_of = {
        "A": 2,
        "B": 2,
        "C": 2,
        "D": 3,
        "E": 3,
        "F": 3,
        "G": 4,
        "H": 4,
        "I": 4,
        "J": 5,
        "K": 5,
        "L": 5,
        "M": 6,
        "N": 6,
        "O": 6,
        "P": 7,
        "Q": 7,
        "R": 7,
        "S": 7,
        "T": 8,
        "U": 8,
        "V": 8,
        "W": 9,
        "X": 9,
        "Y": 9,
        "Z": 9,
    }
    return number_of[character]


def check_character(character):
    if "A" <= character <= "Z":
        return
    elif character == "0" or character == "1":
        return
    elif character == "-":
        return
    raise ValueError('Allowed characters are "A-Z", "-", "0" or "1"')


def check_phrase(phrase):
    if type(phrase) != str:
        raise ValueError("The phrase must be a string")
    elif len(phrase) == 0 or len(phrase) > 30:
        raise ValueError(
            "The phrase must be greater than 0 and less than or equal to 30"
        )


def get_number_of_phrase(phrase):
    check_phrase(phrase)
    number = ""
    for character in phrase:
        check_character(character)
        if character == "0" or character == "1" or character == "-":
            number += character
        else:
            number += str(get_number_of_character(character))
    return number


if __name__ == "__main__":
    print(get_number_of_phrase("1-HOME-SWEET-HOME"))
