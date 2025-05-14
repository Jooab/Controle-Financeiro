export interface EntryOrExit {
  description: string;
  value: number;
}

export interface EntryExitContextType {
  entries: EntryOrExit[];
  setEntries: (entries: EntryOrExit[]) => void;
  entriesTotal: number;
  setEntriesTotal: (total: number) => void;
  exits: EntryOrExit[];
  setExits: (exits: EntryOrExit[]) => void;
  exitsTotal: number;
  setExitsTotal: (total: number) => void;
  totalBalance: number;
  setTotalBalance: (total: number) => void;
}