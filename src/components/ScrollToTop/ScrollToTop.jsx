import { useEffect, useState } from "react";
import s from "./style.module.css"
export function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls 200 pixels or more
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={s.scroll}
      style={{ display: isVisible ? "block" : "none" }}
    >
      Scroll To Top
    </button>
  );
}