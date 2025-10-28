import { fmtInt, pct, calcTotal } from "../utils/format";
import VoteBar from "./VoteBar";

export default function ResultsTable({ scope }) {
  if (!scope) return null;
  const total = calcTotal(scope.agrupaciones);

  return (
    <div className="card">
      <h2>Resultados por agrupaciones políticas</h2>
      <p className="muted">
        Ámbito: <strong>{scope.nombre}</strong> 
      </p>

      <div className="table">
        <div className="thead">
          <div>Agrupación política</div>
          <div className="right">Votos</div>
          <div className="right">Porcentaje</div>
          <div>Barra de votos (%)</div>
        </div>

        {scope.agrupaciones
          .slice()
          .sort((a, b) => b.votos - a.votos)
          .map((a) => {
            const p = pct(a.votos, total);
            return (
              <div key={a.id} className="trow">
                <div>{a.nombre}</div>
                <div className="right">{fmtInt(a.votos)}</div>
                <div className="right">{p.toFixed(2)}%</div>
                <div><VoteBar percent={p} /></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
