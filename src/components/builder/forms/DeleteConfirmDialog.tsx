"use client";

import { Modal } from "@/components/ui/Modal";

interface Props {
  open: boolean;
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmDialog({ open, itemName, onConfirm, onCancel }: Props) {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      title="Delete entry"
      size="sm"
      footer={
        <>
          {/* Cancel is focused first — prevents accidental destructive action */}
          <button type="button" className="btn btn-secondary btn-sm" onClick={onCancel} autoFocus>
            Cancel
          </button>
          <button type="button" className="btn btn-destructive btn-sm" onClick={onConfirm}>
            Delete
          </button>
        </>
      }
    >
      <p className="text-body">
        Are you sure you want to delete <strong>{itemName}</strong>? This cannot be undone.
      </p>
    </Modal>
  );
}
