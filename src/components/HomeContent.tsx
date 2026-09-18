import HomeContentCard from "./HomeContentCard";

export default function HomeContent() {
  return (
    <section className="container py-5">
      <div className="row gx-4 gy-4 gy-md-4">
        <div className="col-12 col-md-4">
          <HomeContentCard>
            <h2 className="card-title h5 font-regular">
              Encontre
              <span className="font-extrabold card-title-highlight mx-1">
                usuários
              </span>
            </h2>
            <p className="card-text">Pesquise qualquer perfil do GitHub</p>
          </HomeContentCard>
        </div>
        <div className="col-12 col-md-4">
          <HomeContentCard>
            <h2 className="card-title h5 font-regular">
              Repositórios
              <span className="font-extrabold card-title-highlight mx-1">
                populares
              </span>
            </h2>
            <p className="card-text">
              Encontre repositórios populares de usuários
            </p>
          </HomeContentCard>
        </div>
        <div className="col-12 col-md-4">
          <HomeContentCard>
            <h2 className="card-title h5 font-regular">
              Busca
              <span className="font-extrabold card-title-highlight mx-1">
                filtrada
              </span>
            </h2>
            <p className="card-text">
              Ordene os projetos por número de estrelas.
            </p>
          </HomeContentCard>
        </div>
      </div>
    </section>
  );
}
