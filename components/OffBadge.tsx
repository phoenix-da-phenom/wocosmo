import { offBadgeProps } from "@/utils/AppType";


export default function OffBadge({text, color}:offBadgeProps) {
  return (
    <div className={`${color==="red"? 'bg-[#FF3333]': 'bg-green-400'} p-4  text-white rounded-full w-[72px] h-[34px] flex justify-center items-center`}>{text}</div>
  )
}
