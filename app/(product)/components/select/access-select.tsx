
import { accessTypes } from '@/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface AccessSelectProps {
  setAccess: (value: string) => void;
}

const AccessSelect: React.FC<AccessSelectProps> = ({
  setAccess
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <Select
        onValueChange={(value) => setAccess(value)}
      >
      <p className='text-sm font-medium uppercase dark:text-white'>Access</p>
        <SelectTrigger>
          <SelectValue placeholder='Access type' />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(accessTypes).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default AccessSelect