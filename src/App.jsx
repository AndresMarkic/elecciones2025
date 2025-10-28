import { useEffect, useMemo, useState } from "react";
import sample from "./data/santacruz.sample.json";
import ResultsTable from "./components/ResultsTable";
import LocationSelect from "./components/LocationSelect";
import TotalsPanel from "./components/TotalsPanel"; // <-- NUEVO

export default function App() {
  const [scopes, setScopes] = useState(sample.scopes);
  const [scopeId, setScopeId] = useState(
    sample.scopes.find(s => s.tipo === "provincia")?.id ?? sample.scopes[0]?.id
  );

  useEffect(() => {
    setScopes(sample.scopes);
  }, []);

  const currentScope = useMemo(
    () => scopes.find(s => s.id === scopeId) ?? scopes[0],
    [scopes, scopeId]
  );

  return (
    <div className="container">
      <header>
        <h1>Resultados 2025 — Santa Cruz</h1>
        <p className="muted">Elecciones Legislativas 2025.</p>
      </header>

      <LocationSelect
        scopes={scopes}
        currentId={currentScope?.id}
        onChange={setScopeId}
      />

      {/* PANEL DE TOTALES */}
      <TotalsPanel resumen={currentScope?.resumen} />

      {/* TABLA DE AGRUPACIONES */}
      <ResultsTable scope={currentScope} />

      <footer>
        <small>Fuente: resultados.elecciones.gob.ar / datos oficiales</small>
      </footer>
    </div>
  );
}
