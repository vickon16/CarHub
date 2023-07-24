import {GiCarWheel} from "react-icons/gi"

const Loading = async () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-center'>
      <GiCarWheel size={50} className="fill-blue-600 animate-spin" />
    </div>
  )
}

export default Loading
