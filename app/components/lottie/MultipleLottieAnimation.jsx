import LottieAnimation from "./LottieAnimation";
import animationData1 from "../lottie/flying-panda.json";
import animationData2 from "../lottie/baby-panda-bg.json";

const MultipleLottieAnimations = () => {
  const animations = [animationData2]; // Add more animations as needed

  return (
    <div className="flex justify-center items-center flex-wrap">
      {animations.map((data, index) => (
        <LottieAnimation key={index} animationData={data} />
      ))}
    </div>
  );
};

export default MultipleLottieAnimations;
