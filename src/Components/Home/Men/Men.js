import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Men = () => {
  return (
    <div className="min-vh-100 bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white my-10">
      <h1 className="text-center cursor-pointer">Pour lui</h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 cursor-pointer">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center"></div>
    </div>
  );
};

export default Men;

const cards = [
  {
    url: "../img/product_1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "../img/product_1.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "../img/product_1.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "../img/product_1.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "../img/product_1.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "../img/product_1.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "../img/product_1.png",
    title: "Title 7",
    id: 7,
  },
];
