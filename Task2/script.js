
function showMemberCard(name, age, email, phone, membership) {

    let sections = [
        "Fiction",
        "Science",
        "History",
        "Technology"
    ];

    console.log("Library Sections:");

    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);
    }

    let category = (age < 13 ? "Junior" : "Regular");

    let fee = (membership == "Basic" ? 500 :
               membership == "Silver" ? 1000 : 2000);

    document.getElementById("output").innerHTML =
        "<h2>Library Membership Card</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Category: " + category + "<br>" +
        "Membership Plan: " + membership + "<br>" +
        "Membership Fee: " + fee + " BDT";

}

document.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("fullname").value;

    let age =
        Number(document.getElementById("age").value);

    let email =
        document.getElementById("email").value;

    let phone =
        document.getElementById("phone").value;

    let membership =
        document.querySelector(
            'input[name="membership"]:checked'
        ).value;

    showMemberCard(
        name,
        age,
        email,
        phone,
        membership
    );

});
