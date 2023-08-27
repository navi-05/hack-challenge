import React from 'react';
import * as Slider from '@radix-ui/react-slider';

interface SliderCompProps {
  title: string,
  desc: string,
  min: number,
  max: number,
  limit?: number,
  setLimit?: (value: number) => void;
  radius?: number,
  setRadius?: (value: number) => void; 
}

const SliderComp: React.FC<SliderCompProps> = ({
  title,
  desc,
  min,
  max,
  limit,
  setLimit,
  radius,
  setRadius
}) => (
  
  <div className='flex flex-col gap-2.5'>
    <div className='flex items-center'>
      <h1 className='font-medium uppercase text-sm '>
        {title} &nbsp;
      </h1>
      <span className='text-sm text-neutral-400'>({desc})</span>
    </div>
    <form>
      <Slider.Root 
        className="relative flex items-center select-none touch-none w-1/2  h-5" 
        defaultValue={[0]} 
        max={max} 
        min={min}
        step={1}
        value={[50, 100]}
        onValueChange={(e) => console.log(e)}
      >
        <Slider.Track className="bg-primary dark:bg-primaryDark relative flex-grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-secondary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb 
          className="block w-5 h-5 bg-secondary shadow-lg rounded-lg focus:outline-none" 
          aria-label="Radius"
        />
      </Slider.Root>
    </form>
  </div>
);

export default SliderComp;