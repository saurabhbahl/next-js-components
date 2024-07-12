import Form from "@/components/Form";
import Notification from "@/components/Notification";
import React from "react";

const Homepage = () => {
  return (
    <div>
    
      <Notification color={"red"} text={"Hii"}/>
      <Form params={122}/>
    </div>
  );
};

export default Homepage;
