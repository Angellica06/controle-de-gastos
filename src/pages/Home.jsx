import { useState, useEffect } from "react";
import carteiraImage from "/src/assets/carteira.png";
import setaParaCima from "/src/assets/setaCima.png";
import setaParaBaixo from "/src/assets/setaBaixo.png";
import cifrao from "/src/assets/cifrao.png";
import FormularioDespesa from "../components/FormularioDespesa";
import CardResumo from "../components/CardResumo";
import ModalConfirmacao from "../components/ModalConfirmacao";

function Home() {
  const [despesas, setDespesas] = useState(() => {
    const despesasSalvas = localStorage.getItem("despesas");
    return despesasSalvas ? JSON.parse(despesasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem("despesas", JSON.stringify(despesas));
  }, [despesas]);

  const [modalAberto, setModalAberto] = useState(false);
  const [despesaSelecionada, setDespesaSelecionada] = useState(null);

  const abrirModal = (despesa) => {
    setDespesaSelecionada(despesa);
    setModalAberto(true);
  };

  const confirmarRemocao = () => {
    setDespesas(despesas.filter((item) => item.id !== despesaSelecionada.id));
    setModalAberto(false);
    setDespesaSelecionada(null);
  };

  let totalEntradas = 0;
  let totalSaidas = 0;

  despesas.forEach((despesa) => {
    if (despesa.tipo === "entrada") {
      totalEntradas += despesa.valor;
    } else if (despesa.tipo === "saida") {
      totalSaidas += despesa.valor;
    }
  });

  const saldoTotal = totalEntradas - totalSaidas;

  return (
    <div className="m-8 md:mx-14 md:my-12">
      <div className="flex gap-3">
        <img src={carteiraImage} alt="carteira" />
        <div>
          <h1 className="font-bold text-xl text-gray-800">MeuSaldo</h1>
          <p className="font-normal text-gray-600">
            Gerencie suas finanças pessoais
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-3">
        <CardResumo
          title="Entrada"
          value={totalEntradas}
          icon={setaParaCima}
          iconClass="rotate-180"
          valueColor="text-green-600"
        />

        <CardResumo
          title="Saída"
          value={totalSaidas}
          icon={setaParaBaixo}
          valueColor="text-red-600"
        />

        <CardResumo
          title="Total"
          value={saldoTotal}
          icon={cifrao}
          valueColor={saldoTotal >= 0 ? "text-blue-600" : "text-red-600"}
        />
      </div>

      <FormularioDespesa
        despesas={despesas}
        setDespesas={setDespesas}
        abrirModal={abrirModal}
      />

      <ModalConfirmacao
        aberto={modalAberto}
        onClose={() => setModalAberto(false)}
        onConfirm={confirmarRemocao}
        nome={despesaSelecionada?.nome}
      />
    </div>
  );
}

export default Home;
