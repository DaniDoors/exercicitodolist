export function ButoFiltre({ value, onFiltre, filtre }) {
  return (
    <label>
      <input
        type="radio"
        name="filtre"
        value={value}
        onChange={() => onFiltre(value)}
        checked={filtre === value}
      />
      {value}
    </label>
  );
}
