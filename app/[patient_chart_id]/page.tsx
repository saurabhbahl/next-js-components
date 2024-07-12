"use client";
import Form from "@/components/Form";
import Notification from "@/components/Notification";
import { useParams } from "next/navigation";
import React from "react";

const Homepage = ({ params }) => {
  let { patient_chart_id } = params;
  patient_chart_id = Number(patient_chart_id);

  return (
    <div>
      {/* <Notification color={"red"} text={"Hii"}/> */}
      <Form params={patient_chart_id} />
    </div>
  );
};

export default Homepage;
