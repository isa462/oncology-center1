export default function DeleteModal({ visible, onClose, onConfirm }: any) {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Вы действительно хотите удалить?</p>

        <div className="actions">
          <button onClick={onConfirm}>Удалить</button>
          <button onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  );
}
