import type { ReactNode } from "react";

type StatusItemProps = {
  icon?: string;
  dotColor?: string;
  children: ReactNode;
  className?: string;
};

export default function StatusItem({
  icon,
  dotColor,
  children,
  className = "",
}: StatusItemProps) {
  return (
    <span className={`status-item ${className}`.trim()}>
      {dotColor && (
        <span
          className="status-item-dot repo-card-lang-dot"
          style={{ backgroundColor: dotColor }}
          aria-hidden="true"
        />
      )}
      {icon && (
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="status-item-icon"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
