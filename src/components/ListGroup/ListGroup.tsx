import { MouseEvent, useState } from "react";
import "./ListGroup.css";

const ListGroup = ({ items, heading, onSelectedItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

interface Props {
  items: string[];
  heading: string;

  // function (item: string) => void
  onSelectedItem: (item: string) => void;
}

export default ListGroup;
