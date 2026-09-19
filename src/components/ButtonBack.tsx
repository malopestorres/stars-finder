import Link from "next/link";

type ButtonBackProps = {
  href?: string;
  className?: string;
};

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
