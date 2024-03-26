import React from "react";

const BookingForm = () => {
  return (
    <form
      style={{
        display: "grid",
        maxWidth: "300px",
        gap: "20px",
        width: "300px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Reservation success!");
      }}
    >
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date" required />
      <label for="res-time">Choose time</label>
      <select id="res-time " required>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label for="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        required
      />
      <label for="occasion">Occasion</label>
      <select id="occasion" required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
