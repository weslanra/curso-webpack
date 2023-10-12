import WesIcon from "../img/weslan.jpg";

class Image {
  insertImage() {
    const img = document.createElement("img");

    img.src = WesIcon;
    img.width = 200;

    document.querySelector("body").appendChild(img);
  }
}

export default Image;
