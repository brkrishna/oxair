import { Row, Col } from "react-bootstrap";
//import Image from "next/image";

const LeftImageRightContent = ({ imageSrc, children }) => {
  return (
    <>
      <Row className="mt-50">
        <Col md={4}>
          <img
            src={imageSrc}
            alt=""
            //height={ImgHeightClass}
            objectFit="fill"
            //width={500}
      //height={500}
      className="w-100"
         />
        </Col>
        <Col md={8}>{children}</Col>
      </Row>
    </>
  );
};

export default LeftImageRightContent;
