import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "19-July-2024",
      status: "pending",
      task: "lassi ko pelna h",
    },
    {
      id: "728ed52f",
      date : "21-July-2024",
      status: "pending",
      task: "nigger ko marna h",
    },
    // ...
  ];
}

export default async function TaskTable() {
  const data = await getData();

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
