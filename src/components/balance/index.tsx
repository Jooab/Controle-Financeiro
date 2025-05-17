import { useContext } from "react";
import { EntryExitContext } from "../../contexts/entry-exit-context";
import * as Styled from "./styles";

const Balance = () => {

    const { entriesTotal, exitsTotal } = useContext(EntryExitContext);

    const totalBalance = (entriesTotal - exitsTotal).toFixed(2);

    const totalBalanceNumber = parseFloat(totalBalance);

    return (
        <Styled.Div>
            <h1>Saldo : R$ {totalBalanceNumber} </h1>
        </Styled.Div>
    );
}

export default Balance