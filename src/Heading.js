
const Heading = ({count,msg,visible}) => {
  if(visible)
  {return (
    <>
      <h1>{msg}</h1>
    <div id={"heading"}>
      WPM={count}
    </div>
    </>
  )}
  else{
    return(<>
      <h1>{msg}</h1>
      </>)
  }
}
export default Heading
