import * as Slider from '@radix-ui/react-slider';

interface LimitSliderProps {
  limit: number;
  setLimit: (value: number) => void;
}

const LimitSlider: React.FC<LimitSliderProps> = ({
  limit,
  setLimit
}) => {
  return (
    <div className='flex flex-col gap-2.5'>
    <div className='flex items-end'>
      <h1 className='font-medium uppercase text-sm dark:text-white '>
        Limit &nbsp;
      </h1>
      <span className='text-sm text-neutral-400'>(in number)</span>
    </div>
    <form className='flex items-center gap-2.5'>
      <Slider.Root 
        className="relative flex items-center select-none touch-none w-1/2  h-5" 
        defaultValue={[limit]} 
        max={200} 
        min={20}
        step={1}
        value={[limit]}
        onValueChange={(value) => setLimit(value[0])}
      >
        <Slider.Track className="bg-primary dark:bg-primaryDark relative flex-grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-secondary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb 
          className="block w-5 h-5 bg-secondary shadow-lg rounded-lg focus:outline-none" 
          aria-label="Radius"
        />
      </Slider.Root>
      <span className='text-secondary'>{limit}</span>
    </form>
  </div>
  )
}

export default LimitSlider