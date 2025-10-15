import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Trash2, Pencil, Eye } from "lucide-react";
import { deleteTrip } from "../../redux/slices/tripSlice.js"; // adjust path if needed

const TripCart = ({ trip }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!trip?.basic) return null;

  const handleDelete = () => {
    dispatch(deleteTrip(trip.id));
  };

  const handleEdit = () => {
    navigate(`/edit/${trip.id}`);
  };

  const {
    departureFrom,
    destination,
    departureDate,
    arrivalDate,
    noOfTravellers,
  } = trip.basic;

  return (
    <div className="border border-[#541C9C] rounded-2xl p-5 shadow-sm bg-white hover:shadow-md transition flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-[#541C9C]">
        {departureFrom} ➜ {destination}
      </h2>
      <div className="text-gray-600 text-sm space-y-1">
        <p>
          <span className="font-medium">Departure:</span>{" "}
          {departureDate || "N/A"}
        </p>
        <p>
          <span className="font-medium">Arrival:</span> {arrivalDate || "N/A"}
        </p>
        <p>
          <span className="font-medium">Travellers:</span> {noOfTravellers || 0}
        </p>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => navigate(`/preview/${trip?.id}`)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#541C9C] text-white hover:bg-[#3f1579] transition"
        >
          <Eye className="w-4 h-4" /> View
        </button>
        <button
          onClick={handleEdit}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#541C9C] text-white hover:bg-[#3f1579] transition"
        >
          <Pencil className="w-4 h-4" /> Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#541C9C] text-[#541C9C] hover:bg-[#F9EEFF] transition"
        >
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>
    </div>
  );
};

export default TripCart;
