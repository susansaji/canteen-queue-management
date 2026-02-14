import React, { useState } from "react";

function BookingScreen({ selectedFood }) {
  const [quantity, setQuantity] = useState(1);
  const [slot, setSlot] = useState("12:00 - 12:30");

  const slots = [
    "12:00 - 12:30",
    "12:30 - 1:00",
    "1:00 - 1:30",
    "1:30 - 2:00",
  ];

  if (!selectedFood) {
    return (
      <div style={{ padding: "20px", color: "white", textAlign: "center" }}>
        <h2>No food selected</h2>
        <p>Please go to Dashboard and click Order.</p>
      </div>
    );
  }

  const totalPrice = selectedFood.price * quantity;

  const increaseQty = () => {
    if (quantity < 5) setQuantity(quantity + 1);
    else alert("Maximum limit is 5!");
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>📌 Booking Page</h2>

      <div
        style={{
          maxWidth: "450px",
          margin: "auto",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          color: "black",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        {/* IMAGE DISPLAY */}
        <img
          src={selectedFood.img}
          alt={selectedFood.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <h2 style={{ textAlign: "center", marginTop: "15px" }}>
          {selectedFood.name}
        </h2>

        <p style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>
          Price per item: ₹{selectedFood.price}
        </p>

        {/* Quantity */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "15px",
          }}
        >
          <button
            onClick={decreaseQty}
            style={{
              padding: "10px 15px",
              fontSize: "20px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            -
          </button>

          <h2>{quantity}</h2>

          <button
            onClick={increaseQty}
            style={{
              padding: "10px 15px",
              fontSize: "20px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            +
          </button>
        </div>

        <p style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          Max limit: 5
        </p>

        {/* Slot */}
        <div style={{ marginTop: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Select Time Slot:</label>

          <select
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "6px",
            }}
          >
            {slots.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Total */}
        <h3 style={{ textAlign: "center", marginTop: "20px", color: "blue" }}>
          Total Price: ₹{totalPrice}
        </h3>

        {/* Confirm */}
        <button
          onClick={() =>
            alert(
              `Booking Confirmed!\n\nFood: ${selectedFood.name}\nQuantity: ${quantity}\nSlot: ${slot}\nTotal: ₹${totalPrice}`
            )
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingScreen;
