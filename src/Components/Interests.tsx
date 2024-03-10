import { motion } from "framer-motion";

import { useState, memo } from "react";

const books = (
  <div>
    <h4 className="text-3xl font-bold">Books</h4>
    <p className="mt-4">
      Books unlock diverse perspectives, fostering empathy and growth. Cherished
      companions, they transform our understanding with every turn of the page.
    </p>
    <div className="mt-6 mb-2 font-bold">
      Here are some of my favorite books:
    </div>
    <ol className="list-disc gap-2 px-6 [&>*]:py-1">
      <li>Steve Jobs: The Man Who Thought Different</li>
      <li>Atomic Habits-James Clear</li>
      <li>Shadow of the Warewolf-Guy N. Smith</li>
      <li>A Brief History of Time-Stephen Hawking</li>
    </ol>
  </div>
);
const music = (
  <div>
    <h4 className="text-3xl font-bold">Music</h4>
    <p className="mt-4">
      Music, a universal language, weaves melodies and rhythms to stir emotions.
      From foot-tapping beats to soulful ballads, its countless genres offer a
      soundtrack for every feeling.
    </p>
    <div className="mt-6 mb-2 font-bold px-1">
      Here are some of my favorite Songs:
    </div>
    <ol className="list-disc gap-2 px-6 [&>*]:py-1">
      <li>Stairway to Heaven - Led Zeppelin</li>
      <li>She Will Be Loved - Maroon 5</li>
      <li>Wish you were here - Pink Floyd</li>
      <li>Worth Nothing - Twisted</li>
    </ol>
  </div>
);
const philosophy = (
  <div>
    <h4 className="text-3xl font-bold">Philosophy</h4>
    <p className="mt-4">
      Philosophy offers an intellectually stimulating pursuit. It engages the
      mind in critical thinking, challenges assumptions, and requires grappling
      with complex ideas
    </p>
    <div className="mt-6 mb-2 font-bold">
      Here are some of my favorite Quotes:
    </div>
    <ol className="list-disc gap-2 px-6 [&>*]:py-1">
      <li>"The unexamined life is not worth living."-Socrates</li>
      <li>"Treat others as you would like to be treated."-The Golden Rule</li>
      <li>"The unexamined life is not worth living."-Socrates</li>
      <li>"Everything has beauty, but not everyone sees it."-Confucius</li>
    </ol>
  </div>
);
const movies = (
  <div>
    <h4 className="text-3xl font-bold">Movies</h4>
    <p className="mt-4">
      Movies, on a flickering screen, weave tales that captivate our hearts.
      They whisk us away to galaxies far, far away or make us feel the ache of
      reality. From laughter-filled comedies to tear-jerking dramas, they offer
      a window into the human experience, leaving us forever changed.
    </p>
    <div className="mt-6 mb-2 font-bold">
      Here are some of my favorite Movies:
    </div>
    <ol className="list-disc gap-2 px-6 [&>*]:py-1">
      <li>The Pursuit of Happyness - 2006</li>
      <li>The Imitation Game - 2014</li>
      <li>The Foreigner - 2017</li>
      <li>Zodiac - 2007</li>
    </ol>
  </div>
);
const travel = (
  <div>
    <h4 className="text-3xl font-bold">Travel</h4>
    <p className="mt-4">
      The world beckons, and I answer. Travel broadens my horizons, immersing me
      in new cultures and landscapes. From bustling cityscapes to serene
      mountain peaks, every adventure expands my perspective and ignites my
      creativity.
    </p>
    <div className="mt-6 mb-2 font-bold">
      Here are some of my favorite places:
    </div>
    <ol className="list-disc gap-2 px-6 [&>*]:py-1">
      <li>Kuakata Sea Beach</li>
      <li>Sundarbans</li>
      <li>Cox's Bazar Sea Beach</li>
      <li>Puthia Rajbari</li>
    </ol>
  </div>
);

interface ICatagories {
  [key: string]: JSX.Element;
}

const catagories: ICatagories = {
  music,
  books,
  philosophy,
  movies,
  travel,
};

const Interests = () => {
  const [isHovering, setHovering] = useState("books");

  return (
    <motion.div
      className=" relative flex flex-col  overflow-hidden mt-24"
    >

      <motion.span className="md:px-2 underline text-2xl md:text-3xl font-bold text-center">
          Interests
        </motion.span>


      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}} className="flex flex-col md:flex-row border border-[#20242D] rounded-lg overflow-hidden mt-12">
        <div className="flex flex-col justify-between md:max-w-[50%] basis-1/2 bg-[#20242D] text-[#E0D2C7]  px-2 py-8 md:p-16">
          <ul className="[&>*]:my-3 md:[&>*]:p-4 [&>*]:px-6 [&>*]:py-4 [&>*]:rounded-2xl flex flex-wrap md:block justify-center items-center">
            <li
              className="border hover:border-[#E0D2C7] border-[#20242D]  transition"
              onMouseOver={() => setHovering("books")}
            >
              Books
            </li>
            <li
              className="border hover:border-[#E0D2C7] border-[#20242D]  transition"
              onMouseOver={() => setHovering("music")}
            >
              Music
            </li>
            <li
              className="border hover:border-[#E0D2C7] border-[#20242D]  transition"
              onMouseOver={() => setHovering("philosophy")}
            >
              Philosophy
            </li>
            <li
              className="border hover:border-[#E0D2C7] border-[#20242D]  transition"
              onMouseOver={() => setHovering("movies")}
            >
              Movies
            </li>
            <li
              className="border hover:border-[#E0D2C7] border-[#20242D]  transition"
              onMouseOver={() => setHovering("travel")}
            >
              Travel
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center basis-1/2 md:max-w-[50%] mb-4 p-6 md:p-16 py-8 bg-[#E0D2C7]">
          {catagories[isHovering]}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(Interests);
