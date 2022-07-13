import React from "react";
import figma from "../assets/figma.svg";
import github from '../assets/github.svg'
import live from '../assets/internet.svg'
import vv from '../assets/mq2.jpg'

const Vrukshavalli = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div class="card w-96 bg-base-100 shadow-xl flex justify-center align-middle">
          <figure class="px-4 pt-4">
            <img
              src={vv}
              alt="cover image"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Vrukshavalli</h2>
            <div class="card-actions">
            <label for="my-modal-3" class="cursor-pointer modal-button">
              <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={figma} />
                  </div>
            </div>
              </label>
              <input type="checkbox" id="my-modal-3" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box relative">
                  <label
                    for="my-modal-3"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 class="text-lg font-bold">
                  No figma files found....
                  </h3>
                </div>
              </div>
              <a href="https://github.com/mayur-argade/Vrukshavalli/tree/master/server">
                <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={github} />
                  </div>
                </div>
              </a>
              <a href="https://youtu.be/R3z4sTpZBtM">
                <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={live} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vrukshavalli;
