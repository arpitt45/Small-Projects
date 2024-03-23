import React from "react";
import { TERipple } from "tw-elements-react";
const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white w-full  ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-yellow-200">&lt;</span>
          Key<span className="text-yellow-200">Fortress/ &gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" target="_blank" href="https://arpitt45.github.io/Portfolio/">
        <TERipple>
        </TERipple>
          <button
            type="button"
            className="inline-block rounded border-2 border-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10 hover:text-yellow-500 focus:border-white focus:text-white focus:outline-none focus:ring-0 active:border-white active:text-white dark:border-white dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-40 dark:hover:text-white dark:focus:border-white dark:focus:text-white dark:active:border-white dark:active:text-white"
            > PORTFOLIO
            </button>



            </a>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
