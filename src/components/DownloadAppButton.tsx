import { Download, ArrowRight } from "lucide-react";

interface Props {
  variant?: "light" | "dark";
  size?: "md" | "lg";
  fullWidth?: boolean;
  label?: string;
  className?: string;
}

const APP_URL = "https://app.speakingpro.online";

export function DownloadAppButton({
  size = "md",
  fullWidth = false,
  label = "Download App",
  className = "",
}: Props) {
  const sizeCls =
    size === "lg"
      ? "px-5 py-3.5 text-[13px] sm:px-7 sm:py-4 sm:text-sm"
      : "px-4 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[13px]";

  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-gradient group inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-wide ${sizeCls} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <Download className="h-4 w-4 shrink-0" />
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
