import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DietModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex space-x-2 border-b mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div>
            Recipe Preview
            </div>
          </SheetTitle>
          <SheetDescription >
           <img src="https://picsum.photos/seed/picsum/200/300" className="w-[100%] h-[240px] mt-5 mb-4" alt=""  />
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-2 mt-2">
          <div className="flex items-center  text-md gap-4 justify-center">
           Dish Name
          </div>
          <div className="flex items-center  text-sm text-green-800 font-bold gap-4 justify-center">
           Dish Name
          </div>
          <div className="flex items-center  text-md gap-4 justify-center p-2">
            dish description
          </div>
        </div>
        <SheetFooter>
      <SheetClose asChild>
       
       <Button type="submit" className=" text-white px-4 py-2 rounded-md">Close</Button>
      
      </SheetClose>
    </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
