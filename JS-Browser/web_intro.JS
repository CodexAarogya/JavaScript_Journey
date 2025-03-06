alert("Welcome to tutorial of web and JS");
confirm("Do you want to continue tutorial ?")
if(confirm){
    alert("These are the most fundaments message boxes in JavaScript")
    let user = prompt("Type anything to display in the current page :")
    confirm("Do you want to display entered contents in current page ?")
    if(confirm){
        document.write(user)
    }
}