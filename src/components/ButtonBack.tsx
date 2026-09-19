import Link from "next/link";
import type { ButtonBackProps } from "@/types";

export default function ButtonBack({
  href = "/",
  className = "",
}: ButtonBackProps) {
  return (
    <Link href={href} className={`btn-back font-bold ${className}`.trim()}>
      Voltar
    </Link>
  );
}
