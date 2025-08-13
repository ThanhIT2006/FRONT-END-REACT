var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
    WeekDays[WeekDays["Saturday"] = 5] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 6] = "Sunday";
})(WeekDays || (WeekDays = {}));
function getWeekDay(day) {
    return WeekDays[day];
}
for (let i = 0; i < 7; i++) {
    console.log(getWeekDay(i));
}
export {};
//# sourceMappingURL=BT1.js.map