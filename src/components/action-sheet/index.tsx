import React, { FC } from "react";

type itemList = {
  title: string;
  keyName?: string;
  number: number;
};

interface ItemListProps {
  itemLists: itemList[] | string[];
  keyName?: string;
  callBack: (item, index) => void;
}

const ActionSheet: FC<ItemListProps> = ({ itemLists, keyName, callBack }) => {
  return (
    <>
      {itemLists.map((item, index) => (
        <div key={item} onClick={() => callBack?.(item, index)}>
          <div>{item?.title || item}</div>
        </div>
      ))}
    </>
  );
};

export default ActionSheet;
