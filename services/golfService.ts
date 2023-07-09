import { playerType } from "../types/playerType";
import { tourType } from "../types/tourType";

export const getRankings = async (
  tourId: string,
  seassonId: string
): Promise<playerType[]> => {
  const url = `/api/ranking?tour-id=${tourId}&seasson-id=${seassonId}`;
  try {
    const options = { method: "GET" };

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getTours = async (): Promise<tourType[]> => {
  const url = `/api/tour`;
  try {
    const options = { method: "GET" };
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
