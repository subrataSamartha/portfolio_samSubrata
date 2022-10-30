import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className={`bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40`}>
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons dark:text-white">
              samSubrata
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://react-icons.github.io/react-icons/search?q=aifilltwitte"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Subrata Samartha
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Front-end Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white opacity-80">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              mollitia incidunt maiores iusto hic voluptas fuga expedita
              dignissimos iste, dolor excepturi consectetur! Totam quibusdam
              harum illum accusantium, iure iste nulla.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 p7-3">
            <AiFillTwitterCircle className="text-gray-600 dark:text-white dark:opacity-80 dark:hover:opacity-100 cursor-pointer" />
            <AiFillLinkedin className="text-gray-600 dark:text-white dark:opacity-80 dark:hover:opacity-100 cursor-pointer" />
            <AiFillYoutube className="text-gray-600 dark:text-white dark:opacity-80 dark:hover:opacity-100 cursor-pointer" />
          </div>
          <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto flex justify-center items-end overflow-hidden md:h-96 md:w-96">
            <img src="./dev-ed-wave.png" alt="" />
          </div>
        </section>
        {/* second page------------------------------------- */}
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-20 dark:text-white">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white dark:opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              <span className="text-teal-500"> veritatis </span>
              ab laudantium architecto ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus ab{" "}
              <span className="text-teal-500"> laudantium </span>
              architecto veritatis ea.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white dark:opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              reiciendis!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-50">
              <img
                src="/design.png"
                alt=""
                srcset=""
                className="h-[100px] w-[100px] mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Desingns
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates sint corrupti.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustratior</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            {/* card-2 */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-50">
              <img
                src="/code.png"
                alt=""
                srcset=""
                className="h-[100px] w-[100px] mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Desingns
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates sint corrupti.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustratior</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            {/*card-3  cosulting */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-50">
              <img
                src="/consulting.png"
                alt=""
                srcset=""
                className="h-[100px] w-[100px] mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Desingns
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates sint corrupti.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustratior</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white dark:opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              <span className="text-teal-500"> veritatis </span>
              ab laudantium architecto ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus ab{" "}
              <span className="text-teal-500"> laudantium </span>
              architecto veritatis ea.
            </p>
          </div>
          <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap gap-2">
            <div className="basis-1/3 flex-1">
              <img
                src="./web1.png"
                alt=""
                srcset=""
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="./web2.png"
                alt=""
                srcset=""
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="./web3.png"
                alt=""
                srcset=""
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="./web4.png"
                alt=""
                srcset=""
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="./web5.png"
                alt=""
                srcset=""
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="./web6.png"
                alt=""
                srcset=""
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
