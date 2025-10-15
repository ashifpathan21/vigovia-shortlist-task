import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import TripCart from "../components/trips/TripCart.jsx";

const Home = () => {
  const navigate = useNavigate();
  const { trips } = useSelector((state) => state.trip);

  useEffect(() => {
    console.log(trips);
  }, [trips]);

  return (
    <div className="min-h-screen w-screen p-4 flex flex-col gap-4">
      <div className="flex w-full">
        <Button title="Add Trips" onClick={() => navigate("/add")} />
      </div>

      <div className="grid gap-4">
        {trips.length > 0 ? (
          trips.map((trip) => <TripCart key={trip.id} trip={trip} />)
        ) : (
          <div className="font-semibold text-center p-8 text-2xl">
            <h2>You have no trips yet — add one now.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
