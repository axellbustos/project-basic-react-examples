import { Container, Row, Col, Button, Toast } from "react-bootstrap"
import { useShow } from "../../hooks/useState"

export const ShowHiddeMessage = () => {
    const{show,handleShowMessage}=useShow(false)//ver hook useState
    return (
        <Container>
            <Row className="mt-5">
                {/* xs o lg son atributos de col-boostrap */}
                <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
                    <Button  className="mb-2" onClick={handleShowMessage} variant={show ? 'danger':'success'}>
                        {show ? 'Ocultar':'Mostrar'} mensaje
                    </Button>
                    <Toast show={show} /*onClose={}*/ className="m-auto">
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    )

}