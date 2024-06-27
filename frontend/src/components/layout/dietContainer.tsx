import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { recipesFetch, recepiesApiParams } from "@/services/apiFetch";
import DietCard from "./dietCard";
import { Sheet } from "@/components/ui/sheet";
import { DietModal } from "./dietModal";
import { useNavigate } from 'react-router-dom';
import TypingAnimation from "./typingAnimation";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

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
    <div className="">
      <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center mb-10">
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
        <form onSubmit={handleSearch} className="flex items-center space-x-4 p-6" >
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for recipes..."
            className="p-2 border border-gray-300  text-black rounded-full w-[300px]"
          />
          <Button
            type="submit"
            variant={"secondary"}
            className="ml-2   rounded-full p-4"
          >
            Search
          </Button>
          <Button
          onClick={() => navigate("/signup")}
            variant="secondary"
            className={`text-md rounded-full bg-slate-300 hover:bg-slate-500 hover:text-slate-200  dark:bg-gray-800  hover:ring-offset-red-200 outline-none  ${token? "hidden": ""}`}
          >
            Register Now
          </Button>
          <Button
            variant="secondary"
            onClick={()=>
              {
                localStorage.setItem("token","")
                localStorage.setItem("id","")
                window.location.reload();
            }}
            className={`text-md rounded-full bg-slate-300 hover:bg-slate-500 hover:text-slate-200 hover:ring-2 hover:ring-white dark:bg-gray-800  hover:ring-offset-red-200 ring-1 ${token? "": "hidden"}`} >
            Logout
          </Button> 
          
          <ModeToggle />
        </form>
      </div>
      {loading ? (
        <div className="h-screen flex justify-center items-center"><TypingAnimation /></div>
      ) : (
        <div className="">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {data.slice(0, 9).map((item, index) => (
      <div key={index} className="flex justify-center">
        <DietCard recipe={item.recipe} onClick={() => setSelectedRecipe(item.recipe)} />
      </div>
    ))}
  </div>
</div>
      )}
      <Sheet open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        {selectedRecipe && <DietModal recipe={selectedRecipe} />}
      </Sheet>
    </div>
  );
};

export default DietCardsContainer;