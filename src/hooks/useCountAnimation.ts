import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  threshold?: number;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  threshold = 0.3 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      let startValue = 0;

      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return { count, ref };
};