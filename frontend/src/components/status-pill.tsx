type StatusPillProps = {
  label: string;
  tone?: "default" | "success" | "warning";
};

const toneMap = {
  default: "border-white/10 bg-white/5 text-slate-200",
  success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  warning: "border-amber-300/20 bg-amber-300/10 text-amber-100",
};

export function StatusPill({ label, tone = "default" }: StatusPillProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneMap[tone]}`}>
      {label}
    </span>
  );
}
