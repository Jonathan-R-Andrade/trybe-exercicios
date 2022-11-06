from parsel import Selector
import requests

URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(URL)

selector = Selector(text=response.text)

images = selector.css("div.thumb a.image img")

for image in images:
    image_url = image.css("img::attr(src)").get()
    country_name = image.css("img::attr(alt)").get()
    image_type = image_url.split(".")[-1]

    file_path = "src/country_flags/"
    file_name = f"{country_name}.{image_type}"
    image = requests.get("https:" + image_url).content
    with open(file_path + file_name, mode="wb") as file:
        file.write(image)
    print(file_path + file_name)
