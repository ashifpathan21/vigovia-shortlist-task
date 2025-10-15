import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TripForm from "../components/forms/TripForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import { editTrip } from "../redux/slices/tripSlice.js";
import NotFound from "./NotFound.jsx";
import { toast } from "react-toastify";
const EditTrip = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = params;
  const { trips } = useSelector((state) => state?.trip);
  const [selectedTrip, setSelectedTrip] = useState(null);
  useEffect(() => {
    const trip = trips?.filter((trip) => trip?.id === id)[0];
    setSelectedTrip(trip);
  }, [trips && id]);

  if (!selectedTrip) {
    return <NotFound />;
  }
  const onSubmit = (updated) => {
    console.log(updated);
    dispatch(editTrip({ id, updated }));
    toast.success("Edit successfully");
    navigate(`/preview/${id}`);
  };
  return (
    <div>
      <TripForm data={selectedTrip} id={id} onSubmit={onSubmit} />
    </div>
  );
};

export default EditTrip;
