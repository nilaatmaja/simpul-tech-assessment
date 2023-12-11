import { NotificationType } from "@/types/NotificationType";

const notificationColor = {
    red: "bg-primaryRed",
    blue: "bg-primaryBlue",
    orange: "bg-primaryOrange",
};

const Notification = (props: NotificationType) => {
    const { color = "red" } = props;
    return (
        <div
            className={`h-[10px] w-[10px] ${notificationColor[color]} rounded-full`}
        ></div>
    );
};

export default Notification;
