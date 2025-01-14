import { Link } from 'react-router-dom'

const Card = ({plant}) => {
    const {name, description, price, quantity, image, _id} = plant || {};  //if any data of this object msssing then it should not any error
  return (
    <Link
      to={`/plant/${_id}`}
      className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={image}
            alt='Plant Image'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          >{name}</div>
        </div>
        <div className='font-semibold text-lg'>{description}</div>
        <div className='font-semibold text-lg'>Category: Indoor</div>
        <div className='font-semibold text-lg'>Quantity: {quantity}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'> Price: {price}$</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
