import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  //   console.log(props.article);
  return (
    <div className="col-sm-4 col-6">
      <a href={`/${props.url}/${props.article.uuid}`}>
        <div className="card card-news">
          <img
            src={`data:image/jpeg;base64,${props.article.thumnail}`}
            className="card-img-top"
            alt=""
            style={{ filter: "brightness(80%)" }}
          />
          <p className="txt-in-thumb-2">{props.article.title}</p>
        </div>
      </a>
    </div>
  );
}
