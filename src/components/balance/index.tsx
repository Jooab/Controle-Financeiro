import { useContext } from "react";
import { EntryExitContext } from "../../contexts/entry-exit-context";
import * as Styled from "./styles";

const Balance = () => {

    const { entriesTotal, exitsTotal } = useContext(EntryExitContext);

    console.log(entriesTotal, exitsTotal)

    const totalBalance = (entriesTotal - exitsTotal).toFixed(2);

    return (
        <Styled.Div>
            <h1>Saldo : {parseFloat(totalBalance) > 0 && "R$" + totalBalance} </h1>
        </Styled.Div>
    );
}

export default Balance