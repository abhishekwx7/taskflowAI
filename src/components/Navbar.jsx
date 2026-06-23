import React from "react";
import { motion } from "framer-motion";

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.05,
          }}
          className="text-3xl font-bold"
        >
          TaskFlow <span className="text-cyan-400">AI</span>
        </motion.h1>

        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-8 text-sm text-slate-300 md:flex"
        >
          <motion.a
            variants={navItem}
            whileHover={{
              y: -2,
              color: "#fff",
            }}
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </motion.a>

          <motion.a
            variants={navItem}
            whileHover={{
              y: -2,
              color: "#fff",
            }}
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </motion.a>

          <motion.a
            variants={navItem}
            whileHover={{
              y: -2,
              color: "#fff",
            }}
            href="#testimonials"
            className="transition hover:text-white"
          >
            Testimonials
          </motion.a>
        </motion.nav>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 15,
          }}
          className="group relative overflow-hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 active:translate-y-0"
        >
          <span className="relative z-10">Get Started</span>

          <motion.span
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{
              duration: 0.6,
            }}
            className="absolute inset-0 -translate-x-full bg-white/30 transition duration-500 group-hover:translate-x-full"
          />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
