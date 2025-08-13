enum WeekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getWeekDay(day: WeekDays): string {
    return WeekDays[day];
}
for (let i = 0; i < 7; i++) {
    console.log(getWeekDay(i as WeekDays));
}