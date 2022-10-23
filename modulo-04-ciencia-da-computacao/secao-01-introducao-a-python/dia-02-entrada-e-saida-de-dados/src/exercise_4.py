import csv
import json


def get_total_books_by_category(books):
    categories = set()

    for book in books:
        for category in book["categories"]:
            if category:
                categories.add(category)

    total_books_by_category = {f"{category}": 0 for category in categories}

    for book in books:
        for category in book["categories"]:
            if category:
                total_books_by_category[category] += 1

    return total_books_by_category


def calc_percentage_of_books_by_category(total_books, total_books_by_category):
    return {
        f"{category}": total / total_books * 100
        for category, total in total_books_by_category.items()
    }


with open("src/data/books.json", mode="r") as json_file:
    books = json.load(json_file)

total_books = len(books)
total_books_by_category = get_total_books_by_category(books)
percentage_of_books_by_category = calc_percentage_of_books_by_category(
    total_books, total_books_by_category
)

with open("src/data/percentage_of_books_by_category.csv", "w") as csv_file:
    fieldnames = ["categoria", "porcentagem"]
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()
    for category, percentage in percentage_of_books_by_category.items():
        row = {"categoria": category, "porcentagem": percentage}
        writer.writerow(row)
