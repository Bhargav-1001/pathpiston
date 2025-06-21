// import { Bike, Plus } from 'lucide-react';
// import React from 'react'
// import { PrismaClient } from '../generated/prisma';

// export default function Add_Bikes() {

//     // async function saveData(formData: FormData) {
//     //     "use server"
//     //     const myData = {
//     //         // id : String(formData.get("")),   
//     //         model : String(formData.get("model")), 
//     //         specs  : String(formData.get("specs")),
//     //         photo : String(formData.get("photo")), 
//     //         // user  : String(formData.get("")), 
//     //         // userId : Number(formData.get("userId"))
//     //     }

//     //     const prisma = new PrismaClient();
//     //     const data = await prisma.bike.create(
//     //         {
//     //             data:myData
//     //         }
//     //     )
//     // } {

//     async function saveData(formData: FormData) {
//   "use server";

//   const myData = {
//     model: String(formData.get("model")),
//     specs: String(formData.get("specs")),
//     photo: String(formData.get("photo")),
//     userId: Number(formData.get("userId")), // Get userId from the form
//   };

//   const prisma = new PrismaClient();

//   try {
//     // Create a new bike record
//     const data = await prisma.bike.create({
//       data: {
//         model: myData.model,
//         specs: myData.specs,
//         photo: myData.photo,
//         user: {
//           connect: {
//             id: myData.userId, // Use the userId to associate with an existing user
//           },
//         },
//       },
//     });

//     console.log("Bike added successfully:", data);
//   } catch (error) {
//     console.error("Error adding bike:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
// {

//     }

//     return (
//         <div className="fade-in">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h1 className="h2 fw-bold">
//                     <Plus className="text-accent me-3" size={32} />
//                     Add New Bike
//                 </h1>
//             </div>

//             <form className="card p-4 border-custom"  action={saveData}>
//                 <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Model *</label>
//                         <input
//                             type="text"
//                             name="model"
//                             // value={Bike.model}
//                             // onChange={handleInputChange}
//                             className="form-control form-control-custom"
//                             placeholder="e.g., Royal Enfield Himalayan"
//                             required
//                         />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Specifications</label>
//                         <input
//                             type="text"
//                             name="specs"
//                             // value={bike.specs}
//                             // onChange={handleInputChange}
//                             className="form-control form-control-custom"
//                             placeholder="e.g., 411cc, 6-speed, 24.3 HP"
//                         />
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Photo URL</label>
//                         <input
//                             type="text"
//                             name="photo"
//                             // value={bike.photo}
//                             // onChange={handleInputChange}
//                             className="form-control form-control-custom"
//                             placeholder="e.g., https://example.com/photo.jpg"
//                         />
//                     </div>
//                     {/* <div className="col-md-6 mb-3">
//                         <label className="form-label">User ID *</label>
//                         <input
//                             type="number"
//                             name="userId"
//                             // value={bike.userId}
//                             // onChange={handleInputChange}
//                             className="form-control form-control-custom"
//                             placeholder="e.g., 1"
//                             required
//                         />
//                     </div> */}
//                 </div>

//                 <div className="d-flex justify-content-end mt-4">
//                     <button type="submit" className="btn btn-accent">
//                         <Plus size={16} className="me-2" />
//                         Add Bike
//                     </button>
//                 </div>
//             </form>

//             {/* <style jsx>{`
//         .border-custom {
//           border: 2px solid var(--accent-red);
//         }
//         .form-control-custom {
//           border: 1px solid var(--border-color);
//           padding: 10px;
//           border-radius: 8px;
//         }
//         .btn-accent {
//           background-color: var(--accent-red);
//           color: #fff;
//         }
//         .btn-accent:hover {
//           background-color: #d72638;
//         }
//       `}</style> */}
//         </div>
//     );
// }




import { Plus } from "lucide-react";
import React from "react";
import { PrismaClient } from "../generated/prisma";
import { redirect } from "next/navigation";


export const saveData = async (formData: FormData) => {
  "use server";

  const myData = {
    model: String(formData.get("model")),
    specs: String(formData.get("specs")),
    photo: String(formData.get("photo")),
    userId: Number(formData.get("userId")), // Ensure this value is available in the form
  };

  const prisma = new PrismaClient();

  try {
    // Create a new bike record
    const data = await prisma.bike.create({
      data: {
        model: myData.model,
        specs: myData.specs,
        photo: myData.photo,
        user: {
          connect: {
            id: myData.userId, // Use the userId to associate with an existing user
          },
        },
      },
    });
    
    console.log("Bike added successfully:", data);
  } catch (error) {
    console.error("Error adding bike:", error);
  } finally {
    await prisma.$disconnect();
  }
  
  redirect("/bikes");
};

export default function AddBikes() {
  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold">
          <Plus className="text-accent me-3" size={32} />
          Add New Bike
        </h1>
      </div>

      <form action={saveData} method="POST" className="card p-4 border-custom">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Model *</label>
            <input
              type="text"
              name="model"
              className="form-control form-control-custom"
              placeholder="e.g., Royal Enfield Himalayan"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Specifications</label>
            <input
              type="text"
              name="specs"
              className="form-control form-control-custom"
              placeholder="e.g., 411cc, 6-speed, 24.3 HP"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="form-control form-control-custom"
              placeholder="e.g., https://example.com/photo.jpg"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">User ID *</label>
            <input
              type="number"
              name="userId"
              className="form-control form-control-custom"
              placeholder="e.g., 1"
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-accent">
            {/* <Plus size={16} className="me-2" /> */}
            Submit
          </button>
        </div>
      </form>

   
    </div>
  );
}




