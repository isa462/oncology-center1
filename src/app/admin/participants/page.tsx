"use client";

import { useEffect, useState } from "react";
import { getParticipants, deleteParticipant } from "@/api/participants";
import Table from "../components/Table";
import Pagination from "../components/Paginat";
import DeleteModal from "../components/DeleteModal";

export default function ParticipantsPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(1);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    load();
  }, [page]);

  const load = async () => {
    const res = await getParticipants(page);
    setData(res.items);
    setTotal(res.totalPages);
  };

  return (
    <>
      <h1>Участники</h1>

      <Table
        columns={["name", "email", "company", "phone"]}
        data={data}
        actions={{ onDelete: (id: string) => setDeleteId(id) }}
      />

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />

      <DeleteModal
        visible={deleteId !== ""}
        onClose={() => setDeleteId("")}
        onConfirm={async () => {
          await deleteParticipant(deleteId);
          setDeleteId("");
          load();
        }}
      />
    </>
  );
}
