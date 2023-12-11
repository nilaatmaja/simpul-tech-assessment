export type QuicksButtonTypes = {
    type: "widget" | "inbox" | "task";
    onButtonClick: () => void;
    isActive?: boolean;
    isHidden?: boolean;
    showLabel?: boolean;
};

export type QuicksChatType = {
    onBack: () => void;
};
