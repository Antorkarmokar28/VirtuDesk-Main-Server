import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import { IHero } from "./hero.interface";
import { Hero } from "./hero.model";
//Create Hero content into db
const createHeroContentIntoDB = async (payload: IHero) => {
  const isHeroContentExists = await Hero.findOne({
    title: payload.title,
  });

  if (isHeroContentExists) {
    throw new AppError(
      StatusCodes.CONFLICT,
      "This hero content is already exists!"
    );
  }
  const result = await Hero.create(payload);
  return result;
};

export const HeroService = {
  createHeroContentIntoDB,
};
