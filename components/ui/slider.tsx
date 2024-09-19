import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onValueChange: (value: number[]) => void;
  className?: string;
}

export const Slider = ({ min, max, step, value, onValueChange, className }: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [Number(event.target.value)];
    setSliderValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className={`slider-container ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue[0]}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="value">{sliderValue[0]}</div>
    </div>
  );
};
