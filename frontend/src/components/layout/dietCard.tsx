import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const DietCard = ({ recipe }:any) => {
  console.log(recipe);
  return (
    <div className="max-w-sm  bg-white  border border-gray-200 rounded-lg shadow w-[340px] dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-[100%] h-[240px]"
          src={recipe.image}
          alt={recipe.label}
        />
      </a>

      <div className="p-5 shadow-md dark:shadow-md ">
        <a href="#">
          <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white text-center font-semibold">
            {recipe.label}
          </h5>
        </a>
        <div className="space-x-2 flex justify-center items-baseline p-4 font-light">
        <div className="text-md text-center">Portion</div>
          <div className="text-xs text-center">{Math.round(recipe.totalWeight)}g</div>
          
          
        </div>
        <div className="flex justify-evenly font-light">
          <div className="flex-col text-center">
            <div className="text-xs">{Math.round(recipe.totalNutrients.FAT.quantity)}g</div>
            <div className="text-md">Fat</div>
          </div>
          <div className="flex-col text-center">
            <div className="text-xs">{Math.round(recipe.totalNutrients.PROCNT.quantity)}g</div>
            <div className="text-md">Protein</div>
          </div>
          <div className="flex-col text-center">
            <div className="text-xs">{Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</div>
            <div className="text-md">Carbs</div>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex justify-end mt-2">
            <Button variant={"ghost" } className="flex ">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              </Button>
            </div>
          </SheetTrigger>
          <DietModal recipe={recipe} />
        </Sheet>
      </div>
    </div>
  );
};

export function DietModal({ recipe }:any) {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="flex space-x-2 border-b mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <div>
            Recipe Preview
          </div>
        </SheetTitle>
        <SheetDescription>
          <img src={recipe.image} className="w-[100%] h-[240px] mt-5 mb-4" alt={recipe.label} />
        </SheetDescription>
      </SheetHeader>
      <div className="space-y-2 mt-2">
        <div className="flex items-center text-xl gap-4 justify-center font-light">
          {recipe.label}
        </div>
        <div className="flex items-center text-sm text-green-800 font-bold gap-4 justify-center">
          {recipe.cuisineType}
        </div>
        <div className="text-md font-thin mb-3">Ingredients :</div>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center overflow-hidden text-ellipsis font-light">
        {recipe.ingredientLines.map((ingredient:any, index:any) => (
    <div key={index} className="flex space-y-1">
      {ingredient}
      <br />
    </div>
  ))}
        </p>
      </div>  
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit" className="text-white px-4 py-2 rounded-md">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}

export default DietCard;

