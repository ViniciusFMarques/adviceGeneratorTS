import { CardContainer } from "./styles";
import desktopDivisor from '../../assets/styles/images/pattern-divider-desktop.svg';
import Button from "../Button";
import { useEffect, useState } from "react";
import AdvicesService from "../../services/AdvicesService";
import { AdviceObject } from "../types/Advice";

export default function Card(){
  const [adviceObject, setAdviceObject] = useState<AdviceObject>();

  useEffect(() => {
    (async () => {
      const response = await AdvicesService.getAdvice();
      setAdviceObject(response.slip);
    })()
    console.log('entrou useeffect')
  }, [])

 async function handleSetAdviceObject(){
  const response = await AdvicesService.getAdvice();
  setAdviceObject(response.slip);
 }

  return(
    <CardContainer>
      <h1>A D V I C E # {adviceObject && (
        adviceObject.id
      )}</h1>
      {adviceObject && (
        <p>"{adviceObject.advice}"</p>
      )}
      <img src={desktopDivisor} />
      <Button handleSetAdviceObject={handleSetAdviceObject}/>
    </CardContainer>
  )
}
