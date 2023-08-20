import x from "../images/x.jpg";
import y from "../images/y.jpg";
import z from "../images/z.jpg";
function Slider() {
  return (
    <>
      <div className="px-6 m-3 ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide px-5 mx-auto text-center"
        >

            <div className="carousel-indicators text-center mb-3 ">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active" 
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <img src={y} className="img-fluid " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={y} className="img-fluid " alt="..." />
              </div>
              <div className="carousel-item ">
                <img src={y} className="img-fluid " alt="..." />
              </div>
              <div className="container px-5 mx-5 ">
                <button
                  className="carousel-control-prev black"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next black"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
