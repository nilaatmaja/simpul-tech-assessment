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

export interface TaskItem {
    id: string;
    title: string;
    createdDate: string;
    isExpand: boolean;
    date: string;
    description: string | null;
    isChecked: boolean;
}

export interface TaskListProps {
    data: TaskItem[];
}
