function toggleDropdown()
{
    let navBarToggle = document.getElementById("navBarToggle");
    if (navBarToggle.className === "topNav")
    {
        navBarToggle.className += " responsive";
    }
    else
    {
        navBarToggle.className = "topNav";
    }
}
