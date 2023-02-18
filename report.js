let reportData = JSON.parse(localStorage.getItem("report"))
console.log(reportData)

reportData.map((el)=>{
    let score = 0;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.question;
    let td2 = document.createElement("td");
    td2.innerText = el.answer;
    let td3 = document.createElement("td");
    td3.innerText = el.FinalAnswer;
    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr)
    if(reportData.FinalAnswer === reportData.answer){
        score++
    }
    document.querySelector("#score").innerText = score;
    console.log(score)
})