function InputForm({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-900 font-medium mt-4">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-xl flex-1 px-3 py-2 bg-gray-50 focus:outline-none focus:ring shadow ${className}`}
      />
    </div>
  );
}

export default InputForm;
