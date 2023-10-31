
const Correct = ({corr,visible}) => {
  if(visible)
  {return (
    <span id="correct">
        {corr}
    </span>
  )}
  else
  {return(
    <>
    </>
  )}
}

export default Correct
