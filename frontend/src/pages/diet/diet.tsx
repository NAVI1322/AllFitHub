import DietNav from "@/components/dietNav";
import DietCardContainer from "@/components/layout/dietContainer";
import { Navbar } from "@/components/layout/NavBar";

const DietPage = () => {
  return (
    <div className="flex ">
      <DietNav />
      <DietCardContainer />
    </div>
  );
}

export default DietPage;
