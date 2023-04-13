import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const BreadCumb = props => {
    const bclist = [];
    props.site[0].breadcrumbs.forEach(data => {
        bclist.push(<Breadcrumb.Item href={data.link}>{data.name}</Breadcrumb.Item>)
    });
    return (
        <Container fluid className="bg-gray">
            <Row>
                <Col style={{ padding: "20px 50px" }}>
                    <Breadcrumb style={{ marginBottom: "-8px" }}>
                        {bclist}
                    </Breadcrumb>
                    <h3 className="m-0">{props.site[0].title}</h3>
                </Col>
            </Row>
        </Container>
    )

}

export default BreadCumb