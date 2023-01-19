import { useRef, useState } from "react";
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, FormControl, Modal } from "react-bootstrap";

export const ProgressBar = () => {
    //ESTADOS
    const [now, setNow] = useState(0);
    const [intervalState, setIntervalState] = useState(null)
    const inputRef = useRef(null)//toma al imput
    const [btnDisable, setBtnDisable] = useState(true)
    const [showModal, setShowModal] = useState(false)

    //MANEJADORES
    const handleDownload = () => {//manejador para onclick en boton
        const valueInput = +inputRef.current?.value//accede al valor escrito en input
        const isValueValid = !isNaN(valueInput) && valueInput > 0 && valueInput < 101//comprobando si es numero y si esta en los parametros de %
        setShowModal(!isValueValid)//se agrega el booleano a showModal para mostrar el modal de advertencia

        if (intervalState) {//esto es para evitar que se sumen varios intervalos a la vez
            clearInterval(intervalState)
        }

        if (isValueValid) {//si isValidValue es true

            const interval = setInterval(() => {//se guarda la funcion setInterval de js vanilla BUSCAR intervalos
                setNow((now) => {//setNow cambia el estado de now
                    if (now === +valueInput) {
                        clearInterval(interval)//se corta la funcion declarada
                        return now//retorna el valor en el que se detuvo
                    }
                    return now + 1//continua iterando
                })
            }, 1000)//milisegundos
            setIntervalState(interval)//mantiene el estado del  intervalo ej se detiene en 8 y lo guarda en intervaleState
        } else {
            handleReset()
        }
    }
    const handleReset = () => {
        setNow(0)//resetea la barra a 0
        clearInterval(intervalState)//trae interval state y lo corta
    }
    const handleChange = ({ target: { value } }) => {//en este caso sse desestructura el evento tomanto su propiedad target y de ella value
        setBtnDisable(!!!+value)//!! se transforma en booleano si tiene algo es "true" con un ! mas es negado o sea "false"
    }
    const handleClose=()=>{//cerrar modal desde cruz
        setShowModal(false)
    }

    return (
        <Container>
            <Row className="mt-5">
                {/* xs o lg son atributos de col-boostrap */}
                <Col xs={12} lg={{ span: 6, offset: 2 }} className="text-center">
                    <Card style={{ width: "40rem" }} className="m-auto">
                        <Card.Body>
                            <Card.Title>ProgressBar</Card.Title>
                            <BarProgress animated now={now} label={`${now}%`} variant="success" />
                            <FormControl ref={inputRef} placeholder="Ingrese porcentaje" className="my-3" onChange={handleChange}>

                            </FormControl>
                            <Button variant="primary" className="mx-1" onClick={handleDownload} disabled={btnDisable}>Go somewhere</Button>
                            <Button variant="danger" onClick={handleReset}>Reiniciar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <h2 className="text-danger text-center py-4">
                            ERROR.. ❌
                        </h2>
                        <p className="text-muted fs-4 text-center">
                            Solo se acepta valores numéricos. El valor debe ser
                            mayor a 0 y menor a 100.
                        </p>
                    </>

                </Modal.Body>

            </Modal>
        </Container>
    );
}
