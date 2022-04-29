import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  id: number;
  description: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/clarabrancalhao/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
};
