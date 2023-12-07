export function toFarsiNumber(n: String | Number = '') {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, (x: any) => farsiDigits[x]);
};

export function isoToDate(createdAt: any, hours?: any, year?: any) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dt = new Date(createdAt);
    if (hours) {
      return (
        dt.getDate() +
        " " +
        monthNames[dt.getMonth()] +
        " " +
        dt.getFullYear() +
        " - " +
        dt.getHours() +
        " : " +
        dt.getMinutes()
      );
    }
    if (year) {
      return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    } else {
      return (
        dt.getFullYear() +
        "-" +
        (dt.getMonth() + 1) +
        "-" +
        dt.getDate() +
        " / " +
        dt.getHours() +
        " : " +
        dt.getMinutes()
      );
    }
  }