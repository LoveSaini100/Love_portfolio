import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-900 text-center text-gray-500 text-xs">
      © {new Date().getFullYear()} Love Saini. All rights reserved.
    </footer>
  );
}
