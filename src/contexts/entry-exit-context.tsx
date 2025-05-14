import { createContext, ReactNode, useState } from "react";
import { EntryOrExit, EntryExitContextType } from "../types/types";

const defaultValue: EntryExitContextType = {
  entries: [],
  setEntries: () => {},
  entriesTotal: 0,
  setEntriesTotal: () => {},
  exits: [],
  setExits: () => {},
  exitsTotal: 0,
  setExitsTotal: () => {},
  totalBalance: 0,
  setTotalBalance: () => {},
};

export const EntryExitContext = createContext<EntryExitContextType>(defaultValue);

export const EntryExitProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<EntryOrExit[]>([]);
  const [entriesTotal, setEntriesTotal] = useState<number>(0);
  const [exits, setExits] = useState<EntryOrExit[]>([]);
  const [exitsTotal, setExitsTotal] = useState<number>(0);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  

  return (
    <EntryExitContext.Provider
      value={{
        entries,
        setEntries,
        entriesTotal,
        setEntriesTotal,
        exits,
        setExits,
        exitsTotal,
        setExitsTotal,
        totalBalance,
        setTotalBalance,
      }}
    >
      {children}
    </EntryExitContext.Provider>
  );
};
