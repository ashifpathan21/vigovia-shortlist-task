import React from "react";
import TripForm from "../components/forms/TripForm.jsx";
import { useDispatch } from "react-redux";
import { addTrip } from "../redux/slices/tripSlice.js";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const id = uuidv4();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (payload) => {
    console.log("adding trip");
    console.log(payload);
    dispatch(addTrip(payload));
    toast.success("Trip Added");
    navigate(`/preview/${id}`);
  };
  return (
    <div>
      <TripForm id={id} onSubmit={onSubmit} />
    </div>
  );
};

export default AddTrip;
