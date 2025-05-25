import React from "react";
import * as Styled from "./styles";
import { useRef, useEffect } from "react";
import { EntryOrExit } from "../../types/types";

const Entries = ({
  entries,
  setEntries,
  entriesTotal,
  setEntriesTotal,
}: {
  entries: EntryOrExit[];
  setEntries: (entries: EntryOrExit[]) => void;
  entriesTotal: number;
  setEntriesTotal: (entriesTotal: number) => void;
}) => {

  const descriptionRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const total = entries!.reduce((acc, entry) => acc + (entry?.value || 0), 0);
    setEntriesTotal(total);
  }, [entries]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const description = descriptionRef.current?.value;
    const value = valueRef.current?.value;

    if (description && value) {
      const newEntry = {
        description,
        value: parseFloat(value),
      };
      setEntries([...(entries), newEntry]);
      localStorage.setItem("entries", JSON.stringify([...entries, newEntry]));
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
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleRemove = (description: string) => {

    setEntries(entries!.filter((entry) => entry.description !== description));

    localStorage.setItem(
      "entries",
      JSON.stringify(entries!.filter((entry) => entry.description !== description))
    );
  };

  return (
    <Styled.Container>
      <Styled.Title>Entradas</Styled.Title>
      <Styled.Table>
        <Styled.Thead>
          <tr>
            <Styled.ThDescription>Descrição</Styled.ThDescription>
            <Styled.ThValue>Valor</Styled.ThValue>
          </tr>
        </Styled.Thead>
      </Styled.Table>
      <div>
        {entries!.map((entry) => (
          <Styled.EntriesList key={entry.description}>
            <p>{entry.description}</p>
            <p>
              R${entry.value}{" "}
              <Styled.DeleteButton
                onClick={() => handleRemove(entry.description)}
              />
            </p>
          </Styled.EntriesList>
        ))}
      </div>
      <Styled.EntriesTotalValue>
        {entries!.length === 0 ? (
          <p>Não há entradas cadastradas.</p>
        ) : (
          <p>
            Valor Total:{" R$"}
            {entriesTotal.toFixed(2)}
          </p>
        )}
      </Styled.EntriesTotalValue>
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
          Adicionar Entrada
        </button>
      </Styled.Fieldset>
    </Styled.Container>
  );
};

export default Entries;
