import { MdDelete, MdPerson, MdPhone } from "react-icons/md";

export default function Contact({ data: { name, number } }) {
  return (
    <>
      <div>
        <p>
          <MdPerson />
          {name}
        </p>
        <p>
          <MdPhone /> {number}
        </p>
      </div>
      <button>
        <MdDelete /> Delete
      </button>
    </>
  );
}
