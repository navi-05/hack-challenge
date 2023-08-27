
import { connectorTypes } from '@/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface ConnectorSelectProps {
  setConnector: (value: string) => void;
}

const ConnectorSelect: React.FC<ConnectorSelectProps> = ({
  setConnector
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <Select 
        onValueChange={(value) => setConnector(value)}
      >
      <p className='text-sm font-medium uppercase dark:text-white'>Connector</p>
        <SelectTrigger >
          <SelectValue placeholder='Connector type' className='text-sm sm:text-base' />
        </SelectTrigger>
        <SelectContent >
          {Object.entries(connectorTypes).map(([key, value]) => (
            <SelectItem key={key} value={key} className=''>
              {value}
            </SelectItem>
        ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default ConnectorSelect