from pymongo import MongoClient


def get_books_by_category(category: str):
    with MongoClient() as client:
        db = client.library
        books = db.books.find({"categories": category}, {"_id": 0, "title": 1})
        return list(books)


if __name__ == "__main__":
    print(get_books_by_category("Python"))
