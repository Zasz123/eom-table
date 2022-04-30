interface IProps {
  take: number;
  selectableTakes: number[];
  onChangeTake: (value: number) => void;
}

function TableTakeSelect({ take, selectableTakes, onChangeTake }: IProps) {
  return (
    <select
      value={take}
      onChange={({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) =>
        onChangeTake(Number(value))
      }
    >
      {selectableTakes.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default TableTakeSelect;
