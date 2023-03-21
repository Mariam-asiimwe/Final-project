export default function Category() {
  return (
    <label>
      Pick a category:
      <select name="selectedCategory">
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="omnivorous">Omnivorous</option>
        <option value="pescatarian">Pescatarian</option>
      </select>
    </label>
  );
}
