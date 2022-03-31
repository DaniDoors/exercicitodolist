import { ButoFiltre } from "./ButoFiltre";

export function ButonsFiltre({ onFiltre, filtre }) {
  return (
    <div>
      <ButoFiltre value="All" onFiltre={onFiltre} filtre={filtre} />
      <ButoFiltre value="Done" onFiltre={onFiltre} filtre={filtre} />
      <ButoFiltre value="Pending" onFiltre={onFiltre} filtre={filtre} />
    </div>
  );
}
