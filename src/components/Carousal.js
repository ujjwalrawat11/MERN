import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?burger" class="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."  />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?pastry" class="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."  />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?barbeque" class="d-block w-100"style={{filter: "brightness(30%)"}} alt="..."  />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
