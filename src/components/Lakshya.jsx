import React from "react";
import figma from "../assets/figma.svg";
import github from '../assets/github.svg'
import live from '../assets/internet.svg'
import cover from '../assets/Lakshya.jpg'
const Lakshya = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div class="card w-96 bg-base-100 shadow-xl flex justify-center align-middle">
          <figure class="px-4 pt-4">
            <img
              src={cover}
              alt="cover image"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Lakshya</h2>
            <div class="card-actions">
              <a href="https://www.figma.com/file/CqVCBCYDlB1wP7VDDG8sD3/Untitled?node-id=0%3A1">
                <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={figma} />
                  </div>
                </div>
              </a>
              <a href="https://github.com/mayur-argade/Lakshya">
                <div class="avatar">
                  <div class="w-8 rounded-xl">
                    <img src={github} />
                  </div>
                </div>
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:6882212897175441408?utm_source=linkedin_share&utm_medium=member_desktop_share&utm_content=post">
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

export default Lakshya;
