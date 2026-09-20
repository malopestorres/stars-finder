"use client";

import { useEffect, useRef, useState } from "react";
import { EVENT_MOUSEDOWN, OPTIONS } from "@/constants";
import type { SortDropdownProps, SortOptions } from "@/types";



export default function SortDropdown({
  sortBy,
  onSelect,
}: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const options = OPTIONS as SortOptions;
  const selectedLabel = options.find((o) => o.value === sortBy)?.label ?? "Ordenar por";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) 
      document.addEventListener(EVENT_MOUSEDOWN, handleClickOutside);
    
    return () => {
      document.removeEventListener(EVENT_MOUSEDOWN, handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="repo-sort" ref={containerRef}>
      <button
        type="button"
        className="repo-sort-trigger font-semibold"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="repo-sort-trigger-text">
          <span className="font-semibold">Ordenar por</span>{" "}
          <span className="repo-sort-value font-extralight">{selectedLabel}</span>
        </span>
        <img
          src="/images/icon-select.png"
          alt=""
          aria-hidden="true"
          className={`repo-sort-icon ${isOpen ? "open" : ""}`}
          width={14}
          height={8}
        />
      </button>

      {isOpen && (
        <ul className="repo-sort-menu" role="listbox">
          {options.map((option) => {
            const isSelected = sortBy === option.value;

            return (
              <li key={option.label} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`repo-sort-option font-extralight ${
                    isSelected ? "active" : ""
                  }`}
                  onClick={() => {
                    onSelect(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
