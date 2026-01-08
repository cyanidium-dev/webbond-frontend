import * as motion from "motion/react-client";

import { CaseWithLanguage } from "@/types/case";
import { Variants } from "framer-motion";

const CaseServices = ({
  services,
}: {
  services: CaseWithLanguage["services"];
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="relative px-5 sm:px-10">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-20 md:gap-[126px]"
      >
        {services?.map((service, i) => (
          <motion.li
            key={i}
            className="list-none flex flex-col justify-between items-start relative"
          >
            <div className="flex flex-col gap-4 md:flex-row justify-between items-start w-full relative">
              <motion.h2
                variants={itemVariants}
                className="font-manrope text-2xl lg:text-[40px] font-light uppercase text-white leading-[108%]"
              >
                {service?.title}
              </motion.h2>
              <motion.ul
                variants={itemVariants}
                className="flex flex-col gap-2 list-none md:max-w-[350px] items-start"
              >
                {service.description?.map((item, idx) => (
                  <li key={idx} className="relative pl-[15px]">
                    <span className="absolute left-0 top-[7px] w-0.5 h-0.5 rounded-full bg-white" />
                    <p className="text-[12px] leading-[108%] lg:text-base font-light font-montserrat text-white">
                      {item.text}
                    </p>
                  </li>
                ))}
              </motion.ul>
            </div>

            {i !== services.length - 1 && (
              <div className="absolute bottom-[-40px] md:bottom-[-60px] h-[0.8px] w-full bg-[#565656]">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-4 rounded-full bg-[#565656]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-4 rounded-full bg-[#565656]" />
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CaseServices;
