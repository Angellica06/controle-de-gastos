import ItemDespesa from "./ItemDespesa";

function ListaDespesas({ despesas = [], abrirModal }) {
  return (
    <div className="border rounded-xl py-4 px-6 shadow">
      <div>
        <h2 className="font-medium text-xl text-gray-900">Lista de Despesas</h2>
        {despesas.length === 0 && (
          <p className="text-center my-4">Nenhuma despesa para exibir.</p>
        )}

        <div className="mt-4">
          {despesas.map((despesa, index) => (
            <div key={index}>
              <ItemDespesa
                nome={despesa.nome}
                valor={despesa.valor}
                tipo={despesa.tipo}
                onDelete={() => abrirModal(despesa)}
              />
              <hr className="border-gray-300 my-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaDespesas;
