export default function SearchBox() {
  return (
    <div>
      <p>Search by name</p>
      <input
        type="text"
        value=""
        // onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
