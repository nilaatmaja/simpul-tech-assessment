import { QuicksChatType } from "@/types/QuicksType";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BubbleChat from "../BubbleChat/BubbleChat";

const Chat = (props: QuicksChatType) => {
    const { onBack } = props;
    const [message, setMessage] = useState("");

    const handleOnChange = (e: React.SyntheticEvent<HTMLElement>) => {
        const content = e.currentTarget.textContent || "";
        setMessage(content);
    };

    const handleSend = () => {
        console.log("message :>> ", message);
        // TODO: Integrate with dummy API
        // to get random string and show as new message
    };

    return (
        <>
            <div className="p-5 border border-transparent border-b-stone-300 flex gap-5">
                <div className="flex items-center justify-center">
                    <ArrowLeftIcon
                        onClick={onBack}
                        className="cursor-pointer"
                        height={24}
                        width={24}
                    />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <span className="text-primaryBlue font-bold text-sm">
                        I-589 - AMARKHIL, Obaidullah [Affirmative Filing with
                        ZHN]
                    </span>
                    <span className="text-xs">3 Participants</span>
                </div>
                <div className="flex items-center justify-center">
                    <XMarkIcon
                        onClick={onBack}
                        className="cursor-pointer"
                        height={24}
                        width={24}
                    />
                </div>
            </div>

            <div className="p-5 pt-0 overflow-auto">
                {/* TODO: Implement chat looping when the API is available  */}
                {/* chat */}
                <BubbleChat
                    isSelfMessage
                    name="You"
                    message="No worries. It will be completed ASAP. I've asked him yesterday."
                    time="19:32"
                />

                {/* date */}
                <div className="flex py-3 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 font-bold text-sm">
                        Today June 09, 2021
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                {/* chat */}
                <BubbleChat
                    isSelfMessage={false}
                    name="Mary Hilda"
                    message="No worries. It will be completed ASAP. I've
                    asked him yesterday."
                    time="19:32"
                    // The user index will be assigned based on a unique ID. Each new unique ID will increment the user index from the previous one.
                    // userIndex is used to cycle through available chat styles, ensuring a consistent appearance for each user.
                    userIndex={0}
                />

                {/* chat */}
                <BubbleChat
                    isSelfMessage
                    name="You"
                    message=" Please contact Mary for questions regarding the
                    case bcs she will be managing your forms from
                    now on! Thanks Mary."
                    time="19:32"
                />

                {/* chat */}
                <BubbleChat
                    isSelfMessage={false}
                    name="Mary Hilda"
                    message="Sure thing, Claren"
                    time="19:32"
                    userIndex={0}
                />

                {/* New Message */}
                <div className="flex py-3 items-center">
                    <div className="flex-grow border-t border-red-500"></div>
                    <span className="flex-shrink mx-4 font-bold text-sm text-red-500">
                        New Message
                    </span>
                    <div className="flex-grow border-t border-red-500"></div>
                </div>

                {/* chat */}
                <BubbleChat
                    isSelfMessage={false}
                    name="Obaidullah Amarkhil"
                    message="Morning. I'll try to do them. Thanks"
                    time="19:32"
                    userIndex={1}
                />
            </div>

            {/* Input Message */}

            <div className="flex items-end p-5 border border-t-[#DBDBDB] gap-3">
                <div className="flex w-5/6 relative">
                    <div
                        className="w-full leading-10 border border-stone-300 rounded-md p-1 px-2 resize-none whitespace-pre-wrap focus:outline-none"
                        onInput={handleOnChange}
                        contentEditable
                    ></div>
                    {!message && (
                        <div className="absolute top-1/2 -translate-y-1/2 left-2 text-sm text-gray-400 pointer-events-none">
                            Type a new message
                        </div>
                    )}
                </div>
                <button
                    onClick={handleSend}
                    className="bg-blue-500 h-[50px] flex-grow rounded-md text-white font-bold p-2 px-4 hover:bg-blue-600 duration-150"
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default Chat;
