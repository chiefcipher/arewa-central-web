import React, { FormEventHandler, useState } from "react";
import { SectionHeader } from "../../atoms/sectionHeaders/sectionHeaders";
import { Seo } from "../../atoms/seo/seo";
import styles from "./trackOrder.module.scss";
import { FormMessage } from "../../atoms/formMessage/formMessage";
import { I_FormMessage, I_Order } from "../../../typescript/interfaces";
import { E_Order_Remark, E_Order_Status } from "../../../typescript/enums";
import { Icon } from "@iconify/react";
export function TrackOrder(): JSX.Element {
  const [orderId, setOrderId] = useState<string>("");
  const [order, setOrder] = useState<I_Order | null>(null);
  const [isLoadingOrder, setLoadingOrder] = useState<boolean>(false);
  const [formMessage, setFormMessage] = useState<I_FormMessage>({
    type: "",
    content: "",
  });
  const sampleOrder = {
    date: "20 Nov 2023",
    orderId: "#394949494",
    status: E_Order_Status.delivered,
    amount: 30000,
    quantity: 40,
    remark: E_Order_Remark.refunded,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!orderId) {
      setFormMessage({ type: "error", content: "Enter order id" });
      return;
    }
    setLoadingOrder(true);
    setTimeout(() => {
      setOrder(sampleOrder);
      setLoadingOrder(false);
    }, 3000);
  };
  return (
    <div className={styles.trackOrder}>
      {/* <Seo title="Track Order" description="Track your orders" /> */}
      <SectionHeader>Track Order</SectionHeader>
      <p>Use order id to search for order</p>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Order Id</label>
            <input
              type="text"
              value={orderId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setOrderId(e.target.value);
              }}
              placeholder="Order Id"
            />
          </p>
          <FormMessage {...formMessage} />
          <button type="submit" disabled={isLoadingOrder}>
            {isLoadingOrder ? (
              <Icon icon="fa:spinner" className={"spinner"} />
            ) : (
              "Retrieve Details"
            )}
          </button>
        </form>
      </div>
      {order && (
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Order ID </th>
                <th>Amount </th>
                <th>Quantity </th>
                <th>Status </th>
                <th>Remark </th>
                {/* <th>Action </th> */}
              </tr>
            </thead>
            <tbody>
              {
                <tr className={styles.order}>
                  <td>{1}</td>
                  <td>{order.date}</td>
                  <td>{orderId}</td>
                  <td>₦ {order.amount}</td>
                  <td>{order.quantity}</td>
                  <td>
                    {order.status === E_Order_Status.delivered ? (
                      <button className={"greenTableBtn"} title="Delivered">
                        <Icon icon="mdi:package-delivered" />
                        <span>Delivered</span>
                      </button>
                    ) : order.status === E_Order_Status.processing ? (
                      <button className={"orangeTableBtn"} title="Pending">
                        <Icon icon="material-symbols-light:pending" />
                        <span>Processing</span>
                      </button>
                    ) : order.status ===
                      E_Order_Status.in_state_of_residence ? (
                      <button
                        className={"blueTableBtn"}
                        title="In state of residence"
                      >
                        <Icon icon="mingcute:location-fill" />
                        <span>In State</span>
                      </button>
                    ) : order.status === E_Order_Status.declined ? (
                      <button className={"redTableButton"} title="Declined">
                        <Icon icon="material-symbols-light:cancel" />
                        <span>Declined</span>
                      </button>
                    ) : (
                      <button className={"blueTableBtn"} title="On transit">
                        <Icon icon="ph:car-fill" />
                        <span>On Transit</span>
                      </button>
                    )}
                  </td>
                  <td>{order.remark}</td>
                  {/* <td>
                  <button >
                    <Icon icon="ic:delete" />
                  </button>
                </td> */}
                  {/* TODO ALLOW THIS DELETE FUNCTION WORK  */}
                </tr>
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
