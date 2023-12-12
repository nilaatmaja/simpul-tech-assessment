export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric", // Change this to '2-digit' if you want a two-digit year
        hour: "numeric",
        minute: "numeric",
        hour12: false, // Set to false to use 24-hour time format
        timeZone: "UTC", // Optionally set a specific time zone
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
        undefined,
        options
    );

    return formattedDate;
}

export function formatSimpleDate(inputDate: string): string {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const calculateDaysLeft = (inputDate: string): string | null => {
    const targetDate = new Date(inputDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (targetDate < today) {
        return null;
    }

    const timeDifference = targetDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return `${daysLeft} Day${daysLeft === 1 ? "" : "s"} Left`;
};
