import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { recipesFetch, recepiesApiParams } from "@/services/apiFetch";
import DietCard from "./dietCard";
import { Sheet } from "@/components/ui/sheet";
import { DietModal } from "./dietModal";
import { useNavigate } from 'react-router-dom';

const EDAMAM_RECIPES_ID = import.meta.env.VITE_EDAMAM_RECIPES_ID as string;
const EDAMAM_RECIPES_KEY = import.meta.env.VITE_EDAMAM_RECIPES_KEY as string;

const DietCardsContainer = () => {
  const [query, setQuery] = useState<string>("chicken");
  const [params, setParams] = useState<recepiesApiParams>({
    q: query,
    app_id: EDAMAM_RECIPES_ID,
    app_key: EDAMAM_RECIPES_KEY,
  });
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);

  const navigate = useNavigate();

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

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({ ...params, q: query });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen">
      <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <button
          className="text-white text-sm font-semibold flex items-center hover:text-gray-300"
          onClick={handleBack}
        >
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <form onSubmit={handleSearch} className="flex items-center space-x-4">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for recipes..."
            className="p-2 border border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md shadow-md transition duration-300"
            onClick={() => navigate('/signup')}
          >
            Register
          </button>
        </form>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className=" flex justify-center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <DietCard
              key={index}
              recipe={item.recipe}
              onClick={() => setSelectedRecipe(item.recipe)}
            />
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