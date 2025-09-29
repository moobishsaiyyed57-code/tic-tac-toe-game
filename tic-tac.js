let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let hide = document.querySelector(".hide");
let masgcontainer = document.querySelector(".mas-container");
let newbtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset-btn");



let turn = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turn == true) {
            box.innerText = "O";
            turn = false
        } else {
            box.innerText = "x";
            turn = true
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();

        if (count === 9 && !iswinner) {
            gamedraw();
        }
    });
});

const gamedraw = () => {

    msg.innerText = `game is draw .`
    masgcontainer.classList.remove("hide");
    resetbox();
}

const checkWinner = () => {
    for (let patern of winPatterns) {
        let pos1val = boxes[patern[0]].innerText;
        let pos2val = boxes[patern[1]].innerText;
        let pos3val = boxes[patern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner is ", pos1val)
                masgcontainer.classList.remove("hide");
                msg.innerText = `winner is ${pos1val}`
                disableBoxes();


                return true; 
            };
        };
    };
    return false;
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

newbtn.addEventListener("click", () => {
    enablebox();
    masgcontainer.classList.add("hide");

});

resetbtn.addEventListener("click", () => {
    resetbox();
    masgcontainer.classList.add("hide");

});


const enablebox = () => {
    for (box of boxes) {
        box.innerText = ""
        box.disabled = false;
        turn = true;
        count = 0;
    };
};
const resetbox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
        turn = true;
        count = 0;
    }
}; 