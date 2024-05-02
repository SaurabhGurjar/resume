import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

export default function List({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={uuidv4()} text={item} />
      ))}
    </ul>
  );
}
