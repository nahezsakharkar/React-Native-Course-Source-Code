import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminJpegtran from "imagemin-jpegtran";

const inputPath = "./app/assets"; // Path to your original images
const outputPath = "./app/optimized-assets"; // Path to store the optimized images

const imageminOptions = {
  destination: outputPath,
  plugins: [
    imageminPngquant(), // Plugin for optimizing PNG images
    imageminJpegtran(), // Plugin for optimizing JPEG images
  ],
};

const files = imagemin([`${inputPath}/**/*.{jpg,png}`], imageminOptions)
  .then(() => {
    console.log("Images optimized successfully!");
  })
  .catch((error) => {
    console.error("Error optimizing images:", error);
  });

console.log(files);
