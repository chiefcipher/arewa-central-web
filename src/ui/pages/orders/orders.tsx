import React, { useState } from "react";
import styles from "./orders.module.scss";
import { SectionHeader } from "../../atoms/sectionHeaders/sectionHeaders";
import { E_Order_Remark, E_Order_Status } from "../../../typescript/enums";
import { I_Order } from "../../../typescript/interfaces";
import { Icon } from "@iconify/react";
import { EmptyOrderUI } from "../../molecules/emptyOrderUI/emptyOrderUI";

export const Orders: React.FC = () => {
  // const [deleteOrderInfo, setDeleteOrderInfo] = useState({})
  // TODO PROMPT THEM THAT THE ORDER IS ONLY DELIVERED TO ANY OF NIGERIAN STATES ELSE IT WILL BE DECLINED and no refund

  const orders: I_Order[] = [
    {
      date: "20 Nov 2023",
      orderId: "#394949494",
      status: E_Order_Status.delivered,
      amount: 30000,
      quantity: 40,
      remark: E_Order_Remark.refunded,
    },
    {
      date: "20 Nov 2023",
      orderId: "#394949494",
      status: E_Order_Status.processing,
      amount: 30000,
      quantity: 40,
      remark: E_Order_Remark.processing_refund,
    },
    {
      date: "20 Nov 2023",
      orderId: "#394949494",
      status: E_Order_Status.in_state_of_residence,
      amount: 30000,
      quantity: 40,
      remark: E_Order_Remark.paid,
    },
    {
      date: "20 Nov 2023",
      orderId: "#394949494",
      status: E_Order_Status.on_transit,
      amount: 30000,
      quantity: 40,
      remark: E_Order_Remark.processing_refund,
    },
    {
      date: "20 Nov 2023",
      orderId: "#394949494",
      status: E_Order_Status.declined,
      amount: 30000,
      quantity: 40,
      remark: E_Order_Remark.processing_refund,
    },
  ];

  return false ? (
    <EmptyOrderUI />
  ) : (
    <div className={styles.orders}>
      <SectionHeader>Orders</SectionHeader>
      <div className={styles.wrapper}>
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
            {orders.map(
              ({ date, orderId, amount, quantity, status, remark }, i) => (
                <tr className={styles.order} key={i}>
                  <td>{i + 1}</td>
                  <td>{date}</td>
                  <td>{orderId}</td>
                  <td>₦ {amount}</td>
                  <td>{quantity}</td>
                  <td>
                    {status === E_Order_Status.delivered ? (
                      <button className={"greenTableBtn"} title="Delivered">
                        <Icon icon="mdi:package-delivered" />
                        <span>Delivered</span>
                      </button>
                    ) : status === E_Order_Status.processing ? (
                      <button className={"orangeTableBtn"} title="Pending">
                        <Icon icon="material-symbols-light:pending" />
                        <span>Processing</span>
                      </button>
                    ) : status === E_Order_Status.in_state_of_residence ? (
                      <button
                        className={"blueTableBtn"}
                        title="In state of residence"
                      >
                        <Icon icon="mingcute:location-fill" />
                        <span>In State</span>
                      </button>
                    ) : status === E_Order_Status.declined ? (
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
                  <td>{remark}</td>
                  {/* <td>
                  <button >
                    <Icon icon="ic:delete" />
                  </button>
                </td> */}
                  {/* TODO ALLOW THIS DELETE FUNCTION WORK  */}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
