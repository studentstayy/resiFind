function searchAccommodation() {

    let location = document.getElementById("location").value;
    let budget = document.getElementById("budget").value;

    if (location === "" && budget === "") {

        alert("Please enter a location or budget.");

        return;
    }

    alert(
        "Searching for accommodation in " +
        location +
        " under R" +
        budget
    );
}


function viewDetails(name) {

    alert("You selected: " + name);

}
