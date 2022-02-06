console.log("background is running")

chrome.action.onClicked.addListener(buttonClicked)

function buttonClicked(){
    console.log("click")   
}