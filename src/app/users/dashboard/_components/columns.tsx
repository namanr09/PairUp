"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  date: string;
  status: "pending" | "processing" | "success" | "failed";
  task: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "task",
    header: "Task",
  },
  {
    accessorKey: "date",
    header: "date",
  },
];
