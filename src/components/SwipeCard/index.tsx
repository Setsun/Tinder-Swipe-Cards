import * as React from 'react';
import { useGesture } from 'react-use-gesture';

const MAX_ANGLE = 30;

const containerStyles = {
  borderRadius: '6px',
  overflow: 'hidden',
};

const imgStyles = {
  display: 'block',
  width: '100%',
  height: 'auto'
};

type SwipeCardProps = {
  name: string;
  age: number;
  image: string;
}

const SwipeCard = ({
  name,
  age,
  image,
}: SwipeCardProps) => {
  const ref = React.useRef();

  const [[x, y], setCoordinates] = React.useState([0, 0]);

  const gesture = useGesture({
    onDragStart: ({ local }) => setCoordinates(local),
    onDragEnd: () => setCoordinates([0, 0])
  });

  const multipler = React.useMemo(
    () => {
      const width = ref.current ? ref.current.getBoundingClientRect().width : 0;
      const value = (Math.abs(x) / (width / 1.5));

      return Math.min(Math.max(value, 0), 1)
    },
    [x, ref.current]
  );

  const angle = MAX_ANGLE * multipler;
  const opacity = multipler;

  return (
    <div
      ref={ref}
      {...gesture()}
      style={{
        ...containerStyles,
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg)`
      }}
    >
      <img
        src={image}
        style={imgStyles}
      />

      <h2>
        {`${name}, ${age}`}
      </h2>
    </div>
  );
}

export default SwipeCard;
