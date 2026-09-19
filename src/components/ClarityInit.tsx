"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityInit() {
  useEffect(() => {
    Clarity.init("yktn6voi9e");
  }, []);

  return null;
}
