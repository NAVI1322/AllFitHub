import Image from "next/image";
import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";
import { BarChart } from "lucide-react";

const RecipeCard = () => {
  return (
    <Card>
      <CardHeader >
        <CardTitle className="flex justify-center">Recipe</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <p>Chicken</p>
        <div>
          <BarChart />
        </div>
      </CardContent>
    </Card>
  )
}
export default RecipeCard;
