import * as Styled from "./styles";
import { useRef, useEffect } from "react";
import { EntryOrExit } from "../../types/types";

const Exits = ({
  exits,
  setExits,
  exitsTotal,
  setExitsTotal,
}: {
  exits: EntryOrExit[];
  setExits: (exits: EntryOrExit[]) => void;
  exitsTotal: number;
  setExitsTotal: (total: number) => void;
}) => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const total = exits.reduce((acc, exit) => acc + (exit?.value || 0), 0);
    setExitsTotal(total);
  }, [exits]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const description = descriptionRef.current?.value;
    const value = valueRef.current?.value;

    if (description && value) {
      const newExit = {
        description,
        value: parseFloat(value),
      };
      setExits([...exits, newExit]);
      localStorage.setItem("exits", JSON.stringify([...exits, newExit]));
    }

    descriptionRef.current!.value = "";
    valueRef.current!.value = "";
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLFieldSetElement>) => {
      if (event.key === "Enter") {
        handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
      }
    }

  useEffect(() => {
    const storedExits = localStorage.getItem("exits");
    if (storedExits) {
      setExits(JSON.parse(storedExits));
    }
  }, []);

  const handleRemove = (description: string) => {
    setExits(exits.filter((exit) => exit.description !== description));

    localStorage.setItem(
      "exits",
      JSON.stringify(exits.filter((exit) => exit.description !== description))
    );
  };

  return (
    <Styled.Container>
      <Styled.Title>Saídas</Styled.Title>
      <Styled.Table>
        <Styled.Thead>
          <tr>
            <Styled.ThDescription>Descrição</Styled.ThDescription>
            <Styled.ThValue>Valor</Styled.ThValue>
          </tr>
        </Styled.Thead>
      </Styled.Table>
      <div>
        {exits.map((exit) => (
          <Styled.ExitsList key={exit.description}>
            <p>{exit.description}</p>
            <p>
              R${exit.value}{" "}
              <Styled.DeleteButton
                onClick={() => handleRemove(exit.description)}
              />
            </p>
          </Styled.ExitsList>
        ))}
      </div>
      <Styled.ExitsTotalValue>
        {exits.length === 0 ? (
          <p>Não há saídas cadastradas.</p>
        ) : (
          <p>
            Valor Total:{" R$"}
            {exitsTotal.toFixed(2)}
          </p>
        )}
      </Styled.ExitsTotalValue>
      <Styled.Fieldset onKeyUp={handleEnterPress}>
        <input type="text" placeholder="Descrição" ref={descriptionRef} />
        <input type="number" placeholder="Valor" ref={valueRef} />
        <button
          type="button"
          onClick={() =>
            handleSubmit({
              preventDefault: () => {},
            } as React.FormEvent<HTMLFormElement>)
          }
        >
          Adicionar Saída
        </button>
      </Styled.Fieldset>
    </Styled.Container>
  );
};

export default Exits;
