import { Income } from "../../svg/income";

export function Card() {
  return (
    <section className="content-root content-card">
      <div className="card-container">
       <div className="card-content-header">
        <span className="title-card">Entradas</span>
        <Income />
       </div>
       <span className="card-content-value">
       R$ 17.400,00
       </span>
      </div>
      <div className="card-container">
       <div className="card-content-header">
        <span className="title-card">Entradas</span>
        <Income />
       </div>
       <span className="card-content-value">
       R$ 17.400,00
       </span>
      </div>
      <div className="card-container">
       <div className="card-content-header">
        <span className="title-card">Entradas</span>
        <Income />
       </div>
       <span className="card-content-value">
       R$ 17.400,00
       </span>
      </div>
    </section>
  );
}
