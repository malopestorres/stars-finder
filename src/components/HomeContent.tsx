export default function HomeContent() {
  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card home-content-card h-100">
            <div className="card-body">
              <h2 className="card-title h5 font-regular">
                Encontre
                <span className="font-extrabold card-title-highlight mx-1">
                  usuários
                </span>
              </h2>
              <p className="card-text">Pesquise qualquer perfil do GitHub .</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card home-content-card h-100">
            <div className="card-body">
              <h2 className="card-title h5 font-regular">
                Repositórios
                <span className="font-extrabold card-title-highlight mx-1">
                  populares
                </span>
              </h2>
              <p className="card-text">Conteúdo do segundo card.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card home-content-card h-100">
            <div className="card-body">
              <h2 className="card-title h5 font-regular">
                Busca
                <span className="font-extrabold card-title-highlight mx-1">
                  filtrada
                </span>
              </h2>
              <p className="card-text">Conteúdo do terceiro card.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
