import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="dark:text-white text-center py-5">
      <h1>This is home page</h1>
      <Link
        to="/login"
        className="bg-blue-700 p-3 px-5 rounded-lg my-5 inline-block text-white"
      ></Link>
    </div>
  );
};
