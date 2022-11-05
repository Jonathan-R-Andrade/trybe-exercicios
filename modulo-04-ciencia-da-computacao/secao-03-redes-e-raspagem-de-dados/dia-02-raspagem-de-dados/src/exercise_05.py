from exercise_04 import selector, book_data

stock = selector.css("p.instock *::text").re_first(r"\d+")

book_data["stock"] = stock

if __name__ == "__main__":
    print(",".join(book_data.values()))
