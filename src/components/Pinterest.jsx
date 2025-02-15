import { useEffect } from "react";

const PinterestEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-10">
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="300"
        data-pin-scale-height="240"
        data-pin-scale-width="80"
        href="https://www.pinterest.com/victrgarciaphoto/sesión-de-fotos-matrimonio/"
      >
        Pinterest Board
      </a>
    </div>
  );
};

export default PinterestEmbed;
