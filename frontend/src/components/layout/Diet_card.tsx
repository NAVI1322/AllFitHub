
import { DietModal } from "./DietModal";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
const DietCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg  w-[100%] h-[240px]"
          src="https://picsum.photos/seed/picsum/200/300"
          alt=""
        />
      </a>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Chicken
          </h5>
        </a>
        <div className="flex justify-evenly">
          <div className="flex-col text-center">
            <div className="text-xs">
                10g
            </div>
            <div className="text-md">
                Fat
            </div>
          </div>
          <div className="flex-col  text-center">
            <div className="text-xs"> 
                10g
            </div>
            <div className="text-md">
                protein
            </div>
          </div>
          <div className="flex-col  text-center">
            <div className="text-xs">
                10g
            </div>
            <div className="text-md">
                Carbs
            </div>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <a
              href="#"
              className="flex items-center px-3 py-2 mt-4  justify-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </SheetTrigger>
          <DietModal />
        </Sheet>
      </div>
    </div>
  );
};

export default DietCard;
