export function truncateString(inputString: string, maxLength: number) {
    return inputString.length <= maxLength
        ? inputString
        : inputString.substring(0, maxLength) + "...";
}

export function getFirstLetter(inputString: string): string {
    return inputString.charAt(0).toUpperCase();
}
