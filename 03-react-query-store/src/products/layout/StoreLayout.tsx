import { Outlet } from "react-router-dom";

//* COMPONENTS *//
import { NavBar } from "../../shared";

export const StoreLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />

      <div className="flex px-10">
        <Outlet />
      </div>
    </div>
  );
};
