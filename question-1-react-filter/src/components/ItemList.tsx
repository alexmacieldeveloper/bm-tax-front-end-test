import type { Item } from "../types/Item";

interface Props {
  items: Item[];
}

export function ItemList({ items }: Props) {
  if (items.length === 0) {
    return <p>Nenhum resultado encontrado.</p>;
  }

  return (
    <ul aria-live="polite">
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}