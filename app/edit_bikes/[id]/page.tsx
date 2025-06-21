

import { Plus } from "lucide-react";
import React from "react";
import { PrismaClient } from "../../generated/prisma";
import { redirect } from "next/navigation";

export default async function EditBike({ params }: { params: { id: number } }) {
  const { id } =  await params;
  const prisma = new PrismaClient();

  const data = await prisma.bike.findUnique({
    where: { id: Number(id) },
  });

  async function UpdateBike(formData: FormData) {
    "use server";
      const prisma = new PrismaClient();
 
    const UpdateBike=  await prisma.bike.update({
      where: { id: Number(id) },
      data: {
        model: formData.get("model")?.toString() || "",
        specs: formData.get("specs")?.toString() || "",
        photo: formData.get("photo")?.toString() || "",
        userId: Number(formData.get("userId")),
      },
    });
    // Redirect after form submission
    redirect("/bikes");
  }

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold">
          <Plus className="text-accent me-3" size={32} />
          Edit Bike
        </h1>
      </div>

      <form action={UpdateBike} className="card p-4 border-custom">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Model *</label>
            <input
              type="text"
              name="model"
              defaultValue={data?.model || ""}
              className="form-control form-control-custom"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Specifications</label>
            <input
              type="text"
              name="specs"
              defaultValue={data?.specs || ""}
              className="form-control form-control-custom"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={data?.photo || ""}
              className="form-control form-control-custom"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">User ID *</label>
            <input
              type="number"
              name="userId"
              defaultValue={data?.userId || ""}
              className="form-control form-control-custom"
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-accent">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
