import { useNavigate } from "react-router-dom";

export default function Card(props) {
  return (
    <a
      className="nav-link"
      style={{
        fontWeight: "normal",
        fontSize: 17,
        letterSpacing: 0,
        fontWeight: 500,
      }}
      href="/ok"
    >
      <li className="list-group-item lgi-notification">
        <p>{props.title}</p>
      </li>
    </a>
  );
}
