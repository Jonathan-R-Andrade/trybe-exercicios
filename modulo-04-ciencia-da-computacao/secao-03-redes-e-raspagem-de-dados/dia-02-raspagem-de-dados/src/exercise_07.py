from pymongo import MongoClient


def get_total_books_by_categories():
    with MongoClient() as client:
        db = client.library
        total_books_by_categories = db.books.aggregate(
            [
                {"$match": {"status": "PUBLISH"}},
                {"$unwind": "$categories"},
                {"$group": {"_id": "$categories", "total": {"$sum": 1}}},
                {"$sort": {"total": -1}},
            ]
        )
        return list(total_books_by_categories)


if __name__ == "__main__":
    total_books_by_categories = get_total_books_by_categories()
    for category in total_books_by_categories:
        print(category["_id"], category["total"])
