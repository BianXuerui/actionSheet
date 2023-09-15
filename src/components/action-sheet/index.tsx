import React, { FC } from "react";

type itemList = {
  title: string;
  keyName?: string;
  number: number;
};

interface ItemListProps {
  itemLists: itemList[] | string[];
  keyName?: string;
  callBack: (item: itemList | string, index: number) => void;
}

const ActionSheet: FC<ItemListProps> = ({ itemLists, keyName, callBack }) => {
  return (
    <>
      {itemLists.map((item, index) => (
        <div key={index} onClick={() => callBack?.(item, index)}>
          <div>{typeof item === "object" ? item.title : item}</div>
        </div>
      ))}
    </>
  );
};

export default ActionSheet;
