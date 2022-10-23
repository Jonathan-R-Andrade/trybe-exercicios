import pytest
from src.exercise_2 import get_number_of_phrase


def test_get_number_of_phrase_throw_exception_about_invalid_characters():
    with pytest.raises(
        ValueError, match='Allowed characters are "A-Z", "-", "0" or "1"'
    ):
        get_number_of_phrase("#-|nval!d")


def test_get_number_of_phrase_throw_exception_about_invalid_parameter_type():
    with pytest.raises(ValueError, match="The phrase must be a string"):
        get_number_of_phrase(123456789)


def test_get_number_of_phrase_throw_exception_about_invalid_parameter_length():
    with pytest.raises(
        ValueError,
        match="The phrase must be greater than 0 and less than or equal to 30",
    ):
        get_number_of_phrase("")
    with pytest.raises(
        ValueError,
        match="The phrase must be greater than 0 and less than or equal to 30",
    ):
        get_number_of_phrase("1010-THIS-IS-A-LONG-PHRASE-1010")


def test_get_number_of_phrase_return_the_number_of_phrase():
    number = get_number_of_phrase("0-GIVE-ME-THE-NUMBER-1")
    assert number == "0-4483-63-843-686237-1"
