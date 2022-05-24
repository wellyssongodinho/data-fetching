//import { useFetch } from './hooks/useFetch';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async() => {
    const response = await axios.get('https://api.github.com/users/wellyssongodinho/repos');

    return response.data;
  },
    {
        staleTime: 1000*60 // 1 minute (SWR -> STALE WHILE REVALIDATE)
    //   refetchOnWindowFocus: false,
    }
  )
//  const {data: repositories} = useFetch<Repository[]>('users/wellyssongodinho/repos');

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map(repository => {
        return(
          <li key={repository.full_name}>
              <Link to={`repos/${repository.full_name}`}>
                {repository.full_name}
            </Link>
            <p>{repository.description}</p>
          </li>
        )
      })}
    </ul>
  )
}