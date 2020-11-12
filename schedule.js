$(document).ready(function () {
    $("#Sunday").click(setSunday);
    $("#Monday").click(setMonday);
    $("#Tuesday").click(setTuesday);
    $("#Wednesday").click(setWednesday);
    $("#Thursday").click(setThursday);
    $("#Friday").click(setFriday);
    $("#Saturday").click(setSaturday);


    function setSunday(event) {
        setDailySchedule("Sunday");
    }
    function setMonday(event) {
        setDailySchedule("Monday");
    }
    function setTuesday(event) {
        setDailySchedule("Tuesday");
    }
    function setWednesday(event) {
        setDailySchedule("Wednesday");
    }
    function setThursday(event) {
        setDailySchedule("Thursday");
    }
    function setFriday(event) {
        setDailySchedule("Friday");
    }
    function setSaturday(event) {
        setDailySchedule("Saturday");
    }

    function setDailySchedule(day) {
        var dailySchedule;

        switch (day)
        {
            case "Sunday":
                dailySchedule = "Church -- 8:15AM, Gym -- 10:00AM, Dinner Date -- 7:00PM";
                break;

            case "Monday":
                dailySchedule = "Spin Class -- 7:30AM, Work -- 9:30AM - 3:00PM, Math Class -- 3:45PM";
                break;

            case "Tuesday":
                dailySchedule = "Volunteering -- 8:15 - Noon, JavaScript Class -- 2:00PM, Work -- 7:00PM - 11:00PM";
                break;

            case "Wednesday":
                dailySchedule = "Nothing planned! Happy Hump Day! Whoop! Whoop!";
                break;

            case "Thursday":
                dailySchedule = "Work -- 7:00AM - 3:30PM";
                break;

            case "Friday":
                dailySchedule = "SQL Class -- 8:00AM, Kickboxing -- 4:00PM";
                break;

            case "Saturday":
                dailySchedule = "Work -- 8:00AM - 4:30PM";
                break;

        }
        $("#schedule").text(dailySchedule);
    }









});