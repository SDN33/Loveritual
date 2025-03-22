interface SeparatorProps {
  variant: 'wave' | 'diagonal' | 'curve';
  color: string;
}

export default function Separator({ variant, color }: SeparatorProps) {
  return (
    <div className="separator-container">
      {variant === 'wave' && (
        <svg 
          className="w-full h-24 -mt-1" 
          viewBox="0 0 1440 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 69.3C672 74.7 768 53.3 864 42.7C960 32 1056 32 1152 37.3C1248 42.7 1344 53.3 1392 58.7L1440 64V0H0V96Z" 
            fill={color} 
          />
        </svg>
      )}
      
      {variant === 'diagonal' && (
        <svg 
          className="w-full h-24 -mt-1" 
          viewBox="0 0 1440 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 96L1440 0V96H0Z" 
            fill={color} 
          />
        </svg>
      )}
      
      {variant === 'curve' && (
        <svg 
          className="w-full h-24 -mt-1" 
          viewBox="0 0 1440 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 96C240 32 480 0 720 0C960 0 1200 32 1440 96V96H0V96Z" 
            fill={color} 
          />
        </svg>
      )}
    </div>
  );
}