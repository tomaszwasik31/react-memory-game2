export default function Card(props) {
  return (
    <div
      className="card"
      key={props.id}
      id={props.id}
      onClick={props.handleClick}
    >
      <img className="card-img" src={props.img} alt="card-img" />
      <p className="card-name"> {props.name} </p>
    </div>
  );
}



