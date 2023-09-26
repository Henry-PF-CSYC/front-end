import { useState } from "react"
import { Badge, Button, Modal } from "react-bootstrap"
import { Cart } from "./Cart"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const IconCart = () => {

    const [show, setShow] = useState(false)
    const servicesCart = useSelector(state => state.cartServices)
    const openModal = () => setShow(!show)

    return (
        <div className="ms-3">
            <Button className="py-1 ps-2 pe-3" variant="dark" onClick={openModal}>
                <i class="bi bi-cart fs-3"></i>
                <Badge bg="outline-dark" className="fs-4 ps-1 pe-0">{servicesCart.length}</Badge>
            </Button>

            <Modal show={show} onHide={openModal} size="lg" className="border-0">
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title className="fw-bold fs-2">
                        Carrito de compras
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mx-5">
                        <Cart />
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 me-5">
                    <Link to={'cart'}>
                        <Button variant="outline-dark" className="px-4" onClick={openModal}>
                            Ir al carrito
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
