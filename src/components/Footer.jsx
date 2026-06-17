const Footer = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">
              TaskFlow<span className="text-cyan-400">AI</span>
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              AI-powered productivity for modern teams. Plan projects, automate
              workflows, and move from ideas to execution faster.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                In
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                GH
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="#features" className="transition hover:text-cyan-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-cyan-300">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition hover:text-cyan-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 TaskFlow AI. All rights reserved.</p>

          <p>
            Built with <span className="text-cyan-400">React</span> +{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
