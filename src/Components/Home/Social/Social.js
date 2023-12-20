import "./Social.scss";
import VanillaTilt from "vanilla-tilt";
import React, { useEffect, useRef, useState } from "react";
let socialPictures = [
  {
    img: "https://cdn.dribbble.com/userupload/11364382/file/original-cec23f4f2307a6f6016ea23ba6f1dc67.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11258509/file/original-b7c71669231417610fbc1aae04dc5255.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11089406/file/original-2885ebb83ca47676fa9fa8591b430c4a.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11030811/file/original-6a47fbcc87310ef0ad188dd1b7b7f303.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11364382/file/original-cec23f4f2307a6f6016ea23ba6f1dc67.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11258509/file/original-b7c71669231417610fbc1aae04dc5255.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11089406/file/original-2885ebb83ca47676fa9fa8591b430c4a.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11030811/file/original-6a47fbcc87310ef0ad188dd1b7b7f303.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11030811/file/original-6a47fbcc87310ef0ad188dd1b7b7f303.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11364382/file/original-cec23f4f2307a6f6016ea23ba6f1dc67.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11258509/file/original-b7c71669231417610fbc1aae04dc5255.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11089406/file/original-2885ebb83ca47676fa9fa8591b430c4a.jpg?resize=1024x768",
  },
  {
    img: "https://cdn.dribbble.com/userupload/11030811/file/original-6a47fbcc87310ef0ad188dd1b7b7f303.jpg?resize=1024x768",
  },
];

const Social = () => {
  const indicatorRef = useRef(null);
  const galleryItemsRefs = useRef([]);
  const galleryContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    const hoverItemFlex = "1 1 250px";
    const defaultItemFlex = "0 1 20px";
    const indicator = indicatorRef.current;
    const galleryItems = galleryItemsRefs.current;
    const galleryContainer = galleryContainerRef.current;

    const updateGalleryItems = () => {
      galleryItems.forEach((item, index) => {
        const flex = index === hoveredIndex ? hoverItemFlex : defaultItemFlex;
        item.style.flex = flex;
      });
    };

    updateGalleryItems();

    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
      updateGalleryItems();
    };

    galleryItems.forEach((item, index) => {
      item.addEventListener("mouseenter", () => handleMouseEnter(index));
    });
  }, [hoveredIndex]);

  const handleMouseMove = (e) => {
    const indicator = indicatorRef.current;
    if (indicator) {
      const leftPosition =
        e.clientX - galleryContainerRef.current.getBoundingClientRect().left;
      indicator.style.left = `${leftPosition}px`;
    }
  };

  VanillaTilt.init(document.querySelector(".gallery"), {
    max: 5,
    speed: 1000,
    reset: false,
    "full-page-listening": true,
  });

  return (
    <div className="body vh-100 overflow-hidden pos-rel">
      <div className="container pos-abs flex jcc">
        <div className="indicator pos-abs" ref={indicatorRef}></div>
        <div
          className="gallery flex jc-sa w-100 overflow-hidden pointer "
          ref={galleryContainerRef}
          onMouseMove={handleMouseMove}
        >
          {socialPictures.map((element, index) => {
            return (
              <div
                key={index}
                ref={(el) => (galleryItemsRefs.current[index] = el)}
                className="gallery-item flex jcc aic overflow-hidden b-white pos-rel"
              >
                <img src={element.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Social;
