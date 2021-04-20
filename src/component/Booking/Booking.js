import Navbar from "../Shared/Navbar/Navbar";
import Book from "./Book";
import "./Booking.css";

const Booking = ({order}) => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="row w-100">
        <div className="col-md-9">
          <Book order={order}></Book>
        </div>
        <div className="col-md-3 order-card">
          <div>
            <div>
              <h5>{order.serviceName}</h5>
              <h6>Service Charge: {order.charge}</h6>
              <h5>How do inspections work?</h5>
              <p>
                How do inspections work? Your technician will fully inspect your
                appliance and provide a quote for the recommended repair. If you
                wish to move forward with the repair, we will deduct the
                inspection fee ${order.charge} from the total price of the repair. You can
                also decline the repair and simply pay ${order.charge} for the inspection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
