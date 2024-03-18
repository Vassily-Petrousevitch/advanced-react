import { useState } from "react"


// Interface defining response type for API providing dog image URL
interface DogImageResponse {
    status: string;
    message: string;
}

export const useGetImageURL = () => {
    // State defining image URL
  const [imageUrl, setImageUrl] = useState<string>("");

  // State indicating image URL is being fetched from API
  const [imageUrlLoading, setImageUrlLoading] = useState<boolean>(false);

  // Function to retrieve image URL from from API for selected dog breed
  const getImageUrl = (selectedBreed: string) => {
    setImageUrlLoading(true);
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then((response) => response.json())
      .then((data: DogImageResponse) => {
        console.log(data.message);
        setImageUrlLoading(false);
        setImageUrl(data.message);
      })
      .catch((err) => {
        console.log(err);
        setImageUrlLoading(false);
      });
    };

    return { imageUrl, imageUrlLoading, getImageUrl }
}