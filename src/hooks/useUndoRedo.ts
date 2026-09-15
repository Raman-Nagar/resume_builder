"use client";

import { useCallback, useReducer } from "react";
import type { Resume } from "@/lib/resume/types";
import { resumeReducer, type ResumeAction } from "@/store/resumeReducer";

interface HistoryState {
  past: Resume[];
  present: Resume;
  future: Resume[];
}

type HistoryAction =
  | { type: "DISPATCH"; action: ResumeAction }
  | { type: "UNDO" }
  | { type: "REDO" };

const MAX_HISTORY = 50;

function historyReducer(state: HistoryState, event: HistoryAction): HistoryState {
  switch (event.type) {
    case "DISPATCH": {
      const next = resumeReducer(state.present, event.action);
      if (next === state.present) return state;
      // RESET_RESUME replaces the entire resume (e.g. load sample) — clear history
      if (event.action.type === "RESET_RESUME") {
        return { past: [], present: next, future: [] };
      }
      return {
        past: [...state.past, state.present].slice(-MAX_HISTORY),
        present: next,
        future: [],
      };
    }
    case "UNDO": {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      return {
        past: state.past.slice(0, -1),
        present: previous,
        future: [state.present, ...state.future],
      };
    }
    case "REDO": {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      return {
        past: [...state.past, state.present],
        present: next,
        future: state.future.slice(1),
      };
    }
  }
}

export function useUndoRedo(initialResume: Resume) {
  const [state, dispatch] = useReducer(historyReducer, {
    past: [],
    present: initialResume,
    future: [],
  });

  const dispatchResume = useCallback(
    (action: ResumeAction) => dispatch({ type: "DISPATCH", action }),
    []
  );
  const undo = useCallback(() => dispatch({ type: "UNDO" }), []);
  const redo = useCallback(() => dispatch({ type: "REDO" }), []);

  return {
    resume: state.present,
    dispatch: dispatchResume,
    undo,
    redo,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0,
  };
}
