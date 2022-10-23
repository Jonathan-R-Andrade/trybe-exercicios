def split_email(email):
    splitted_email = email.split("@")
    if len(splitted_email) != 2:
        raise ValueError('The email must have one "@"')

    website_and_extension = splitted_email[1].split(".")
    if len(website_and_extension) != 2:
        raise ValueError('The email must have one "."')

    username = splitted_email[0]
    website, extension = website_and_extension

    return (username, website, extension)


def validate_username(username):
    if not username[0].isalpha():
        raise ValueError("Username must start with a letter")
    for character in username:
        if character.isalpha():
            continue
        elif character.isdigit():
            continue
        elif character == "-" or character == "_":
            continue
        else:
            raise ValueError(
                'Username must have only letters, digits, "-" or "_"'
            )


def is_alpha_or_digit(string):
    for character in string:
        if character.isalpha():
            continue
        elif character.isdigit():
            continue
        else:
            return False
    return True


def validate_email(email):
    username, website, extension = split_email(email)
    validate_username(username)
    if not is_alpha_or_digit(website):
        raise ValueError("The website must have only letters or digits")
    if not is_alpha_or_digit(extension):
        raise ValueError("The extension must have only letters or digits")
    if len(extension) != 3:
        raise ValueError("The extension must have 3 characters")
