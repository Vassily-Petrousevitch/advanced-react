import {useState} from "react"

// Interface defining response type for API listing dog breeds
interface DogsListResponse {
    status: string;
    message: {
        [key: string]: string[];
    };
}

export const useGetDogBreeds = () => {
    // State defining list of dog breeds
  const [breedsList, setBreedsList] = useState<string[]>([]);

  const [toast, useToastContext] = useToastContext();

  // Function fetching dog breed list, transforming response into a format
  // we can work with
  const getBreedsList = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data: DogsListResponse) => {
        const dogs = data.message;
        const breeds: string[] = [];
        Object.keys(dogs).forEach((dog) => {
          if (dogs[dog].length === 0) {
            breeds.push(dog);
          } else {
            dogs[dog].forEach((subDog) => {
              breeds.push(`${subDog} ${dog}`);
            });
          }
        });
        toast("Sucessfully retrieved data");
        setBreedsList([" ", ...breeds]);
      });
  };

  return { breedsList, getBreedsList };
}