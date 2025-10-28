export default function VoteBar({ percent }) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div style={{ background: "#eee", borderRadius: 6, height: 10, width: "100%" }}>
      <div
        style={{
          width: `${p}%`,
          height: "100%",
          borderRadius: 6,
          background: "#2b7cff"
        }}
        aria-label={`Barra ${p.toFixed(2)}%`}
      />
    </div>
  );
}
