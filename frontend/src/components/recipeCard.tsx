import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";
import { BarChart } from "lucide-react";
import { useEffect, useState } from "react";
import { recipesFetch, recepiesApiParams } from "@/services/apiFetch";


const EDAMAM_RECIPES_ID = import.meta.env.VITE_EDAMAM_RECIPES_ID
const EDAMAM_RECIPES_KEY = import.meta.env.VITE_EDAMAM_RECIPES_KEY


const RecipeCard = () => {

  const [params, setParams] = useState<recepiesApiParams>({
    q: "chicken",
    app_id: EDAMAM_RECIPES_ID, // Set your app ID here
    app_key: EDAMAM_RECIPES_KEY,
  })

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await recipesFetch(params);
      setData(response.hits);
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <Card>
      <CardHeader >
        <CardTitle className="flex justify-center"> <img src={data[0].recipe.image} /></CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center e">
        <div className="flex flex-col items-center gap-4">
          <p className="font-semibold text-lg">

          </p>
          <div className="flex gap-4 font-semibold text-slate-800 text-md">
            <div className="flex flex-col items-center">
              Carbs
            </div>

            <div className="flex flex-col items-center">
              <BarChart className="bg-slate-200" />
              Protien
            </div>

            <div className="flex flex-col items-center">
              <BarChart className="bg-slate-200" />
              Fat
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default RecipeCard;
