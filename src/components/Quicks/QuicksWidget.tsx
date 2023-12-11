"use client";
import { useEffect, useState } from "react";
import QuicksButton from "./Button/QuicksButton";
import Inbox from "./sections/Inbox";
import Chat from "./sections/Chat";

const QuicksWidget = () => {
    const [isWidgetToolsVisible, setIsWidgetToolsVisible] = useState(false);
    const [isInboxOpen, setIsInboxOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const isPopupOpen = isInboxOpen || isChatOpen;

    const handleInboxMessageClick = (id: string) => {
        console.log("id :>> ", id);
        setIsInboxOpen(false);
        setIsChatOpen(true);
    };

    useEffect(() => {
        if (isInboxOpen) setIsChatOpen(false);
    }, [isInboxOpen]);

    return (
        <div className="fixed bottom-10 right-10">
            <div className="flex flex-col gap-5 justify-end">
                {isPopupOpen && (
                    <div className="h-screen max-h-[65vh] w-[90vw] sm:w-[500px] md:w-[600px] bg-white rounded-md flex flex-col gap-3 shadow-widgetShadow border border-[#f4f4f4] overflow-y-auto">
                        {/* Inbox Component */}
                        {isInboxOpen && (
                            <Inbox onClick={handleInboxMessageClick} />
                        )}

                        {/* Chat Component */}
                        {isChatOpen && (
                            <Chat onBack={() => setIsInboxOpen(true)} />
                        )}
                    </div>
                )}

                {/* Quicks Button */}
                <div
                    className={`flex justify-end relative ${
                        isPopupOpen ? "gap-7" : "gap-5"
                    }`}
                >
                    {isWidgetToolsVisible && (
                        <QuicksButton
                            type="task"
                            onButtonClick={() => {}}
                            isActive={false}
                            showLabel={!isPopupOpen}
                        />
                    )}

                    {isWidgetToolsVisible && (
                        <QuicksButton
                            type="inbox"
                            onButtonClick={() =>
                                setIsInboxOpen((prev) => !prev)
                            }
                            isActive={isInboxOpen || isChatOpen}
                            showLabel={!isPopupOpen}
                        />
                    )}

                    <QuicksButton
                        type="widget"
                        onButtonClick={() =>
                            setIsWidgetToolsVisible((prev) => !prev)
                        }
                        isHidden={isPopupOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuicksWidget;
