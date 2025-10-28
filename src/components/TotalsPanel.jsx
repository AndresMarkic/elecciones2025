import { fmtInt } from "../utils/format";

export default function TotalsPanel({ resumen }) {
  if (!resumen) return null;
  const { totales1,votaron, mesas, votos } = resumen;

  return (
    <div className="totals-grid card">
      <div className="totals-box">
        <h3>Padron</h3>
        <div className="row">
          <span>Empadronados:</span>
          <strong>{fmtInt(totales1)}</strong>
          <span>Votaron:</span>
          <strong>{fmtInt(votaron)}</strong>
        </div>
      </div>

      <div className="totals-box">
        <h3>Mesas</h3>
        <div className="row">
          <span>Totales:</span>
          <strong>{fmtInt(mesas?.totales ?? 0)}</strong>
        </div>
        <div className="row">
          <span>Escrutadas:</span>
          <strong>{fmtInt(mesas?.escrutadas ?? 0)}</strong>
        </div>
      </div>

      <div className="totals-box">
        <h3>Votos</h3>
        <div className="row"><span>Afirmativos:</span><strong>{fmtInt(votos?.afirmativos ?? 0)}</strong></div>
        <div className="row"><span>Blancos:</span><strong>{fmtInt(votos?.blancos ?? 0)}</strong></div>
        <div className="row"><span>Nulos:</span><strong>{fmtInt(votos?.nulos ?? 0)}</strong></div>
        <div className="row"><span>Recurridos:</span><strong>{fmtInt(votos?.recurridos ?? 0)}</strong></div>
        <div className="row"><span>Impugnados:</span><strong>{fmtInt(votos?.impugnados ?? 0)}</strong></div>
      </div>
    </div>
  );
}
