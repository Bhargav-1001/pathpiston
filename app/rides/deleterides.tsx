"use client"

import { redirect } from "next/navigation";

export default function DeleteRides({ id, fnToDelete }: { id: any, fnToDelete: any }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fnToDelete(id);
    }
  };

  return (
    <button 
      className="btn btn-outline-danger btn-sm" 
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}