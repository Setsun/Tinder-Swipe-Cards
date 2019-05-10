import * as React from 'react';
import { useGesture } from 'react-use-gesture';

const MAX_ANGLE = 30;

const DescriptionText = ({
  children,
  color,
  style,
}: {
  children: React.ReactNode,
  color: string,
  style: React.CSSProperties,
}) => (
  <h3
    style={{
      ...style,
      color,
      margin: 0,
      position: 'absolute',
      top: '7.5%',
      padding: '12px',
      textTransform: 'uppercase',
      border: `3px solid ${color}`,
      borderRadius: '6px',
    }}
  >
    {children}
  </h3>
)

const SwipeCard = ({
  name,
  age,
  image,
}: {
  name: string;
  age: number;
  image: string;
}) => {
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
        position: 'relative',
        border: '1px solid gray',
        borderRadius: '6px',
        overflow: 'hidden',
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg)`
      }}
    >
      <DescriptionText
        color="green"
        style={{
          left: "7.5%",
          transform: 'rotate(-25deg)',
          opacity,
        }}
      >
        Like
      </DescriptionText>
      <DescriptionText
        color="red"
        style={{
          right: "7.5%",
          transform: 'rotate(25deg)',
          opacity,
        }}
      >
        Nope
      </DescriptionText>

      <img
        src={image}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto'
        }}
      />

      <div
        style={{
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2>
          {`${name}, ${age}`}
        </h2>

        <div>hi</div>
      </div>
    </div>
  );
}

export default SwipeCard;
