import CloudLightningIcon from "@/assets/icons/CloudLightningIcon";
import InboxIcon from "@/assets/icons/InboxIcon";
import TaskIcon from "@/assets/icons/TaskIcon";
import { QuicksButtonTypes } from "@/types/QuicksType";

const QuicksButton = (props: QuicksButtonTypes) => {
    const {
        type,
        onButtonClick,
        isActive,
        isHidden,
        showLabel = false,
    } = props;

    const buttonStyle = {
        widget: isHidden
            ? "pointer-events-none bg-[#4F4F4F] text-[#4F4F4F]"
            : "bg-primaryBlue text-white",
        inbox: isActive
            ? "bg-primaryPurple text-white"
            : "bg-primaryGray text-primaryPurple",
        task: isActive
            ? "bg-primaryOrange text-white"
            : "bg-primaryGray text-primaryOrange",
    };

    const buttonIcon = {
        widget: <CloudLightningIcon />,
        inbox: <InboxIcon />,
        task: <TaskIcon />,
    };

    return (
        <div
            className={`flex flex-col items-center justify-end gap-2 ${
                isHidden ? "-z-10 absolute bottom-0 right-3" : ""
            }`}
        >
            {showLabel ? <span className="capitalize">{type}</span> : null}
            <button
                onClick={onButtonClick}
                className={`${buttonStyle[type]} h-[68px] w-[68px] p-2 rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110`}
            >
                {buttonIcon[type]}
            </button>
        </div>
    );
};

export default QuicksButton;
