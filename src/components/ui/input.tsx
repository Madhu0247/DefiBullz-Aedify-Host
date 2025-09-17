// src/components/ui/input.tsx
"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add a custom property, for example, a label
  label?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  const baseStyles =
    "border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500";
  return (
    <input
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
}