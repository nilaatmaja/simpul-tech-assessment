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
