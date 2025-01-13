import { Helmet } from 'react-helmet-async'
import AddPlantForm from '../../../components/Form/AddPlantForm'
import useAuth from '../../../hooks/useAuth'
import { imageUpload } from '../../../API/utils'

const AddPlant = () => {
    const {user} = useAuth()
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.targal;
        const name = form.name.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const image = form.image.files[0]
        const imageUrl = await imageUpload(image)

        // seller info
        const seller = {
            name: user?.name,
            image: user?.photoURL,
            email: user?.email
        }

        // product infot with seller info==
        const plantSeller = {
            name, price, description, quantity, image: imageUrl, seller
        }
    }
  return (
    <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddPlantForm />
    </div>
  )
}

export default AddPlant
