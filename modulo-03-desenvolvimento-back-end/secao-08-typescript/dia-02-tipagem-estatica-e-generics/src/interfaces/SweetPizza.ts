import SweetFlavors from "../types/pizzaFlavors/SweetFlavors";
import Pizza from "./Pizza";

interface SweetPizza extends Pizza {
  flavor: SweetFlavors;
  slices: 4;
}

export default SweetPizza;
