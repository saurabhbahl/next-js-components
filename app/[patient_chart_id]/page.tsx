"use client";
import Form from "@/components/Form";

import { useParams } from "next/navigation";
import React from "react";

const Homepage = ({
  params,
}: {
  params: { patient_chart_id: string | number };
}) => {
  let { patient_chart_id } = params;
  patient_chart_id = Number(patient_chart_id);

  return (
    <div>
      <Form params={patient_chart_id} />
    </div>
  );
};

export default Homepage;
