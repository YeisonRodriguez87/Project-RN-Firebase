import axios from "axios";
import { GET_CHARACTERS } from "./type";

export function getCharacters() {
  return async function (distpach) {
    try {
      const characters = await axios.get("https://www.breakingbadapi.com/api/characters/");
      return distpach({
        type: GET_CHARACTERS,
        payload: characters.data,
      });
    } catch (error) {
      return error;
    }
  };
}
