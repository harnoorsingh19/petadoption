function submitInquiry(event) 
{
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pet = document.getElementById("pet-type").value;
    const month = document.getElementById("month").value;
    const result = document.getElementById("inquiry-result");

    if (name && email && pet-type && month == true)
    {
        result.textContent = "Thank you, $name Your inquiry has been submitted!";
        document.getElementById("inquiry-form").reset();
    } 
    else 
    {
        result.textContent = "Please fill in all fields.";
    }
}