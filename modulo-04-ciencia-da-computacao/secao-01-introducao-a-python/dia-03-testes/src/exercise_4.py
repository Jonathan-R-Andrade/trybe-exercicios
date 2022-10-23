from src.exercise_3 import validate_email


def get_valid_emails(emails):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
            valid_emails.append(email)
        except ValueError as error:
            print(f'O e-mail "{email}" é inválido. Erro: {error}')
    return valid_emails


if __name__ == "__main__":
    emails_list = [
        "nome@dominio.com",
        "errad#@dominio.com",
        "outro@dominio.com",
    ]

    valid_emails = get_valid_emails(emails_list)

    print("E-mails válidos: ", valid_emails)
