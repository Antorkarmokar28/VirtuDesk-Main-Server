import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { IHero } from './hero.interface';
import { Hero } from './hero.model';
//Create Hero content into db
const createHeroContentIntoDB = async (payload: IHero) => {
  const isHeroContentExists = await Hero.findOne({
    title: payload.title,
  });

  if (isHeroContentExists) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'This hero content is already exists!'
    );
  }
  const result = await Hero.create(payload);
  return result;
};
// Update hero content into db
const updateHeroContentIntoDB = async (_id: string, data: Partial<IHero>) => {
  const heroContent = await Hero.findByIdAndUpdate(_id, data, { new: true });
  if (!heroContent) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'Sorry hero conent is not found for update'
    );
  }
  return heroContent;
};
// Get all hero content from the db
const getAllHeroContentFromDB = async () => {
  const result = await Hero.find();
  return result;
};
// Get single hero content from the db
const getSingleHeroContent = async (_id: string) => {
  const heroContent = await Hero.findById(_id);
  if (!heroContent) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'Sorry hero conent is not found for retrieved'
    );
  }
  return heroContent;
};
// Delete hero content from the db
const deletHeroContentFromDB = async (_id: string) => {
  const heroContent = await Hero.findByIdAndDelete(_id);
  if (!heroContent) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'Sorry hero conent is not found for delete'
    );
  }
  return heroContent;
};
export const HeroService = {
  createHeroContentIntoDB,
  getAllHeroContentFromDB,
  updateHeroContentIntoDB,
  getSingleHeroContent,
  deletHeroContentFromDB,
};
