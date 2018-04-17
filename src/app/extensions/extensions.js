Date.prototype.addDaysToCurrentDay = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.format = function () {
    let dat = new Date(this.valueOf());
    var mes = dat.getMonth();
    let cad;
    cad = `${dat.getDate()}/0${++mes}/${dat.getFullYear()}`;
    return cad;
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay.format());
};
