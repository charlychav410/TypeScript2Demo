interface Date {
addDaysToCurrentDay(days: number): Date;
format():string;
}

Date.prototype.addDaysToCurrentDay = function(days: number):Date{
let dat = new Date(this.valueOf());
dat.setDate(dat.getDate() + days);
return dat;
}

Date.prototype.format = function() : string{
    let dat = new Date(this.valueOf());
//return dat.toLocaleDateString();
var mes=dat.getMonth();
let cad: string;
 cad = `${dat.getDate()}/0${++mes}/${dat.getFullYear()}`;
//`${dat.getDate()}${++mes}${dat.getFullYear()}`
//return `${dat.getDate()}/${++mes}/${dat.getFullYear()}`
return cad

}

window.onload = function(){
var currentDay = new Date();
console.log(currentDay.format());
}