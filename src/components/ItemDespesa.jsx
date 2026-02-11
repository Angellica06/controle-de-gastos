import lixeira from "/src/assets/lixeira.png";

function ItemDespesa({ nome, valor, tipo, onDelete  }) {
  const corValor = tipo === "entrada" ? "text-green-600" : "text-red-600";
  const valorFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex justify-between p-2 hover:bg-gray-200 hover:rounded">
      <span>{nome}</span>
      <div className="flex gap-2">
        <span className={corValor}>{valorFormatado}</span>
        <img
          src={lixeira}
          className="cursor-pointer w-6 hover:-translate-y hover:scale-110"
          alt="lixeira"
          onClick={onDelete}
        />
      </div>
    </div>
  );
}

export default ItemDespesa;
