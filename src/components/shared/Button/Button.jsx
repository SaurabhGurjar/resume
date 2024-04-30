export default function Button({ id, cls, icon, onClick }) {
  return (
    <button id={id} className={cls} onClick={() => onClick(id)}>
      {icon}
    </button>
  );
}
