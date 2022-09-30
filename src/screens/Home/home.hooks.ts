import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {IDataResponse} from './home.props';

export const useGetCharacters = (pageNumber: number) =>
  useQuery(['getCharacters'], async () => {
    let data: Promise<IDataResponse>[] = [];
    await axios
      .get(`https://swapi.dev/api/people?page=${pageNumber}`)
      .then((res: {data: {results: IDataResponse[]}}) => {
        return (data = res.data.results.map(async item => {
          let itemData = {
            ...item,
          };
          await axios.get(item.homeworld).then(resHomeworld => {
            itemData.homeworld = resHomeworld.data.name;
          });

          if (item.species.length) {
            await axios.get(item.species[0]).then(resSpecies => {
              itemData.species = resSpecies.data.name;
            });
          } else {
            itemData.species = 'Human';
          }
          const vehicles = item.vehicles.map(
            async vehicle =>
              await axios.get(vehicle).then(resVehicle => resVehicle.data.name),
          );

          itemData.vehicles = await Promise.all(vehicles);

          return itemData;
        }));
      });

    return Promise.all(data).then(res => res);
  });
