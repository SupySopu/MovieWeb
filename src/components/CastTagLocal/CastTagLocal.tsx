export default function CastTagLocal({ id, name }: { id: number; name: string }) {
  return (
    <span className="cast-tag">
      {name}
    </span>
  );
}