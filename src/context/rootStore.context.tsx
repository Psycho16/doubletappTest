import React, { createContext, ReactNode } from "react"

import RootStore, { rootStore } from "@stores/RootStore"


export const StoreContext = createContext<RootStore | undefined>(undefined)

export function RootStoreProvider({ children }: { children: ReactNode }) {
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
}