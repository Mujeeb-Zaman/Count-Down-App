const endDate = "19 November 2023 01:04:00 AM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;
    console.log(end);
    console.log(now);
    console.log(diff);

    if (diff < 0) return;

// Now we have to break down time into days, hours, minutes and seconds.

// convert into days
    // console.log(Math.floor(diff/1000/3600/24));
    inputs[0].value = Math.floor(diff/1000/3600/24);

// convert into hours
    // console.log(Math.floor(diff/1000/3600) % 24);
    inputs[1].value = Math.floor(diff/1000/3600) % 24;

// convert into minutes
    // console.log(Math.floor(diff/1000/60) % 60);
    inputs[2].value = Math.floor(diff/1000/60) % 60;

// convert into seconds
    // console.log(Math.floor(diff/1000) % 60);
    inputs[3].value = Math.floor(diff/1000) % 60;

}

//initial call
clock();

setInterval(
    () => {
        clock();
    },
    1000
)