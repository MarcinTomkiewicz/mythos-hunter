import Loader from "react-loader-spinner";

export const useLoader = (size: number) => {
  return <Loader type="BallTriangle" color="#00BFFF" height={size} width={size} />;
};
