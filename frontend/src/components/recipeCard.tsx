
import { BarChart } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { recipesFetch, recepiesApiParams } from "@/services/apiFetch";

const EDAMAM_RECIPES_ID = import.meta.env.VITE_EDAMAM_RECIPES_ID as string;
const EDAMAM_RECIPES_KEY = import.meta.env.VITE_EDAMAM_RECIPES_KEY as string;

interface Recipe {
  recipe: {
    image: string;
    label: string;
    // Add other properties if needed
  };
}

const RecipeCard = () => {
  const [params, _] = useState<recepiesApiParams>({
    q: "chicken",
    app_id: EDAMAM_RECIPES_ID,
    app_key: EDAMAM_RECIPES_KEY,
  });

  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await recipesFetch(params);
      setData(response.hits);
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center">
          <img src={data[0].recipe.image} alt={data[0].recipe.label} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="font-semibold text-lg">{data[0].recipe.label}</p>
          <div className="flex gap-4 font-semibold text-slate-800 text-md">
            <div className="flex flex-col items-center">
              Carbs
            </div>
            <div className="flex flex-col items-center">
              <BarChart className="bg-slate-200" />
              Protein
            </div>
            <div className="flex flex-col items-center">
              <BarChart className="bg-slate-200" />
              Fat
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;