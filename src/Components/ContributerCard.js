export default function  ContributerCard(props) {
  return(
    <>
      <div className = 'card'>
      <h2 style = {{fontWeight:'bolder',textTransform: 'uppercase', fontSize: '2.2em' , marginBottom:'5px'}}>{props.name}</h2>
      <h3>{props.college}</h3>
      <h3>{props.branch}</h3>
      </div>
    </>
  );
}