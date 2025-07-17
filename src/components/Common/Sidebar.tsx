import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col">
      <Link to="/dashboard/home">Home</Link>
      <Link to="/dashboard/products">Products</Link>
    </div>
  );
};

export default Sidebar;
