import { useState } from "react";
import InputForm from "./InputForm";
import ListaDespesas from "./ListaDespesas";

function FormularioDespesa({ despesas, setDespesas, abrirModal }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");

  const handleAdicionar = () => {
    if (!nome || !valor || !tipo) return;

    setDespesas([
      {
        id: Date.now(),
        nome,
        valor: Number(valor.replace(",", ".")),
        tipo,
      },
      ...despesas,
    ]);

    setNome("");
    setValor("");
    setTipo("");
  };

  return (
    <div className="w-full">
      <div className="gap-3 mt-2">
        <InputForm
          label={"Nome Despesa"}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Internet"
        />
        <InputForm
          label={"Valor"}
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="R$ 0,00"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-900 font-medium mt-4">
          Escolha uma opção
        </label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border rounded-xl flex-1 px-3 py-2 bg-gray-50 focus:outline-none focus:ring shadow"
        >
          <option value="">Selecione...</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleAdicionar}
          disabled={!nome || !valor || !tipo}
          className="bg-black text-white font-bold px-5 py-2 rounded-xl 
          hover:bg-gray-800 hover:-translate-y 
          hover:scale-102 cursor-pointer shadow 
          disabled:bg-gray-400 disabled:cursor-auto 
          disabled:hover:scale-100"
        >
          + Adicionar
        </button>
      </div>

      <div className="mt-5">
        <ListaDespesas
          despesas={despesas}
          valor={valor}
          tipo={tipo}
          abrirModal={abrirModal}
        />
      </div>
    </div>
  );
}

export default FormularioDespesa;
