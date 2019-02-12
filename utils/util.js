const convertUTCTimeToLocalTime = UTCDateString =>{
  if (!UTCDateString) {
    return '-';
  }
  function formatFunc(str) {    //格式化显示
    return str > 9 ? str : '0' + str
  }
  var date2 = new Date(UTCDateString);     //这步是关键
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = date2.getHours();
  hour = hour >= 12 ? hour - 12 : hour;
  hour = formatFunc(hour);
  var min = formatFunc(date2.getMinutes());
  var dateStr = year + '-' + mon + '-' + day + ' ' + ' ' + hour + ':' + min;
  return dateStr;
}

const clearNilStr = currentText =>{
  return  currentText||'';
}

module.exports = {
  formatTime: convertUTCTimeToLocalTime,
  clearNilStr: clearNilStr
}
