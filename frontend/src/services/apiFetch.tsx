
import axios from "axios";

const EDAMAM_KEY = import.meta.env.VITE_EDAMAM_KEY
const EDAMAM_RECIPES_KEY = import.meta.env.VITE_EDAMAM_RECIPES_KEY
const EDAMAM_ID = import.meta.env.VITE_EDAMAM_ID
const EDAMAM_RECIPES_ID = import.meta.env.VITE_EDAMAM_RECIPES_ID
const BASE_URL = "https://api.edamam.com/api/nutrition-data?"

export interface recepiesApiParams {
  q?: string; // Search text
  app_id: string; // Your Edamam application ID
  app_key: string; // Your Edamam application key
  type?: "public" | "user"; // Type of recipes (optional)
  beta?: boolean; // Allow beta features (optional)
  ingr?: string; // Filter by ingredient count (optional)
  diet?: string[]; // Diet labels (optional)
  health?: string[]; // Health labels (optional)
  cuisineType?: string[]; // Cuisine type (optional)
  mealType?: string[]; // Meal type (optional)
  dishType?: string[]; // Dish type (optional)
  calories?: string; // Filter by calorie range (optional)
  time?: string; // Filter by cooking time range (optional)
  imageSize?: string[]; // Size of recipe images (optional)
  glycemicIndex?: string; // Filter by glycemic index (optional)
  inflammatoryIndex?: string; // Filter by inflammatory index (optional)
  excluded?: string[]; // Excluded ingredients (optional)
  random?: boolean; // Random selection of recipes (optional)
  nutrients?: { [key: string]: string }; // Nutrient ranges (optional)
  field?: string[]; // Fields to include in response (optional)
  co2EmissionsClass?: string; // Filter by CO2 footprint (optional)
  tag?: string[]; // Tags to include (optional)
  sysTag?: string[]; // System tags to include (beta) (optional)
}

export async function recipesFetch(params: recepiesApiParams): Promise<any> {
  const baseUrl = "https://api.edamam.com/api/recipes/v2?type=public&";

  try {
    const response = await axios.get(baseUrl, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Edamam API:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
}

export const myParams: recepiesApiParams = {
  q: "chicken",
  app_id: EDAMAM_RECIPES_ID, // Replace with your actual app ID
  app_key: EDAMAM_RECIPES_KEY, // Replace with your actual app key
  diet: ["balanced", "low-carb"],
  health: ["vegan", "low-sodium"],
  field: ["label", "image", "calories"],
};



export const edamamFetch = async (nutritionType: string, str: string) => {

  function encodeSpacesComma(str: string) {
    const spaceRegex = /\s/g;
    const commaRegex = /[\s,]/g;

    let newStr = str.replace(spaceRegex, "%20")
    return newStr.replace(commaRegex, "%2C");
  }

  const ingr = encodeSpacesComma(str);

  try {
    const data = await axios.get(
      `${BASE_URL}
app_id=${EDAMAM_ID}
&app_key=%20${EDAMAM_KEY}
%09&nutrition-type=${nutritionType}
&ingr=${ingr}`)
    return data;
  }
  catch (err) {
    console.error("Error occured while fetching Data: ", err)
  }
}

