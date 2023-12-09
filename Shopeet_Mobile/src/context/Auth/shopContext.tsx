import React, { createContext, useState } from "react";

export const ShopContext = createContext<any>(null);

export const ShopContextProvider = (props: any) => {
  const [selectedCollection, setSelectedCollection] =
    useState<string>("Products");

  //get the selected collection from the collection modal
  const getSelectedCollection = (itemName: string) => {
    setSelectedCollection(itemName);
    console.log(selectedCollection);
  };

  const contextValue = {
    selectedCollection,
    getSelectedCollection,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
