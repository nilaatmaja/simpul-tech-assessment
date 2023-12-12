"use client";
import { useEffect, useState } from "react";
import QuicksButton from "./Button/QuicksButton";
import Inbox from "./Inbox";
import Chat from "./Chat";
import Task from "./Task";

const QuicksWidget = () => {
    const [isWidgetToolsVisible, setIsWidgetToolsVisible] = useState(false);
    const [isInboxOpen, setIsInboxOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isTaskOpen, setIsTaskOpen] = useState(false);
    const isPopupOpen = isInboxOpen || isChatOpen || isTaskOpen;

    const handleInboxMessageClick = (id: string) => {
        setIsInboxOpen(false);
        setIsChatOpen(true);
    };

    useEffect(() => {
        if (isInboxOpen) {
            setIsChatOpen(false);
            setIsTaskOpen(false);
        }
    }, [isInboxOpen]);

    useEffect(() => {
        if (isTaskOpen) {
            setIsChatOpen(false);
            setIsInboxOpen(false);
        }
    }, [isTaskOpen]);

    return (
        <div className="fixed bottom-10 right-10">
            <div className="flex flex-col gap-5 justify-end">
                {isPopupOpen && (
                    <div className="h-screen max-h-[65vh] w-[90vw] sm:w-[600px] bg-white rounded-md flex flex-col gap-3 shadow-widgetShadow border border-[#f4f4f4] overflow-y-auto">
                        {/* Inbox Component */}
                        {isInboxOpen && (
                            <Inbox onClick={handleInboxMessageClick} />
                        )}

                        {isChatOpen && (
                            <Chat onBack={() => setIsInboxOpen(true)} />
                        )}

                        {/* Task Component */}
                        {isTaskOpen && <Task />}
                    </div>
                )}

                {/* Quicks Button */}
                <div
                    className={`flex  relative ${
                        isPopupOpen ? "gap-7" : "gap-5"
                    } ${
                        isTaskOpen
                            ? "flex-row-reverse justify-start"
                            : "justify-end"
                    }`}
                >
                    {isWidgetToolsVisible && (
                        <QuicksButton
                            type="task"
                            onButtonClick={() => setIsTaskOpen((prev) => !prev)}
                            isActive={isTaskOpen}
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
