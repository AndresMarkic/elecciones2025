export default function LocationSelect({ scopes, currentId, onChange }) {
  // Primero "Toda la provincia", luego localidades por nombre
  const provincia = scopes.find(s => s.tipo === "provincia");
  const localidades = scopes.filter(s => s.tipo === "localidad")
                            .sort((a,b)=> a.nombre.localeCompare(b.nombre));

  return (
    <div className="selector">
      <label htmlFor="scope">Ver resultados de</label>
      <select
        id="scope"
        value={currentId}
        onChange={(e) => onChange(e.target.value)}
      >
        {provincia && (
          <option value={provincia.id}>Toda la provincia de Santa Cruz</option>
        )}
        {localidades.map(loc => (
          <option key={loc.id} value={loc.id}>{loc.nombre}</option>
        ))}
      </select>
    </div>
  );
}
