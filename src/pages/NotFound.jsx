import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8 text-white'>
            Oops!
          </h1>
          <p className='text-5xl mb-8'>404 - Page not Found!</p>
          <Link to='/' className='btn btn-primary btn-lg bg-green-900 border-orange-300 hover:bg-yellow-400 hover:border-green-900'>
            <FaHome className='mr-2'/>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound