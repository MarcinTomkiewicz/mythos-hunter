export const Stat = () => {
  const { title, statAbr } = props;

  const increasePoints = () => {
    if (points.left === 0) return;
    setPoints((oldPoints) => {
      return {
        ...oldPoints,
        [statAbr]: oldPoints[statAbr] + 1,
        left: oldPoints.left - 1,
      };
    });
  };

  const decreasePoints = () => {
    if (points[statAbr] === 0) return;
    setPoints((oldPoints) => {
      return {
        ...oldPoints,
        [statAbr]: oldPoints[statAbr] - 1,
        left: oldPoints.left + 1,
      };
    });
  };

  return (
    <div className="user-stats">
      <div className="user-stats__title">{title}</div>
      <div className="user-stats__right">
        <div className="user-stats__points">{points[statAbr]}</div>
        <button
          type="button"
          className="user-stats__button"
          onClick={increasePoints}
        >
          +
        </button>
        <button
          type="button"
          className="user-stats__button"
          onClick={decreasePoints}
        >
          -
        </button>
      </div>
    </div>
  );
};
