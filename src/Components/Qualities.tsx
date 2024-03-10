import { motion } from "framer-motion";

const Qualities = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 6, duration: 1.5 }}
      className="mt-16 bg-[#E0D2C7]"
    >
      <motion.div className="w-full flex md:justify-center text-medium md:text-2xl">
        <span className="md:px-2 underline text-2xl md:text-3xl font-bold text-center w-full">
          Qualities
        </span>
      </motion.div>

      <div className="xl:flex flex-wrap xl:px-8 md:text-center mt-12">
        <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0  md:px-16 mb-2">
          <span className="text-xl font-bold md:text-3xl mb-2">Empathetic</span>
          <p>
            Connecting with others is deeply important to me. I listen intently,
            not just to what's said, but to the feelings behind the words.
            Understanding different perspectives and experiences comes naturally
            to me, and I approach everyone without judgment. My actions are
            driven by empathy, and I believe in building a sense of community
            wherever I go.
          </p>
        </motion.div>
        <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0  md:px-16 mb-2">
          <span className="text-xl font-bold md:text-3xl mb-2">Non-biased</span>
          <p>
            I don't let biases cloud my judgment. I approach each situation with
            a fresh perspective, free from preconceived notions. I believe in
            analyzing information objectively, considering all sides of the
            story, and making decisions based on reason and evidence. This
            ability to see the world through different lenses allows me to
            collaborate effectively and contribute meaningfully to any team.
          </p>
        </motion.div>
        <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0 md:px-16 mb-2">
          <span className="text-xl font-bold md:text-3xl mb-2">Pragmatic</span>
          <p>
            Here's the thing, I'm a pragmatist. I believe in finding the most
            practical and efficient solutions, whether it's code, design, or
            anything in between. I'm not afraid to get creative, but I also keep
            the project's goals and technical limitations in mind. This way, I
            can create solutions that not only look good and work well but are
            also easy to maintain and scale down the road.
          </p>
        </motion.div>
        <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0 md:px-16 mb-2">
          <span className="text-xl font-bold md:text-3xl mb-2">
            Team player
          </span>
          <p>
            I ignite teams! I bridge the gap between designers, developers, and
            all disciplines, fostering open communication and respect for
            diverse perspectives. This collaborative fire fuels the creation of
            exceptional user experiences, where I translate designer visions
            into captivating interfaces. My clear communication keeps everyone,
            technical and non-technical alike, on the same exciting page.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Qualities;
