import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "../components/headers/Header.jsx";
import TripDetail from "../components/trips/TripDetail.jsx";
import DayPlan from "../components/dayPlans/DayPlan.jsx";
import FlightSummary from "../components/flights/FlightSummary.jsx";
import HotelBooking from "../components/hotels/HotelBooking.jsx";
import ImpNotes from "../components/notes/ImpNotes.jsx";
import ScopeOfService from "../components/scopes/ScopeOfService.jsx";
import InclusionSummary from "../components/summaries/InclusionSummary.jsx";
import ActivityTable from "../components/activities/ActivityTable.jsx";
import TermAndConditions from "../components/termAndConditions/TermAndConditions.jsx";
import PaymentPlan from "../components/payments/PaymentPlan.jsx";
import VisaDetails from "../components/visaDetails/VisaDetails.jsx";
import BookNow from "../components/payments/BookNow.jsx";
import Footer from "../components/footers/Footer.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../components/ui/Button.jsx";
import { toast } from "react-toastify";
import NotFound from "./NotFound.jsx";
const PreviewPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { id } = param;
  const { trips } = useSelector((state) => state?.trip);
  const [selectedTrip, setSelectedTrip] = useState(null);
  useEffect(() => {
    const trip = trips?.filter((trip) => trip?.id === id)[0];
    setSelectedTrip(trip);
  }, [trips && id]);

  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef, // ✅ new way in v3+
    documentTitle: "Trip Report",
    removeAfterPrint: true,
  });

  if (!selectedTrip) {
    return <NotFound />;
  }
  return (
    <div className="overflow-x-hidden">
      {/* The printable content */}
      <div className="flex gap-10 justify-around  w-full  items-center p-4 ">
        <Button title="Back" onClick={() => navigate(-1)} />
        <Button title="Home" onClick={() => navigate("/")} />
        <Button title="Save PDF" onClick={handlePrint} />
      </div>
      <div
        className="flex flex-col px-20 gap-5 h-full w-full overflow-x-hidden"
        ref={contentRef}
      >
        <Header data={selectedTrip?.basic} />
        <TripDetail data={selectedTrip?.basic} />
        <DayPlan data={selectedTrip?.dayCurriculum} />
        <FlightSummary data={selectedTrip?.flightDetails} />
        <HotelBooking data={selectedTrip?.hotelDetails} />
        <ImpNotes notes={selectedTrip?.impNotes} />
        <ScopeOfService scope={selectedTrip?.scopeOfService} />
        <InclusionSummary data={selectedTrip?.inclusionSummary} />
        <ActivityTable data={selectedTrip?.activities} />
        <TermAndConditions />
        <PaymentPlan data={selectedTrip?.paymentDetails} />
        <VisaDetails visa={selectedTrip?.visaDetails} />
        <BookNow onClick={() => toast.success("Trip Booked")} />
        <Footer />
      </div>
    </div>
  );
};

export default PreviewPage;
