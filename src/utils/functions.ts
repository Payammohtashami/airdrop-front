export function toFarsiNumber(n: String | Number = '') {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, (x: any) => farsiDigits[x]);
}