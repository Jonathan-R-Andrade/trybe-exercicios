import pytest
from src.exercise_3 import validate_email


def test_validate_email_for_invalid_emails():
    with pytest.raises(ValueError, match='The email must have one "@"'):
        validate_email("user_namesite.com")

    with pytest.raises(ValueError, match='The email must have one "@"'):
        validate_email("user_n@me@site.com")

    with pytest.raises(ValueError, match='The email must have one "."'):
        validate_email("user_name@sitecom")

    with pytest.raises(ValueError, match='The email must have one "."'):
        validate_email("user_name@web.site.com")

    with pytest.raises(ValueError, match="Username must start with a letter"):
        validate_email("1user_name@site.com")

    with pytest.raises(
        ValueError, match='Username must have only letters, digits, "-" or "_"'
    ):
        validate_email("user&name@site.com")

    with pytest.raises(
        ValueError, match="The website must have only letters or digits"
    ):
        validate_email("user_name@s!te.com")

    with pytest.raises(
        ValueError, match="The extension must have only letters or digits"
    ):
        validate_email("user_name@site.c*m")

    with pytest.raises(
        ValueError, match="The extension must have 3 characters"
    ):
        validate_email("user_name@site.commerce")


def test_validate_email_for_valid_emails():
    valid_emails = [
        "user_name@site.com",
        "user-name@site.com",
        "us3r_name@site.com",
        "user_name@s1te.com",
        "user_name@site.c0m",
    ]
    for email in valid_emails:
        validate_email(email)
