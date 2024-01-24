import Image from "next/image";
import { GroupBase, OptionProps, components } from "react-select"

export default function CustomOption(
  option: OptionProps<
    { value: string; src: string; label: string; head: string; desc: string },
    false,
    GroupBase<{ value: any; src: string; label: any; head: string; desc: string }>
  >
) {
  return (
    <components.Option {...option}>
      <div className="flex items-center space-x-2 group">
        <Image
          src={`${option.data.src}`}
          alt={option.data.label}
          width={100}
          height={100}
          className="w-12 md:w-40 h-auto mr-2"
        />
        <span>{option.data.label}</span>
      </div>
    </components.Option>
  )
}
