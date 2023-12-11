import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

type Props = {
    isSelfMessage: boolean;
    message: string;
    name: string;
    time: string;
    // The user index will be assigned based on a unique ID. Each new unique ID will increment the user index from the previous one.
    // userIndex is used to cycle through available chat styles, ensuring a consistent appearance for each user.
    userIndex?: number | null;
};

const BubbleChat = (props: Props) => {
    const { isSelfMessage, name, message, time, userIndex } = props;

    const listStyle = [
        {
            nameColor: "text-chatOrange",
            bgColor: "bg-chatbgOrange",
        },
        {
            nameColor: "text-chatGreen",
            bgColor: "bg-chatbgGreen",
        },
    ];

    const bubbleStyle = {
        nameDirection: isSelfMessage ? "items-end" : "items-start",
        bubbleDirection: isSelfMessage ? "" : "flex-row-reverse",
        nameColor: isSelfMessage
            ? "text-chatPurple"
            : listStyle[userIndex || 0 % listStyle.length].nameColor,
        bgColor: isSelfMessage
            ? "bg-chatbgPurple"
            : listStyle[userIndex || 0 % listStyle.length].bgColor,
    };

    return (
        <div
            className={`flex flex-col ${bubbleStyle.nameDirection} text-sm gap-1 my-2`}
        >
            <span className={`font-bold ${bubbleStyle.nameColor}`}>{name}</span>
            <div
                className={`flex gap-2 w-full justify-end ${bubbleStyle.bubbleDirection} items-start`}
            >
                <EllipsisHorizontalIcon
                    className="cursor-pointer"
                    onClick={() => {}}
                    height={24}
                    width={24}
                />
                <div
                    className={`flex flex-col max-w-[70%] ${bubbleStyle.bgColor} p-3 rounded-md gap-2`}
                >
                    <span>{message}</span>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default BubbleChat;
