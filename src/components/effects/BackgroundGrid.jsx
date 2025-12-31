import { useMousePosition } from '../../hooks/useMousePosition';
import './BackgroundGrid.css';

export const BackgroundGrid = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="background-grid">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${x * 0.02} ${y * 0.02})`}
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(0, 212, 255, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="grid-gradient">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <circle
          cx={x}
          cy={y}
          r="200"
          fill="url(#grid-gradient)"
          style={{ transition: 'cx 0.3s, cy 0.3s' }}
        />
      </svg>
    </div>
  );
};
