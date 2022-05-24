import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Repository } from "./Repos";

export function Repo() {
    const params = useParams();
    const currentRepository = params['*'];

    const queryClient = useQueryClient();

    async function handleChangeRepositoryDescription() {
        //chamada API para atualizar a descrição do repositório

        const previousRepos = queryClient.getQueryData<Repository[]>('repos');

        if (previousRepos) {
            const nextRepos = previousRepos.map(repository => {
                if (repository.full_name === currentRepository) {
                    return {...repository, description: 'Testando'};
                } else {
                    repository;
                }
            })
            queryClient.setQueryData('repos', nextRepos); //atualiza repositório no cache sem novo fetch
        }


//        await queryClient.invalidateQueries(['repos']); //to force revalidation
    }
  return (
    <div>
        <h1>{currentRepository}</h1>
        <button onClick={handleChangeRepositoryDescription}>Altera descrição</button>
    </div>
  )
}
