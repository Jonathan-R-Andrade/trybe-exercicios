import VegetarianFlavors from "../types/pizzaFlavors/VegetarianFlavors";
import Pizza from "./Pizza";

interface VegetarianPizza extends Pizza {
  flavor: VegetarianFlavors;
}

export default VegetarianPizza;
