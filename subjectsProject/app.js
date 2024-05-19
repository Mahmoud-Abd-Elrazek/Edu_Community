const subjects = [
    {
        subjectName : "Web Devolopment" , 
        drName: "Amal", 
        subjectDisc: 'this is a disc...' , 
        subjectHour: '3' ,
        subjectDepartment : 'general' , 
        subjectCode: "CS202" , 
        Final: { 
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/5/2025",
            dateFormat:"May 5 2025 09:00:00"  
        } ,
        MidTerm:{
            month: '3' , 
            day:'5' , 
            hours: '3', 
            date: "25/6/2025",
            dateFormat:"May 1 2025 09:00:00" 
        } , 
        practical:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "2/7/2025",
            dateFormat:"May 5 2025 09:00:00"
        } , 
        oralExam : {
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "5/8/2025" , 
            dateFormat:"May 5 2025 09:00:00"
        } , 
    } , 
    {
        subjectName : "Data Base" , 
        drName: "Emad", 
        subjectDisc: 'this is a disc...' , 
        subjectHour: '3' ,
        subjectDepartment : 'general' , 
        subjectCode: "CS202" , 
        Final: { 
            month: '3' , 
            day:'5' , 
            hours: '3' ,
            date: "25/6/2025" , 
            dateFormat:"May 8 2025 09:00:00"
        } ,
        MidTerm:{
            month: '3' , 
            day:'5' , 
            hours: '3' ,
            date: "25/6/2025" , 
            dateFormat:"May 18 2025 09:00:00",
            
        } , 
        practical:{
            month: '3' , 
            day:'5' , 
            hours: '3',
            date: "25/6/2025" , 
            dateFormat:"May 15 2025 09:00:00"
             
        } , 
        oralExam : {
            month: '3' , 
            day:'5' , 
            hours: '3' ,
            date: "25/6/2025" , 
            dateFormat:"May 24 2025 09:00:00"
            
        } , 
    } , 
    {
        subjectName : "Data Structures" , 
        drName: "Nahla", 
        subjectDisc: 'this is a disc...' , 
        subjectHour: '3' ,
        subjectDepartment : 'general' , 
        subjectCode: "CS202" , 
        Final: { 
            month: '3' , 
            day:'5' , 
            hours: '3'  , 
            date: "25/6/2025" , 
            dateFormat:"May 6 2025 09:00:00"
        } ,
        MidTerm:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 9 2025 09:00:00"
        } , 
        practical:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 1 2025 09:00:00"
        } , 
        oralExam : {
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,
            dateFormat:"May 17 2025 09:00:00"  
        } , 
    } , 
    {
        subjectName : "Parallel Programming" , 
        drName: "Hamamm", 
        subjectDisc: 'this is a disc...' , 
        subjectHour: '3' ,
        subjectDepartment : 'general' , 
        subjectCode: "CS202" , 
        Final: { 
            month: '3' , 
            day:'5' , 
            hours: '3'  , 
            date: "25/6/2025" ,
            dateFormat:"May 8 2025 09:00:00" 
        } ,
        MidTerm:{
            month: '3' , 
            day:'5' , 
            hours: '3'  , 
            date: "25/6/2025" , 
            dateFormat:"May 14 2025 09:00:00"
        } , 
        practical:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 13 2025 09:00:00"
        } , 
        oralExam : {
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 19 2025 09:00:00"
        } , 
    } , 
    {
        subjectName : "Phsycis" , 
        drName: "Najwa", 
        subjectDisc: 'this is a disc...' , 
        subjectHour: '3' ,
        subjectDepartment : 'general' , 
        subjectCode: "CS202" , 
        Final: { 
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,
            dateFormat:"May 5 2025 09:00:00"  
        } ,
        MidTerm:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" , 
            dateFormat:"May 30 2025 09:00:00" 
        } , 
        practical:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,
            dateFormat:"May 1 2025 09:00:00"  
        } , 
        oralExam : {
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 19 2025 09:00:00"
        } , 
    } , 
    {
        subjectName : "Moduing" , 
        drName: "Sara", 
        subjectDisc: 'this is a disc...' , 
        subjectHour: '3' ,
        subjectDepartment : 'general' , 
        subjectCode: "CS202" , 
        Final: { 
            month: '3' , 
            day:'5' , 
            hours: '3'  , 
            date: "25/6/2025" ,
            dateFormat:"May 17 2025 09:00:00" 
        } ,
        MidTerm:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 15 2025 09:00:00"
        } , 
        practical:{
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 18 2025 09:00:00"
        } , 
        oralExam : {
            month: '3' , 
            day:'5' , 
            hours: '3' , 
            date: "25/6/2025" ,  
            dateFormat:"May 23 2025 09:00:00"
        } , 
    } ,  
] ; 


let btnSubjects = document.querySelectorAll('.row button:first-child') ; 
window.addEventListener('load' , _=> { 
    btnSubjects[0].click() ; 
}) ; 
btnSubjects.forEach(btn => { 
    btn.addEventListener('click' , ev => {
        subjects.forEach(sub => {
            if(sub.subjectName === ev.target.dataset.subjname) { 
                document.querySelector('.timer-container').innerHTML = '' ; 
                diplayAllExams(sub) ; 
            }
        }) ; 

    }) ; 
}) ; 

let timerContainer = document.querySelector('.timer-container') ; 

function diplayAllExams(sub) { 

    let  midTime , finalTime , oralTime , practicalTime; 
    midTime = runTimer(sub.MidTerm.dateFormat) ; 
    finalTime = runTimer(sub.Final.dateFormat) ; 
    practicalTime = runTimer(sub.practical.dateFormat) ; 
    oralTime = runTimer(sub.oralExam.dateFormat) ; 

    // console.log(midTime);
    // console.log(practicalTime);
    // console.log(oralTime);
    // console.log(finalTime);

    let div = document.createElement('div') ; 
     div.innerHTML = `
     <div class="timer-card">
            <div class="timer-header">
                <span class="exam-name">Mid Term Exam</span>
                <span class="date">${sub.MidTerm.date}</span>
            </div>
            <div class="timer">
                <div class="box">
                    <span>${midTime[0]}</span>
                    <p>Months</p>
                </div>
                <div class="box">
                    <span>${midTime[1]}</span>
                    <p>Days</p>
                </div>
                <div class="box">
                    <span>${midTime[2]}</span>
                    <p>Hours</p>
                </div>
                <div class="box">
                    <span>${midTime[3]}</span>
                    <p>Minutes</p>
                </div>
            </div>
        </div>
     <div class="timer-card">
            <div class="timer-header">
                <span class="exam-name">Practical Exam</span>
                <span class="date">${sub.practical.date}</span>
            </div>
            <div class="timer">
                <div class="box">
                    <span>${practicalTime[0]}</span>
                    <p>Months</p>
                </div>
                <div class="box">
                    <span>${practicalTime[1]}</span>
                    <p>Days</p>
                </div>
                <div class="box">
                    <span>${practicalTime[2]}</span>
                    <p>Hours</p>
                </div>
                <div class="box">
                    <span>${practicalTime[3]}</span>
                    <p>Minutes</p>
                </div>
            </div>
        </div>

     <div class="timer-card">
            <div class="timer-header">
                <span class="exam-name">Oral Exam</span>
                <span class="date">${sub.oralExam.date}</span>
            </div>
            <div class="timer">
                <div class="box">
                    <span>${oralTime[0]}</span>
                    <p>Months</p>
                </div>
                <div class="box">
                    <span>${oralTime[1]}</span>
                    <p>Days</p>
                </div>
                <div class="box">
                    <span>${oralTime[2]}</span>
                    <p>Hours</p>
                </div>
                <div class="box">
                    <span>${oralTime[3]}</span>
                    <p>Minutes</p>
                </div>
            </div>
        </div>
     <div class="timer-card">
            <div class="timer-header">
                <span class="exam-name">Final Exam</span>
                <span class="date">${sub.Final.date}</span>
            </div>
            <div class="timer">
                <div class="box">
                    <span>${finalTime[0]}</span>
                    <p>Months</p>
                </div>
                <div class="box">
                    <span>${finalTime[1]}</span>
                    <p>Days</p>
                </div>
                <div class="box">
                    <span>${finalTime[2]}</span>
                    <p>Hours</p>
                </div>
                <div class="box">
                    <span>${finalTime[3]}</span>
                    <p>Minutes</p>
                </div>
            </div>
        </div>


    ` ; 
    timerContainer.append(div) ; 
}


// ----------------------------------------------------------------
let infoCard = document.querySelector('.info') ; 
let bntAr = document.querySelectorAll('.row button:last-child') ;
bntAr.forEach(btn => { 
    btn.addEventListener('click' , ev => {
        if (btn.classList.contains('ok')) { 
            infoCard.classList.remove('show-info') ;
            btn.classList.remove('ok');
        }else {
            infoCard.classList.add('show-info') ;
            btn.classList.add('ok');
        }
        let tag = btn.previousElementSibling.dataset.subjname ; 
        showCardInfo(tag) ;
    })  ; 
}) ; 

btnSubjects.forEach(sub => { 
    sub.addEventListener('click' , _=> {
        bntAr.forEach(btn => { 
            infoCard.classList.remove('show-info') ;
        }) ; 
    }) ; 
}) ; 

// this function take the format of time and return the array of items contains 
// monthes , days , hours , and minutes 
function runTimer(format) { 
    var countDownDate = new Date(`${format}`).getTime();
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % ((1000 * 60 * 60 * 24))) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % ((1000 * 60 * 60))) / (1000 * 60));

    let timerAr = [] ; 
    timerAr.push(months) ; 
    timerAr.push(days) ; 
    timerAr.push(hours) ; 
    timerAr.push(minutes) ; 
    if (distance < 0) { // updating 
       timerAr[0] = "00" ; 
       timerAr[1] = "00" ; 
       timerAr[2] = "00" ; 
       timerAr[3] = "00" ; 
    } 
    return timerAr ; 
}
let countdown = setInterval( runTimer , 1000 ) ; 

function showCardInfo(tag) { 
    subjects.forEach(sub => {
        if(sub.subjectName === tag) {
            let div = document.createElement('div') ; 
            div.innerHTML = `
                <div class="info-header">
                <h4>${sub.subjectName}</h4>
                <small>${sub.subjectCode}</small>
                <small>${sub.subjectDepartment}</small>
                <small>${sub.subjectHour}hours</small>
            </div>

            <div class="info-body">
                <h4>Dr : <span>${sub.drName}</span></h4>
            </div>

            <div class="pre">
                <small>Network</small>
                <small>C++ </small>
            </div>
            ` ; 
            document.querySelector('.info').innerHTML = div.innerHTML ; 
        }
    }) ; 
}
// let category = ev.currentTarget.dataset.id 