import { ICar } from "../../../typings/car";
import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";

class CarService {
  public async getCars(): Promise<ICar[]> {
    const response = await apolloClient.query({ query: GET_ALL_CARS }).catch((err) => {
      throw err;
    });

    if (response && response.data && response.data.cars) return response.data.cars;

    return [];
  }
}

export default new CarService();
