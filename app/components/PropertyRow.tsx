interface Property {
  label: string;
  value: string;
}

interface PropertyRowProps {
  property: Property;
  index: number;
}

export default function PropertyRow({ property, index }: PropertyRowProps) {
  return (
    <div
      className={`flex items-start justify-between gap-4 py-4 ${
        index !== 0 ? "border-t border-[#2e2e2e]" : ""
      }`}
    >
      <span className="text-sm font-medium text-[#a1a1aa]">{property.label}</span>
      <span className="max-w-[60%] text-right text-sm font-semibold text-[#fafafa]">
        {property.value}
      </span>
    </div>
  );
}
