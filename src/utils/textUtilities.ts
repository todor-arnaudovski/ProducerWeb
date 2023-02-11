export const truncate = (text: string | null, length: number, suffix: string) => {
    if (!text) return suffix;
    console.log(text.length, length);
    if (text.length <= length) return text;
    return text.slice(0, length) + suffix;
};
