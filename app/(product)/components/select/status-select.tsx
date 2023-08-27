
import { statusTypes } from '@/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface StatusSelectProps {
  setStatus: (value: string) => void;
}

const StatusSelect: React.FC<StatusSelectProps> = ({
  setStatus
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <Select
        onValueChange={(value) => setStatus(value)}
      >
      <p className='text-sm font-medium uppercase dark:text-white'>Status</p>
        <SelectTrigger>
          <SelectValue placeholder='Status'  />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(statusTypes).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default StatusSelect