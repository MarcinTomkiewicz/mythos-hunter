import { FunctionComponent } from "react";
import Loader from "react-loader-spinner";

interface BallTriangleLoaderProps {
  size: number;
}

const BallTriangleLoader: FunctionComponent<BallTriangleLoaderProps> = ({
  size,
}) => {
  return (
    <Loader type="BallTriangle" color="#00BFFF" height={size} width={size} />
  );
};

export default BallTriangleLoader;
