import React from "react";
import Header from "../components/Header.jsx";
import TripDetail from "../components/TripDetail.jsx";
import DayPlan from "../components/DayPlan.jsx";
import FlightSummary from "../components/FlightSummary.jsx";
import HotelBooking from "../components/HotelBooking.jsx";
import ImpNotes from "../components/ImpNotes.jsx";
import ScopeOfService from "../components/ScopeOfService.jsx";
import InclusionSummary from "../components/InclusionSummary.jsx";
import ActivityTable from "../components/ActivityTable.jsx";
import TermAndConditions from "../components/TermAndConditions.jsx";
import PaymentPlan from "../components/PaymentPlan.jsx";
import VisaDetails from "../components/VisaDetails.jsx";
import BookNow from "../components/BookNow.jsx";
import Footer from "../components/Footer.jsx";
const PreviewPage = () => {
  return (
    <div className="flex flex-col px-20 gap-5 h-full  max-w-screen ">
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
      <BookNow />
      <Footer />
    </div>
  );
};

export default PreviewPage;
