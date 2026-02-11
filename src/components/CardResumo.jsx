function CardResumo({ title, value, icon, valueColor, iconClass }) {
  const valorFormatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="border p-6 w-full rounded-xl shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-xl">{title}</h1>
        <img src={icon} className={`w-7 ${iconClass}`} alt={title} />
      </div>
      <p className={`font-medium ${valueColor}`}>{valorFormatado}</p>
    </div>
  );
}

export default CardResumo;