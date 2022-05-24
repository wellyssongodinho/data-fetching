import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

function App() {

  const {data: repositories} = useFetch<Repository[]>('users/wellyssongodinho/repos');

  return (
    <ul>
      {repositories?.map(repository => {
        return(
          <li key={repository.full_name}>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
