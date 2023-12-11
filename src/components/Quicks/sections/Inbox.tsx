import React, { useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MultipleAvatar from "@/assets/icons/MultipleAvatar";
import Notification from "@/components/Notification/Notification";
import { truncateString, getFirstLetter } from "@/utils/helpers/String";
import inboxData from "@/data/dummy/inboxData.json";
import { formatDate } from "@/utils/helpers/Date";

type Props = {
    onClick: (id: string) => void;
};

const InboxComponent = (props: Props) => {
    const { onClick } = props;
    const [search, setSearch] = useState("");

    const filteredData = useMemo(() => {
        const normalizedSearch = search.toLowerCase();

        if (normalizedSearch) {
            return inboxData.filter((item) =>
                [
                    item.title.toLowerCase(),
                    item.lastMessage.toLowerCase(),
                    item?.lastUser?.toLowerCase() || "",
                ].some((property) => property.includes(normalizedSearch))
            );
        }

        return inboxData;
    }, [inboxData, search]);

    return (
        <div className="p-5">
            <div className="relative">
                <input
                    type="text"
                    className="border border-gray-300 outline-none text-slate-800 p-1 px-2 w-full text-sm"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search"
                />

                <MagnifyingGlassIcon className="h-4 w-4 text-primaryBlack absolute right-3 top-2" />
            </div>

            {filteredData.map((inbox, index) => (
                <div
                    key={`inbox-${index}`}
                    onClick={() => onClick(inbox.id)}
                    className={`flex pt-3 pb-5 gap-3 justify-between cursor-pointer hover:scale-[0.97] duration-300 relative ${
                        index !== inboxData.length - 1
                            ? "border border-transparent border-b-stone-300"
                            : ""
                    }`}
                >
                    <div className="flex gap-3 w-full justify-center">
                        <div className="w-[60px] flex justify-center">
                            {inbox.isMultipleChat ? (
                                <MultipleAvatar />
                            ) : (
                                <div className="h-[34px] w-[34px] bg-primaryBlue text-white rounded-full flex items-center justify-center">
                                    {getFirstLetter(inbox.title)}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col flex-1">
                            <div className="flex gap-3 w-full justify-between">
                                <div className="flex flex-col">
                                    <span className="text-primaryBlue font-bold text-sm mb-1">
                                        {inbox.title}
                                    </span>
                                    {inbox.lastUser && (
                                        <span className="font-bold text-xs">
                                            {inbox.lastUser}:
                                        </span>
                                    )}
                                    <span className="text-xs">
                                        {truncateString(inbox.lastMessage, 60)}
                                    </span>
                                </div>
                                <span className="text-primaryBlack font-normal text-sm whitespace-nowrap">
                                    {formatDate(inbox.date)}
                                </span>
                            </div>
                        </div>
                    </div>
                    {!inbox.isOpen && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            <Notification color="red" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InboxComponent;
