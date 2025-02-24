export interface ICountry {
  _id: string;
  name: string;
  flag: string;
  slug: string;
}

export interface IRecipe {
  _id: string;
  name: string;
  description: string;
  image: string;
  countryId: string;
  userId: string;
  video: string;
  views: number;
  slug: string;
  steps: string[];
  ingredients: string[];
  reviews: string[];
}

export interface IReview {
  _id: string;
  rating: number;
  comment: string;
  recipeId: string;
  userId: string;
}
