import React from "react";

export default function Type() {
  return (
    <label>
      Pick a diet type:
      <select name="selectedDietType">
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="omnivorous">Omnivorous</option>
        <option value="pescatarian">Pescatarian</option>
      </select>
    </label>
  );
}
