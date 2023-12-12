import { QuicksChatType } from "@/types/QuicksType";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import BubbleChat from "./BubbleChat/BubbleChat";
import { axios } from "@/utils/API/config";

const Chat = (props: QuicksChatType) => {
    const { onBack } = props;
    const contentEditableRef = useRef<HTMLDivElement | null>(null);
    const bottomOfChatRef = useRef<HTMLDivElement | null>(null);
    const [inputMessage, setInputMessage] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    // NOTE: The following code is intended for demo purposes only.
    const [messages, setMessages] = useState<
        { message: string; name: string; self: boolean }[]
    >([]);

    useEffect(() => {
        scrollChatToBottom();
    }, []);

    const handleOnChange = (e: React.SyntheticEvent<HTMLElement>) => {
        const content = e.currentTarget.textContent || "";
        setInputMessage(content);
    };

    const handleSend = async () => {
        if (!inputMessage) return;
        setMessages((prev) => [
            ...prev,
            {
                message: inputMessage,
                name: "You",
                self: true,
            },
        ]);
        setInputMessage("");
        if (contentEditableRef.current) {
            contentEditableRef.current.innerHTML = "";
        }
        setIsFetching(true);
        try {
            const response = await axios("/comment", {});
            const { data } = response.data;
            const newData = data[Math.floor(Math.random() * data.length)];
            setMessages((prev) => [
                ...prev,
                {
                    message: newData.message,
                    name: `${newData.owner.firstName} ${newData.owner.lastName}`,
                    self: false,
                },
            ]);
        } catch (error) {
            console.error("Error sending data:", error);
        }
        setIsFetching(false);
    };

    const scrollChatToBottom = () => {
        if (bottomOfChatRef.current) {
            bottomOfChatRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        scrollChatToBottom();
    }, [messages]);

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
                    message="Please contact Mary for questions regarding the
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

                {/* 
                    NOTE: The following code is intended for demo purposes only. 
                    It does not reflect production-ready or optimized code. 
                    Make sure to replace it with appropriate implementations in a real-world scenario.
                */}
                {messages.length
                    ? messages.map((item, index) => (
                          <BubbleChat
                              key={`msg-${index}`}
                              isSelfMessage={item.self}
                              name={item.name}
                              message={item.message}
                              time={new Date().toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                              })}
                              userIndex={0}
                          />
                      ))
                    : null}

                {isFetching && (
                    <div className="typing mt-5">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                )}
                <div ref={bottomOfChatRef} className="invisible" />
            </div>

            {/* Input Message */}

            <div className="flex items-end p-5 border border-t-[#DBDBDB] gap-3">
                <div className="flex w-5/6 relative">
                    <div
                        ref={contentEditableRef}
                        className="w-full leading-10 border border-stone-300 rounded-md p-1 px-2 resize-none whitespace-pre-wrap focus:outline-none"
                        onInput={handleOnChange}
                        contentEditable
                    ></div>
                    {!inputMessage && (
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
