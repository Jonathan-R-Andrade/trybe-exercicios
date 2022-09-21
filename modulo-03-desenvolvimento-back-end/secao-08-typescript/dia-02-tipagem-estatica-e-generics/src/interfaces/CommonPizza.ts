import CommonFlavors from "../types/pizzaFlavors/CommonFlavors";
import Pizza from "./Pizza";

interface CommonPizza extends Pizza {
  flavor: CommonFlavors;
}

export default CommonPizza;
