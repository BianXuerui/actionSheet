import React from "react";
import ActionSheet from "../components/action-sheet/index.tsx";

const Index = () => {
  return (
    <>
      <ActionSheet
        itemLists={[
          { title: "标题1", keyName: "111", number: 11 },
          { title: "标题2", keyName: "222", number: 22 },
        ]}
        keyName={undefined}
        callBack={(item, index) => console.log(item, index)}
      />
    </>
  );
};

export default Index;
