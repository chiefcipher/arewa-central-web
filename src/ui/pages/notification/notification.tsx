import React, { useState } from "react";
import { Seo } from "../../atoms/seo/seo";
import styles from "./notification.module.scss";
import { I_Notification } from "../../../typescript/interfaces";
import { LoadingUI } from "../../atoms/loadingUI/loadingUI";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../atoms/sectionHeaders/sectionHeaders";
import { formatDate } from "../../../typescript/utils";
import { NotificationIcon } from "../../../shared/assets";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { E_Pages } from "../../../typescript/enums";
export function Notification(): JSX.Element {
  const [notifications, setNotifications] = useState<I_Notification[] | null>(
    null
  );
  const [loadingNotifications, setLoadingNotifications] =
    useState<boolean>(true);
  setTimeout(() => {
    if (!notifications) {
      // fetch notification
      setTimeout(() => {
        setNotifications([
          {
            sender: "Admin 1",
            title: "Urgent update to process refund",
            content:
              "kindly update your bank account to process refund for your declined product",
            priority: "high",

            date: Date.now(),
          },
          {
            sender: "Admin 1",
            title: "Urgent update to process refund",
            content:
              "kindly update your bank account to process refund for your declined product",
            priority: "medium",
            date: Date.now(),
          },
          {
            sender: "Admin 1",
            title: "Urgent update to process refund",
            content:
              "kindly update your bank account to process refund for your declined product",
            priority: "low",
            date: Date.now(),
          },
        ]);
        setLoadingNotifications(false);
      }, 3000);
    }
  });

  if (loadingNotifications) {
    return <LoadingUI />;
  }
  return (
    <div className={styles.notification}>
      <Seo title="Notifications" description="View messages" />
      <SectionHeader>Notifications </SectionHeader>
      <SubSectionHeader>View Notifications </SubSectionHeader>
      <div className={styles.wrapper}>
        {notifications &&
          notifications.length > 0 &&
          notifications.map((notification, i) => (
            <div className={styles.notification} key={i}>
              <div className={styles.notificationIconPart}>
                {/* notification icon part */}
                <NotificationIcon />
              </div>
              <div className={styles.notificationTextPart}>
                <div>
                  <p>{formatDate(notification.date)}</p>
                  <p
                    style={{
                      color:
                        notification.priority === "high"
                          ? "red"
                          : notification.priority === "medium"
                          ? "orange"
                          : "grey",
                    }}
                  >
                    <span>Priority: </span>
                    <span> {notification.priority}</span>
                  </p>
                </div>
                <h3>{notification.sender}</h3>
                <h4>{notification.title}</h4>
                <p>{notification.content}</p>
              </div>
            </div>
          ))}
        {!notifications && (
          <div className={styles.noNotifications}>
            <Icon icon="material-symbols:error" />

            <h3>No notifications yet, kindly check back another time.</h3>
            <Link to={E_Pages.home}>Go to home page</Link>
          </div>
        )}
      </div>
    </div>
  );
}
