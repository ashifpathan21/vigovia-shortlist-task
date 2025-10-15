import React, { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import { v4 as uuidv4 } from "uuid";

const TripForm = ({ data = {}, onSubmit, id }) => {
  console.log(id);
  const [formData, setFormData] = useState({
    basic: {
      departureFrom: "",
      departureDate: "",
      arrivalDate: "",
      destination: "",
      noOfTravellers: "",
      ...((data && data.basic) || {}),
    },
    dayCurriculum: (data && data.dayCurriculum) || [
      {
        day: "",
        date: "",
        title: "",
        morningPlan: [""],
        afternoonPlan: [""],
        eveningPlan: [""],
      },
    ],
    flightDetails: (data && data.flightDetails) || [
      { flightDate: "", flightName: "", from: "", to: "" },
    ],
    hotelDetails: (data && data.hotelDetails) || [
      { city: "", checkIn: "", checkOut: "", nights: "", hotelName: "" },
    ],
    impNotes: (data && data.impNotes) || [{ point: "", details: "" }],
    activities: (data && data.activities) || [
      { city: "", activity: "", type: "", timeRequired: "" },
    ],
    paymentDetails: {
      totalAmount: "",
      totalAmountDesc: "",
      tcsStatus: "",
      installments: [{ installment: "", amount: "", dueDate: "" }],
      ...((data && data.paymentDetails) || {}),
    },
    scopeOfService: (data && data.scopeOfService) || [
      { scope: "", details: "" },
    ],
    inclusionSummary: (data && data.inclusionSummary) || [
      { category: "", count: "", details: "", status: "" },
    ],
    visaDetails: {
      visaType: "",
      validity: "",
      processingDate: "",
      ...((data && data.visaDetails) || {}),
    },
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    return `${d}-${m}-${y}`;
  };

  const formatToReadableDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const day = date.getDate();
    const suffix = ["th", "st", "nd", "rd"][
      day % 10 > 3 ? 0 : (day % 100) - (day % 10) !== 10 ? day % 10 : 0
    ];
    const month = date.toLocaleString("default", { month: "short" });
    return `${day}${suffix} ${month}`;
  };

  const formatToFlightDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const weekday = date.toLocaleString("default", { weekday: "short" });
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = String(date.getFullYear()).slice(-2);
    return `${weekday} ${day} ${month}’${year}`;
  };

  const getInputDateValue = (val) => {
    if (!val) return "";
    const parts = val.split("-");
    if (parts[0].length === 4) return val;
    const [d, m, y] = val.split("-");
    return `${y}-${m}-${d}`;
  };

  const updateBasic = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      basic: { ...prev.basic, [field]: value },
    }));
  };

  const addArrayItem = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const updateNestedArray = (section, index, field, nestedIndex, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: item[field].map((val, ni) =>
                ni === nestedIndex ? value : val
              ),
            }
          : item
      ),
    }));
  };

  const addNestedArrayItem = (section, index, field) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: [...item[field], ""] } : item
      ),
    }));
  };

  const removeNestedArrayItem = (section, index, field, nestedIndex) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: item[field].filter((_, ni) => ni !== nestedIndex),
            }
          : item
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = {
      ...formData,
      id: id,
      basic: {
        ...formData.basic,
        departureDate: formatDate(formData.basic.departureDate),
        arrivalDate: formatDate(formData.basic.arrivalDate),
      },
      dayCurriculum: formData.dayCurriculum.map((d) => ({
        ...d,
        date: formatToReadableDate(d.date),
      })),
      flightDetails: formData.flightDetails.map((f) => ({
        ...f,
        flightDate: formatToFlightDate(f.flightDate),
      })),
    };
    console.log("Formatted Data:", formatted);
    onSubmit(formatted);
  };

  const minArrival = formData.basic.departureDate
    ? formData.basic.departureDate
    : "";
  const maxDeparture = formData.basic.arrivalDate
    ? formData.basic.arrivalDate
    : "";

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Trip Planning Form
        </h1>

        {/* Basic Details */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Basic Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Departure From"
              value={formData.basic.departureFrom}
              onChange={(e) => updateBasic("departureFrom", e.target.value)}
              placeholder="Enter departure location"
              required
            />
            <Input
              label="Destination"
              value={formData.basic.destination}
              onChange={(e) => updateBasic("destination", e.target.value)}
              placeholder="Enter destination"
              required
            />
            <Input
              label="Departure Date"
              type="date"
              value={formData.basic.departureDate}
              onChange={(e) => updateBasic("departureDate", e.target.value)}
              required
            />
            <Input
              label="Arrival Date"
              type="date"
              value={formData.basic.arrivalDate}
              onChange={(e) => updateBasic("arrivalDate", e.target.value)}
              required
            />
            <Input
              label="Number of Travellers"
              type="number"
              value={formData.basic.noOfTravellers}
              onChange={(e) => updateBasic("noOfTravellers", e.target.value)}
              placeholder="Enter number of travellers"
              required
            />
          </div>
        </section>

        {/* Day Curriculum */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Day Curriculum
            </h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("dayCurriculum", {
                  day: "",
                  date: "",
                  title: "",
                  morningPlan: [""],
                  afternoonPlan: [""],
                  eveningPlan: [""],
                })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Day
            </button>
          </div>
          {formData.dayCurriculum.map((day, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">Day {idx + 1}</h3>
                {formData.dayCurriculum.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("dayCurriculum", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Input
                  label="Day"
                  value={day.day}
                  onChange={(e) =>
                    updateArrayItem("dayCurriculum", idx, "day", e.target.value)
                  }
                  placeholder="Day 1"
                />
                <Input
                  label="Date"
                  type="date"
                  value={day.date}
                  onChange={(e) =>
                    updateArrayItem(
                      "dayCurriculum",
                      idx,
                      "date",
                      e.target.value
                    )
                  }
                />
                <Input
                  label="Title"
                  value={day.title}
                  onChange={(e) =>
                    updateArrayItem(
                      "dayCurriculum",
                      idx,
                      "title",
                      e.target.value
                    )
                  }
                  placeholder="Day title"
                />
              </div>

              {["morningPlan", "afternoonPlan", "eveningPlan"].map((period) => (
                <div key={period} className="mb-3">
                  <label className="text-sm font-medium text-gray-700 block mb-2 capitalize">
                    {period.replace("Plan", " Plan")}
                  </label>
                  {day[period].map((plan, planIdx) => (
                    <div key={planIdx} className="flex gap-2 mb-2">
                      <input
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        value={plan}
                        onChange={(e) =>
                          updateNestedArray(
                            "dayCurriculum",
                            idx,
                            period,
                            planIdx,
                            e.target.value
                          )
                        }
                        placeholder={`${period} activity`}
                      />
                      {day[period].length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeNestedArrayItem(
                              "dayCurriculum",
                              idx,
                              period,
                              planIdx
                            )
                          }
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      addNestedArrayItem("dayCurriculum", idx, period)
                    }
                    className="text-sm text-[#541C9C] hover:underline"
                  >
                    + Add activity
                  </button>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Flight Details */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Flight Details
            </h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("flightDetails", {
                  flightDate: "",
                  flightName: "",
                  from: "",
                  to: "",
                })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Flight
            </button>
          </div>
          {formData.flightDetails.map((flight, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Flight {idx + 1}</h3>
                {formData.flightDetails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("flightDetails", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Flight Date"
                  type="date"
                  value={flight.flightDate}
                  onChange={(e) =>
                    updateArrayItem(
                      "flightDetails",
                      idx,
                      "flightDate",
                      e.target.value
                    )
                  }
                />
                <Input
                  label="Flight Name"
                  value={flight.flightName}
                  onChange={(e) =>
                    updateArrayItem(
                      "flightDetails",
                      idx,
                      "flightName",
                      e.target.value
                    )
                  }
                  placeholder="Airline name/number"
                />
                <Input
                  label="From"
                  value={flight.from}
                  onChange={(e) =>
                    updateArrayItem(
                      "flightDetails",
                      idx,
                      "from",
                      e.target.value
                    )
                  }
                  placeholder="Departure city"
                />
                <Input
                  label="To"
                  value={flight.to}
                  onChange={(e) =>
                    updateArrayItem("flightDetails", idx, "to", e.target.value)
                  }
                  placeholder="Arrival city"
                />
              </div>
            </div>
          ))}
        </section>
        {/* Hotel Details */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Hotel Details
            </h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("hotelDetails", {
                  city: "",
                  checkIn: "",
                  checkOut: "",
                  nights: "",
                  hotelName: "",
                })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Hotel
            </button>
          </div>
          {formData.hotelDetails.map((hotel, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Hotel {idx + 1}</h3>
                {formData.hotelDetails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("hotelDetails", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Hotel Name"
                  value={hotel.hotelName}
                  onChange={(e) =>
                    updateArrayItem(
                      "hotelDetails",
                      idx,
                      "hotelName",
                      e.target.value
                    )
                  }
                  placeholder="Hotel name"
                />
                <Input
                  label="City"
                  value={hotel.city}
                  onChange={(e) =>
                    updateArrayItem("hotelDetails", idx, "city", e.target.value)
                  }
                  placeholder="City"
                />
                <Input
                  label="Check In"
                  type="date"
                  value={hotel.checkIn}
                  onChange={(e) =>
                    updateArrayItem(
                      "hotelDetails",
                      idx,
                      "checkIn",
                      e.target.value
                    )
                  }
                />
                <Input
                  label="Check Out"
                  type="date"
                  value={hotel.checkOut}
                  onChange={(e) =>
                    updateArrayItem(
                      "hotelDetails",
                      idx,
                      "checkOut",
                      e.target.value
                    )
                  }
                />
                <Input
                  label="Nights"
                  type="number"
                  value={hotel.nights}
                  onChange={(e) =>
                    updateArrayItem(
                      "hotelDetails",
                      idx,
                      "nights",
                      e.target.value
                    )
                  }
                  placeholder="Number of nights"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Activities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Activities</h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("activities", {
                  city: "",
                  activity: "",
                  type: "",
                  timeRequired: "",
                })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Activity
            </button>
          </div>
          {formData.activities.map((activity, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Activity {idx + 1}</h3>
                {formData.activities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("activities", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="City"
                  value={activity.city}
                  onChange={(e) =>
                    updateArrayItem("activities", idx, "city", e.target.value)
                  }
                  placeholder="City"
                />
                <Input
                  label="Activity"
                  value={activity.activity}
                  onChange={(e) =>
                    updateArrayItem(
                      "activities",
                      idx,
                      "activity",
                      e.target.value
                    )
                  }
                  placeholder="Activity name"
                />
                <Input
                  label="Type"
                  value={activity.type}
                  onChange={(e) =>
                    updateArrayItem("activities", idx, "type", e.target.value)
                  }
                  placeholder="Activity type"
                />
                <Input
                  label="Time Required"
                  value={activity.timeRequired}
                  onChange={(e) =>
                    updateArrayItem(
                      "activities",
                      idx,
                      "timeRequired",
                      e.target.value
                    )
                  }
                  placeholder="e.g., 2 hours"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Visa Details */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Visa Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Visa Type"
              value={formData.visaDetails.visaType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  visaDetails: {
                    ...prev.visaDetails,
                    visaType: e.target.value,
                  },
                }))
              }
              placeholder="Tourist/Business/etc."
            />
            <Input
              label="Validity"
              value={formData.visaDetails.validity}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  visaDetails: {
                    ...prev.visaDetails,
                    validity: e.target.value,
                  },
                }))
              }
              placeholder="e.g., 6 months"
            />
            <Input
              label="Processing Date"
              type="date"
              value={formData.visaDetails.processingDate}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  visaDetails: {
                    ...prev.visaDetails,
                    processingDate: e.target.value,
                  },
                }))
              }
            />
          </div>
        </section>

        {/* Payment Details */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Input
              label="Total Amount"
              type="number"
              value={formData.paymentDetails.totalAmount}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  paymentDetails: {
                    ...prev.paymentDetails,
                    totalAmount: e.target.value,
                  },
                }))
              }
              placeholder="Total amount"
            />
            <Input
              label="Amount Description"
              value={formData.paymentDetails.totalAmountDesc}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  paymentDetails: {
                    ...prev.paymentDetails,
                    totalAmountDesc: e.target.value,
                  },
                }))
              }
              placeholder="Description"
            />
            <Input
              label="TCS Status"
              value={formData.paymentDetails.tcsStatus}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  paymentDetails: {
                    ...prev.paymentDetails,
                    tcsStatus: e.target.value,
                  },
                }))
              }
              placeholder="Applicable/Not Applicable"
            />
          </div>

          <h3 className="font-semibold mb-2">Installments</h3>
          {formData.paymentDetails.installments.map((inst, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="Installment"
                  value={inst.installment}
                  onChange={(e) => {
                    const newInst = [...formData.paymentDetails.installments];
                    newInst[idx].installment = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      paymentDetails: {
                        ...prev.paymentDetails,
                        installments: newInst,
                      },
                    }));
                  }}
                  placeholder="Installment number"
                />
                <Input
                  label="Amount"
                  type="number"
                  value={inst.amount}
                  onChange={(e) => {
                    const newInst = [...formData.paymentDetails.installments];
                    newInst[idx].amount = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      paymentDetails: {
                        ...prev.paymentDetails,
                        installments: newInst,
                      },
                    }));
                  }}
                  placeholder="Amount"
                />
                <Input
                  label="Due Date"
                  type="date"
                  value={inst.dueDate}
                  onChange={(e) => {
                    const newInst = [...formData.paymentDetails.installments];
                    newInst[idx].dueDate = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      paymentDetails: {
                        ...prev.paymentDetails,
                        installments: newInst,
                      },
                    }));
                  }}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                paymentDetails: {
                  ...prev.paymentDetails,
                  installments: [
                    ...prev.paymentDetails.installments,
                    { installment: "", amount: "", dueDate: "" },
                  ],
                },
              }))
            }
            className="text-sm text-[#541C9C] hover:underline"
          >
            + Add Installment
          </button>
        </section>

        {/* Important Notes */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Important Notes
            </h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("impNotes", { point: "", details: "" })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Note
            </button>
          </div>
          {formData.impNotes.map((note, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Note {idx + 1}</h3>
                {formData.impNotes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("impNotes", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Point"
                  value={note.point}
                  onChange={(e) =>
                    updateArrayItem("impNotes", idx, "point", e.target.value)
                  }
                  placeholder="Note heading"
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">
                    Details
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    value={note.details}
                    onChange={(e) =>
                      updateArrayItem(
                        "impNotes",
                        idx,
                        "details",
                        e.target.value
                      )
                    }
                    placeholder="Note details"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Scope of Service */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Scope of Service
            </h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("scopeOfService", { scope: "", details: "" })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Scope
            </button>
          </div>
          {formData.scopeOfService.map((scope, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Scope {idx + 1}</h3>
                {formData.scopeOfService.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("scopeOfService", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Scope"
                  value={scope.scope}
                  onChange={(e) =>
                    updateArrayItem(
                      "scopeOfService",
                      idx,
                      "scope",
                      e.target.value
                    )
                  }
                  placeholder="Service scope"
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">
                    Details
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    value={scope.details}
                    onChange={(e) =>
                      updateArrayItem(
                        "scopeOfService",
                        idx,
                        "details",
                        e.target.value
                      )
                    }
                    placeholder="Scope details"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Inclusion Summary */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Inclusion Summary
            </h2>
            <button
              type="button"
              onClick={() =>
                addArrayItem("inclusionSummary", {
                  category: "",
                  count: "",
                  details: "",
                  status: "",
                })
              }
              className="flex items-center gap-2 bg-[#541C9C] text-white px-4 py-2 rounded-lg hover:bg-[#6B24B8]"
            >
              <Plus size={20} /> Add Inclusion
            </button>
          </div>
          {formData.inclusionSummary.map((inc, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Inclusion {idx + 1}</h3>
                {formData.inclusionSummary.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("inclusionSummary", idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Category"
                  value={inc.category}
                  onChange={(e) =>
                    updateArrayItem(
                      "inclusionSummary",
                      idx,
                      "category",
                      e.target.value
                    )
                  }
                  placeholder="Category"
                />
                <Input
                  label="Count"
                  value={inc.count}
                  onChange={(e) =>
                    updateArrayItem(
                      "inclusionSummary",
                      idx,
                      "count",
                      e.target.value
                    )
                  }
                  placeholder="Count"
                />
                <Input
                  label="Status"
                  value={inc.status}
                  onChange={(e) =>
                    updateArrayItem(
                      "inclusionSummary",
                      idx,
                      "status",
                      e.target.value
                    )
                  }
                  placeholder="Included/Excluded"
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">
                    Details
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    value={inc.details}
                    onChange={(e) =>
                      updateArrayItem(
                        "inclusionSummary",
                        idx,
                        "details",
                        e.target.value
                      )
                    }
                    placeholder="Inclusion details"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
        <Button
          type="submit"
          title="Submit"
          className="bg-[#541C9C] text-white px-6 py-2 rounded-lg"
        ></Button>
      </form>
    </div>
  );
};

export default TripForm;
