// =========================
// TOAST MESSAGE
// =========================

function toast(message) {

    const toastBox = document.getElementById("toast");

    toastBox.textContent = message;

    toastBox.classList.add("show");

    setTimeout(function () {
        toastBox.classList.remove("show");
    }, 3000);
}


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const nav = document.getElementById("navContainer");

    nav.classList.toggle("menu-open");
}


// =========================
// AUTH MODAL
// =========================

function openModal(mode) {

    const modal = document.getElementById("authModal");

    modal.classList.add("show");

    switchAuth(mode);
}


function closeModal() {

    document
        .getElementById("authModal")
        .classList.remove("show");
}


function closeModalOutside(event) {

    if (
        event.target ===
        document.getElementById("authModal")
    ) {
        closeModal();
    }
}


function switchAuth(mode) {

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    const loginTab =
        document.getElementById("loginTab");

    const registerTab =
        document.getElementById("registerTab");


    if (mode === "login") {

        loginForm.classList.add("active");
        registerForm.classList.remove("active");

        loginTab.classList.add("active");
        registerTab.classList.remove("active");

    } else {

        loginForm.classList.remove("active");
        registerForm.classList.add("active");

        loginTab.classList.remove("active");
        registerTab.classList.add("active");

    }
}


// =========================
// LOGIN
// =========================

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        closeModal();

        toast(
            "Login successful! This is a frontend demo."
        );

    });


// =========================
// REGISTER
// =========================

document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        closeModal();

        toast(
            "Account created successfully! Demo only."
        );

    });


// =========================
// REPORT WASTE
// =========================

document
    .getElementById("reportForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const complaintId =
            "WC-" +
            Math.floor(
                1000 +
                Math.random() * 8999
            );


        document.getElementById(
            "trackingId"
        ).value = complaintId;


        document.getElementById(
            "complaintId"
        ).textContent = complaintId;


        const reportCount =
            document.getElementById("reportCount");


        reportCount.textContent =
            parseInt(reportCount.textContent) + 1;


        toast(
            "Waste report submitted successfully! ID: " +
            complaintId
        );


        this.reset();

    });


// =========================
// PICKUP REQUEST
// =========================

document
    .getElementById("pickupForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const pickupCount =
            document.getElementById("pickupCount");


        pickupCount.textContent =
            parseInt(pickupCount.textContent) + 1;


        toast(
            "Waste pickup request submitted successfully!"
        );


        this.reset();

    });


// =========================
// COMPLAINT TRACKING
// =========================

function trackComplaint() {

    const id =
        document
            .getElementById("trackingId")
            .value
            .trim();


    if (!id) {

        toast(
            "Please enter a complaint ID."
        );

        return;
    }


    document.getElementById(
        "complaintId"
    ).textContent = id;


    document.getElementById(
        "complaintDescription"
    ).textContent =
        "Complaint " +
        id +
        " is currently being processed by the waste management team.";


    document.getElementById(
        "complaintStatus"
    ).textContent = "In Progress";


    toast(
        "Complaint " + id + " found."
    );
}


// =========================
// MINIMUM PICKUP DATE
// =========================

const pickupDate =
    document.getElementById("pickupDate");


const today =
    new Date().toISOString().split("T")[0];


pickupDate.setAttribute(
    "min",
    today
);


// =========================
// CLOSE MOBILE MENU
// =========================

document
    .querySelectorAll(".nav-links a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navContainer")
                    .classList.remove("menu-open");

            }
        );

    });