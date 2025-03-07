import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex mt-10">
        <Categories />
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
