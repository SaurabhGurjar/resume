export default function Button({ id, cls, icon, tag, onClick }) {
  return (
    <button id={id} className={cls} onClick={() => onClick(id)}>
      {icon} {tag}
    </button>
  );
}
