import React, { useRef } from "react";
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

const PreviewPage = () => {
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef, // ✅ new way in v3+
    documentTitle: "Trip Report",
    removeAfterPrint: true,
  });

  return (
    <div className="">
      {/* The printable content */}
      <div
        className="flex flex-col px-20 gap-5 h-full max-w-screen"
        ref={contentRef}
      >
        <Header />
        <TripDetail />
        <DayPlan />
        <FlightSummary />
        <HotelBooking />
        <ImpNotes />
        <ScopeOfService />
        <InclusionSummary />
        <ActivityTable />
        <TermAndConditions />
        <PaymentPlan />
        <VisaDetails />
        <BookNow onClick={handlePrint} />
        <Footer />
      </div>
    </div>
  );
};

export default PreviewPage;
