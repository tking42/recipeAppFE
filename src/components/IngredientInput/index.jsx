const IngredientInput = ({ label, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={label} className="block text-sm font-semibold text-gray-700">
            {label}:
        </label>
        <input
            required
            type="text"
            id={label}
            name={label}
            value={value}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter ${label}`}
            onChange={onChange}
        />
    </div>
);

export default IngredientInput;
