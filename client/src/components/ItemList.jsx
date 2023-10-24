import React from "react";

// interface ItemListProps {
//   items: Item[] |  null
// }

const ItemList = ({ items }) => {
  return (
    <>
      {items?.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.content.title}</h3>
            <a target="_blank" href={item.content.body}>
              {item.content.body}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
