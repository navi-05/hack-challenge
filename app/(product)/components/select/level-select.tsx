
import { levelTypes } from '@/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface LevelSelectProps {
  setLevel: (value: string) => void;
}

const LevelSelect: React.FC<LevelSelectProps> = ({
  setLevel
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <Select
        onValueChange={(value) => setLevel(value)}
      >
      <p className='text-sm font-medium uppercase dark:text-white'>Level</p>
        <SelectTrigger>
          <SelectValue placeholder='Level type' />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(levelTypes).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default LevelSelect