import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter(props: { element: React.ReactNode }) {
  const isCheck = false;
  if (!isCheck) {
    return <Navigate to="/login"></Navigate>;
  }
  return props.element;
}