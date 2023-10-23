function makePassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str += "*"
    }
    return str
}

function copyText(){}

const deletePassword = () => {}

const showPassword = () => {}

console.log("Working");
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Clicked....");
})
