from src.exercise_4 import get_valid_emails

emails_list = [
    "user_n@me@site.com",
    "user_name@web.site.com",
    "user_namesite.com",
    "user_name@sitecom",
    "1user_name@site.com",
    "user&name@site.com",
    "user_name@s!te.com",
    "user_name@site.c*m",
    "user_name@site.commerce",
    "errad#@dominio.com",
    "nome@dominio.com",
    "outro@dominio.com",
    "user_name@site.com",
    "user-name@site.com",
    "us3r_name@site.com",
    "user_name@s1te.com",
    "user_name@site.c0m",
]

expected_emails_list = [
    "nome@dominio.com",
    "outro@dominio.com",
    "user_name@site.com",
    "user-name@site.com",
    "us3r_name@site.com",
    "user_name@s1te.com",
    "user_name@site.c0m",
]


def test_get_valid_emails():
    assert get_valid_emails(emails_list) == expected_emails_list
