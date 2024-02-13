import { useEffect, useState  } from "react"
import axios from 'axios';

const VideoDetails =  () => {
  const [videos, setVideos] = useState([])

   useEffect(() => {
     const fetchData = async () => {
    try {
        const response = await axios.get('https://youtube-backend-nine.vercel.app/api/getVideos')
        console.log("Response: ", response)
        setVideos(response.data.items);      
      }
     catch (error) {
      console.log(error.message)
    }
  }
    fetchData()
  }, [])
  return videos;
}

export default VideoDetails

