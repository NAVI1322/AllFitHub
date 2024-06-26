
import { useEffect, useState } from "react";
import { recipesFetch, recepiesApiParams } from "@/services/apiFetch";
import DietCard from "./dietCard";
import { Sheet } from "@/components/ui/sheet";
import { DietModal } from "./dietModal";

const EDAMAM_RECIPES_ID = import.meta.env.VITE_EDAMAM_RECIPES_ID;
const EDAMAM_RECIPES_KEY = import.meta.env.VITE_EDAMAM_RECIPES_KEY;

const DietCardsContainer = () => {
  const [query, setQuery] = useState("chicken");
  const [params, setParams] = useState<recepiesApiParams>({
    q: query,
    app_id: EDAMAM_RECIPES_ID,
    app_key: EDAMAM_RECIPES_KEY,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await recipesFetch(params);
        setData(response.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [params]);

  const handleSearch = (e) => {
    e.preventDefault();
    setParams({ ...params, q: query });
  };
  console.log(data)
  return (
    <div className="m-6">
      <form onSubmit={handleSearch} className="m-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="p-2 border border-gray-300 rounded text-slate-800"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 flex">
          {data.map((item, index) => (
            <DietCard key={index} recipe={item.recipe} onClick={() => setSelectedRecipe(item.recipe)} />
          ))}
        </div>
      )}
      <Sheet open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        {selectedRecipe && <DietModal recipe={selectedRecipe} />}
      </Sheet>
    </div>
  );
};

export default DietCardsContainer;
