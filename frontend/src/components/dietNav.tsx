import { BicepsFlexed, BicepsFlexedIcon, Calendar, HomeIcon } from "lucide-react"

const DietNav = () => {
  return (
    <div className=" flex flex-col items-center gap-14 bg-slate-900 w-44 text-slate-200 pt-20">

      <div className="flex flex-col items-center hover:text-slate-400 w-14 ">
        <HomeIcon />
        <a href="#">Home</a>
      </div>

      <div className="flex flex-col items-center  hover:text-slate-400 ">
        <Calendar />
        <a href="#">Meal Planner</a>
      </div>

      <div className="flex flex-col items-center  hover:text-slate-400 ">
        <BicepsFlexed />
        <a href="#">
          Fitness
        </a>
      </div>

    </div>

  )
}

export default DietNav
