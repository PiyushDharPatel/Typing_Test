import { useState, useEffect, cloneElement } from 'react';
import Input from "./Input";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import Normal from "./Normal";
import Heading from "./Heading";
import Image from "./Image";
import Score from './Score';
import Done from './Done';
function App() {
  const [isLoading,setIsLoading]=useState(true)
  const [corr, setCorr] = useState("")
  const [incorr, setIncorr] = useState("")
  const [normal, setNormal] = useState("")
  const [newWord, setNewWord] = useState("")
  const [count, setCount] = useState(0)
  const [imag, setImag] = useState('./jmjjj.webp')
  const [can, setCan] = useState(true)
  const [sum, setSum] = useState(0)
  const [intcount, setIntcount] = useState(1)
  const [done, setDone] = useState(true)
  const [imgid, setImgid] = useState("image")
  const [msg, setMsg] = useState('Start Typing!')
  const [visible, setVisible] = useState(true)
  const [stop, setStop] = useState(false)
  const [high, setHigh] = useState(0)
  const [average, setAverage] = useState(0)
  const onComplete = () => {
    setNewWord("")
    setStop(true)
    setVisible(false)
    setHigh(Math.max(count, high))
    setImag('./tick.jpg')
    setImgid('donp')
    setMsg("Test Completed!")

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ High: Math.max(count, high) })
    }
    fetch("http://localhost:3500/Score/", options)
  }
  const onSpace = (e) => {
    setSum(sum + 1)
    setNewWord("")
    setCorr(corr + e)
    setNormal(normal.substring(1,))
  }
  const onCorr = (e) => {
    setCorr(corr + e)
    setNormal(normal.substring(1,))
  }
  const onIncorr = (e) => {
    setCan(false)
    setIncorr(incorr + normal.charAt(0))
    setNormal(normal.substring(1,))
  }
  const onBS = () => {
    setNewWord(newWord.substring(0, newWord.length - 1))
    console.log(incorr.length)
    if (incorr.length !== 0) {
      console.log(incorr.substring(0, incorr.length - 1))
      setNormal(incorr.charAt(incorr.length - 1) + normal)
      setIncorr(incorr.substring(0, incorr.length - 1))

    }
    else {
      if (corr.charAt(corr.length - 1) !== " ") {
        setNormal(corr.charAt(corr.length - 1) + normal)
        setCorr(corr.substring(0, corr.length - 1))
      }
    }
    if (incorr.length == 1) setCan(true)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop) {
        setCount(Math.round((sum / intcount) * 60))
        setIntcount(intcount + 1)
      }
    }
      , 1000)
    return () => clearInterval(interval)
  }, [intcount, stop])
  const changeCol = (e) => {
    if (!normal && !incorr) { onComplete() }
    if (done) {
      setIntcount(1)
      setDone(false)
    }
    if (normal.charAt(0) == e && can) {
      if (e == " ") { onSpace(e) }
      else { onCorr(e) }
    }
    else { onIncorr(e) }
  }
  useEffect(() => {

    fetch("http://localhost:3500/texts").
      then((response) => {
        response.json().
          then(((res) => {
            setNormal(res[Math.round(Math.random() * 14)].text)
            setIsLoading(false)
          }))
      }, () => {
        setIsLoading(false)
        console.log("hi")
        setVisible(false)
        setMsg("Looks like we got a problem!")
        setImag('./error.jpg')
        setImgid('donp')
      })
  }, [])
  useEffect(() => {

    fetch("http://localhost:3500/Score").
      then((response) => {
        response.json().
          then(((res) => {
            setHigh(res.High)
            setAverage(res.Average)
          }))
      }, () => {
        console.log("hi")
        setVisible(false)
        setMsg("Looks like we got a problem!")
        setImag('./error.jpg')
        setImgid('donp')
      })
  }, [])
  if(!isLoading){
  return (
    <>
      <Score
        high={high}
        average={average}
        visible={visible}
      />
      <div className="trans">
        
        <Heading
          count={count}
          msg={msg}
          visible={visible}
        />
        {!isLoading&&
        <Image
          imag={imag}
          imgid={imgid}
        />}
        <Done
          count={count}
          high={high}
          visible={visible}
          average={average}
        />
        <div id={"overall" + visible}>
          <Correct
            corr={corr}
            visible={visible}
          />
          <Incorrect
            incorr={incorr}
            visible={visible}
          />
          <Normal
            normal={normal}
            visible={visible}
          />
        </div>
        <Input
          newWord={newWord}
          setNewWord={setNewWord}
          onBS={onBS}
          changeCol={changeCol}
          visible={visible}
        />
      </div>
    </>
  );}
  else{
    return(
      <div className="trans">
       <h1 id="reach"> REACHING SERVER...</h1>
      </div>
    )
    
    }
  }


export default App;
