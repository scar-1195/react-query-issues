import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';
import { sleep } from '../../helpers/sleep';

export const useLables = () => {
  const getLabels = async (): Promise<Label[]> => {
    await sleep(2);
    const { data } = await githubApi.get<Label[]>('/labels');
    return data;
  };

  const labelsQuery = useQuery(
    ['labels'],
     getLabels,
     {
      //* Con staleTime le estoy diciendo que la data que trae estara fresca por determinado tiempo
      staleTime: 1000 * 60 * 60
     }
    );
  return labelsQuery;
};
