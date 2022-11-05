from parsel import Selector
import requests

URL = "http://books.toscrape.com/catalogue/the-grand-design_405/"

response = requests.get(URL)

selector = Selector(text=response.text)

title = selector.css("div.col-sm-6.product_main h1::text").get()
price = selector.css("div.col-sm-6.product_main .price_color::text").re_first(
    r"\d+\.\d{2}"
)
book_cover_url = URL + selector.css("div.item.active img::attr(src)").get()
description = selector.css("div#product_description ~ p::text").get()

description_suffix = "...more"
if description.endswith(description_suffix):
    description = description.removesuffix(description_suffix)

book_data = {
    "title": title,
    "price": price,
    "description": description,
    "book_cover_url": book_cover_url,
}

if __name__ == "__main__":
    print(",".join(book_data.values()))
