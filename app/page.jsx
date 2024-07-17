import Carousel from "./components/Carousel";
import Category from "./components/Category";
import MultipleLottieAnimations from "./components/lottie/MultipleLottieAnimation";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <MultipleLottieAnimations />
        <Carousel />
        <Category />
      </div>
    </main>
  );
}
