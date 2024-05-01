import React, { useEffect } from "react";
import PageContainer from "../../components/container/PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ManageBooking } from "../../assets/svgs/Svg";
import { DivCard } from "./styledCompo";
import Card from "./DashboardChilds/Card";
import SecondChild from "./DashboardChilds/SecondChild";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard_Data } from "../../redux/Slice/listingManageSlice";
import { Row, Col } from 'react-bootstrap'


const Dashboard = () => {
  const dispatch = useDispatch()
  const dashData = useSelector(state => state.Listing.dashBoardData)

  useEffect(() => {
    dispatch(Dashboard_Data())
    console.log("dashData==>", dashData);
  }, [])

  return (
    <PageContainer title={"Dashboard"} description={"Overview of all things"}>
      <ManageBooking color={"red"} />
      <div>
        <h2>Dashboard</h2>
        <p>A quick data overview</p>
      </div>
      <div className="rowLine">

        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Card value={dashData?.total_dues} dataType={"Total Dues"} />
          </Col>

          <Col xs={3} sm={3} md={3} lg={3}>
            <Card value={dashData?.total_orders} dataType={"Total Orders"} />
          </Col>

          <Col xs={3} sm={3} md={3} lg={3}>
            <Card value={dashData?.total_accepted_enquired} dataType={"Total Accepted Enquired"} />
          </Col>

          <Col xs={3} sm={3} md={3} lg={3}>
            <Card value={dashData?.total_accepted_orders} dataType={"Total Accepted Orders"} />
          </Col>
        </Row>
      </div>

      <div className="rowLine">
        <Row style={{ marginTop: "50px" }}>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Card value={dashData?.open_ticket} dataType={"Open Ticket"} />
          </Col>

        </Row>
      </div>

      <Row style={{ marginTop: "50px" }}>
        <Col xs={6} sm={6} md={6} lg={6}>
          <SecondChild value={dashData?.registered_users} dataType={"Registered Users"} value2={dashData?.pending_users} dataType2={"Pending Users"} head={"App Users"} />
        </Col>

        <Col xs={6} sm={6} md={6} lg={6}>
          <SecondChild value={dashData?.completed_orders} dataType={"Completed Orders"} value2={dashData?.pending_orders}
            dataType2={"Pending Orders"} head={"Total Orders"} />
        </Col>

        <Col xs={6} sm={6} md={6} lg={6} style={{ marginTop: "30px" }}>
          <SecondChild value={dashData?.total_amount} dataType={"Total Amount"} value2={dashData?.total_accepted_enquired} dataType2={"Total Vendors"} head={"Total Amount"} />
        </Col>

        <Col xs={6} sm={6} md={6} lg={6} style={{ marginTop: "30px" }}>
          <SecondChild value={dashData?.total_shipment_completed} dataType={"Completed"} value2={dashData?.total_shipment_in_transist} dataType2={"In Transist"} head={"Total Shipment"} />
        </Col>
      </Row>

    </PageContainer>
  );
};

export default Dashboard;
