import React from "react";

function SuccessScreen({ bookingDetails, onBack }) {
  if (!bookingDetails) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        No Booking Details Found!
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #141e30, #243b55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "520px",
          backgroundColor: "white",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 8px 25px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 style={{ margin: "0", fontWeight: "bold" }}>
            ✅ BOOKING CONFIRMED
          </h1>
          <p style={{ margin: "8px 0", fontSize: "16px", fontWeight: "bold" }}>
            Your order has been successfully placed!
          </p>
        </div>

        <img
          src={bookingDetails.food.img}
          alt={bookingDetails.food.name}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "15px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            🍽️ {bookingDetails.food.name}
          </h2>

          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              🆔 Booking Code
            </p>
            <h2 style={{ margin: "5px 0", color: "blue", fontWeight: "bold" }}>
              {bookingDetails.bookingCode}
            </h2>
          </div>

          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            🔢 Quantity Booked:{" "}
            <span style={{ color: "purple" }}>{bookingDetails.quantity}</span>
          </p>

          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            ⏰ Time Slot:{" "}
            <span style={{ color: "green" }}>{bookingDetails.slot}</span>
          </p>

          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            💰 Price Per Item:{" "}
            <span style={{ color: "red" }}>₹{bookingDetails.food.price}</span>
          </p>

          <hr style={{ margin: "20px 0" }} />

          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#d10000",
            }}
          >
            Total Amount to Pay: ₹{bookingDetails.totalPrice}
          </h2>

          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              backgroundColor: "#eaf7ea",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "bold",
              color: "#007b00",
              fontSize: "16px",
            }}
          >
            ✅ Please show your Booking Code at the Counter.
          </div>

          <button
            onClick={onBack}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessScreen;
