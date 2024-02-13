import CategoryTabs from "../components/CategoryTabs";
import Header from "../layouts/Header";
import LeftNavBar from "../layouts/LeftNavBar";
import Videos from "../layouts/Videos";
import { allCategories } from "../data/CategoryList";
import VideoDetails from "../data/VideoDetails";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024); 
  const [menuExpanded, setMenuExpanded] = useState(true);
  const videos = VideoDetails();

  useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1024);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 

  return (
    <div className="relative">
      {/* {!isLargeScreen && <div
        className={`fixed inset-0 bg-gray-500 opacity-75 z-100 ${
          menuExpanded ? "" : "hidden"
        }`}
      ></div>} */}

      <Header
        menuExpanded={menuExpanded}
        setMenuExpanded={setMenuExpanded}
        className={`${menuExpanded ? "fixed inset-0 bg-gray-500 opacity-75" : ""}`}
      />
      <div className="flex flex-grow-1 overflow-auto mt-3">
        <LeftNavBar 
          menuExpanded={menuExpanded} 
          setMenuExpanded={setMenuExpanded}
          isLargeScreen={isLargeScreen} />

        <div className={`overflow-x-hidden px-8 pb-4`}>
          <div className="sticky pb-3">
            <CategoryTabs
              allCategories={allCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="z-0 grid gap-4 md:grid-cols-3 sm:grid-cols-2 py-2">
            {videos.map((video) => (
              <Videos key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
