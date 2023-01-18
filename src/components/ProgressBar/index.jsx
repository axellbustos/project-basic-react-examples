import { useRef, useState } from "react";
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, FormControl } from "react-bootstrap";

export const ProgressBar = () => {
    const [now, setNow] = useState(0);
    const inputRef = useRef(null)

    const handleDownload=()=>{//manejador para onclick en boton
        const valueInput = inputRef.current.value
        const interval = setInterval(()=>{//se guarda la funcion setInterval de js vanilla BUSCAR intervalos
            setNow((now)=>{//setNow cambia el estado de now
                if(now === +valueInput){
                    clearInterval(interval)//se corta la funcion declarada
                    return now//retorna el valor en el que se detuvo
                }
                return now + 1//continua iterando
            })
        },1000)//milisegundos
    }
  return (
    <Container>
      <Row className="mt-5">
        {/* xs o lg son atributos de col-boostrap */}
        <Col xs={12} lg={{ span: 6, offset: 2 }} className="text-center">
          <Card style={{ width: "40rem" }} className="m-auto">
            <Card.Body>
              <Card.Title>ProgressBar</Card.Title>
              <BarProgress animated now={now} label={`${now}%`} variant="success"/>
              <FormControl ref={inputRef} placeholder="Ingrese porcentaje" className="my-3">

              </FormControl>
              <Button variant="primary" onClick={handleDownload}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
