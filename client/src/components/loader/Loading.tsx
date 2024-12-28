import { Loader } from 'lucide-react'


const Loading = () => {
  return (
    <main className='w-[90%]  h-[60vh] mx-auto flex items-center justify-center ' >
       <Loader className="text-xl ml-2 animate-spin" />
    </main>
  )
}

export default Loading