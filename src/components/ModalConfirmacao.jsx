function ModalConfirmacao({ aberto, onClose, onConfirm, nome }) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-gray-50 p-6 rounded-xl shadow-xl w-86">
        <h2 className="text-lg font-bold mb-2">Confirmar exclusão</h2>
        <p className="text-gray-600 mb-4">
          Tem certeza de que deseja excluir a despesa <strong>{nome}</strong>?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-xl cursor-pointer hover:shadow hover:-translate-y hover:scale-102"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-xl cursor-pointer hover:shadow hover:-translate-y hover:scale-102"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmacao;