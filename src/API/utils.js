import axios from "axios";

export const imageUpload = async imageData => {
    const formData = new FormData;
    formData.append('image', imageData)

    const {data} = axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData
    )
    return data.data.url
}