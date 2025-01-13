import { Helmet } from 'react-helmet-async'
import AddPlantForm from '../../../components/Form/AddPlantForm'
import useAuth from '../../../hooks/useAuth'
import { imageUpload } from '../../../API/utils'
import { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'

const AddPlant = () => {
    const {user} = useAuth()
    const [uploadImagePreview, setUploadImagePreview] = useState({image: {name: 'upload button'}})

    const [loading , setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()



    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const image = form.image.files[0]
        const imageUrl = await imageUpload(image)

        // seller info
        const seller = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        // product infot with seller info==
        const plantData = {
            name, price, description, quantity, image: imageUrl, seller
        }
        console.log(plantData)

        try{
            axiosSecure.post('/plants', plantData)
            toast.success('data added successfully')

        }catch(error){
            console.log(error.message)

        }finally{
            setLoading(false)
        }
    }
  return (
    <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddPlantForm handleSubmit={handleSubmit} uploadImagePreview={uploadImagePreview} setUploadImagePreview={setUploadImagePreview} 
      loading={loading}/>
    </div>
  )
}

export default AddPlant
