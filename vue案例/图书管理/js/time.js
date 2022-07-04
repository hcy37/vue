function timestampToTime(time, format) {
    let timestamp;
    timestamp = time.length === 10 ? time * 1000 : time;
    if (!format) {
        format = "Y-M-D h:m:s";
    }
    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];
    var date = new Date(timestamp);
    returnArr.push(date.getFullYear());
    var m = date.getMonth() + 1;
    returnArr.push(m < 10 ? ('0' + m) : m);
    var d = date.getDate();
    returnArr.push(d < 10 ? ('0' + d) : d);
    var h = date.getHours();
    returnArr.push(h < 10 ? ('0' + h) : h);
    var m = date.getMinutes();
    returnArr.push(m < 10 ? ('0' + m) : m);
    var s = date.getSeconds();
    returnArr.push(s < 10 ? ('0' + s) : s);
    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}