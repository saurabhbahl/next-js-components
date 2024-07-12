import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let result = await req.json();
    console.log("Received JSON data:", result);

    let url = process.env.BACKEND_URL;
    let token = "Bearer 6|yE2C2i1ALf9T3fj318LjiXLXHTnpuFbNDvw05yBVe00035e2";

    let sendData = await fetch(`${url}/api/flow-sheets-vital-signs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(result),

    });

    if (sendData.ok) {
      let responseData = await sendData.json();
      console.log("Response from API:", responseData);
      return NextResponse.json(
        { msg: "Data sent successfully", data: responseData },
        { status: 200 }
      );
    } else {
      let errorMessage = await sendData.text(); 
      console.error("Failed to send data:", errorMessage);
      return NextResponse.json(
        { error: "Failed to send data", errorMsg: errorMessage },
        { status: sendData.status }
      );
    }
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error", errorMsg: error },
      { status: 500 }
    );
  }
}
