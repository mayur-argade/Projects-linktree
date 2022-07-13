import React from "react";
import figma from "../assets/figma.svg";
import github from "../assets/github.svg";
import live from "../assets/internet.svg";
import event from "../assets/event.jpg";
const EventTick = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div class="card w-96 bg-base-100 shadow-xl flex justify-center align-middle">
          <figure class="px-4 pt-4">
            <img src={event} alt="cover image" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">EventTick</h2>
            <div class="card-actions">
              <a href="https://www.figma.com/file/HASKdKPlMzi03h3eoDYgJ5/event-manager?node-id=0%3A1">
                <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={figma} />
                  </div>
                </div>
              </a>
              <a href="https://github.com/mayur-argade/Event-management-portal">
                <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={github} />
                  </div>
                </div>
              </a>

              <label for="my-modal-3" class="cursor-pointer modal-button">
              <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={live} />
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
                    Project will be deploy soon.
                  </h3>
                  <p class="py-4">
                  Project is under maintainance... it will be live again.
                  </p>
                </div>
              </div>
              <a href="">
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTick;
