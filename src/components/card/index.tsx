import * as Styled from "./styles";
import Entries from "../entries";
import Exits from "../exits";
import Balance from "../balance";
import { useContext } from "react";
import { EntryExitContext } from "../../contexts/entry-exit-context";

const Card = () => {
  const {
    entries,
    setEntries,
    entriesTotal,
    setEntriesTotal,
    exits,
    setExits,
    exitsTotal,
    setExitsTotal,
  } = useContext(EntryExitContext);

  return (
    <Styled.Card>
      <Entries
        entries={entries}
        setEntries={setEntries}
        entriesTotal={entriesTotal}
        setEntriesTotal={setEntriesTotal}
      />
      <Exits 
        exits={exits}
        setExits={setExits}
        exitsTotal={exitsTotal}
        setExitsTotal={setExitsTotal}
      />
      <Balance />
    </Styled.Card>
  );
};

export default Card;
