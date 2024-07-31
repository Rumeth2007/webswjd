//let

let className
let BGSBasketSubjectArraySpliceingIndex
let DraggingElementTextContent
let SelectedGorup
let studentCount


//EnnterMarks
let SelectedSubject
let keepcount = 0

//SpecialCondition
let selectedItems = []



//ranks
BestRankers = []

/*/Assigning Subjects to Student /*/
let SelectedGorupSubjects = []
let noMatchStudentsGlobal = []
let SubjectToMarks = []
let SelectedSubjectStudents = []


/*/Variabel to determine drag /*/
let ParentOftheOrigin
let DragginElementContainerId





let classnumber



let students = [
    {
        "name": "Vikum",
        "classNumber": 1
    },
    {
        "name": "Devinda",
        "classNumber": 2
    },
    {
        "name": "Roshel",
        "classNumber": 3
    },
    {
        "name": "Seleena",
        "classNumber": 4
    },
    {
        "name": "Nipun",
        "classNumber": 5
    },
    {
        "name": "Nipuni",
        "classNumber": 6
    },
    {
        "name": "Savinda",
        "classNumber": 7
    },
    {
        "name": "Kamal",
        "classNumber": 8
    },
    {
        "name": "Amal",
        "classNumber": 9
    },
    {
        "name": "Sunil",
        "classNumber": 10
    }
]   

if (students.length > 0){
    classnumber = students.length + 1
}
else{
    classnumber = 1
}


/*/Subjects/*/
let Subjects = []
let PSTtableHeaderlabel
let BasketSubjectArray = []

let RelaventSubjectArray
let BasketGroups = []
let BasketGroupsWithSubjects = []

let NewSubject = []
let NewBasketSubject = []
let OneToFiveSubjects = ['Environmental Studies']
let BasketOneToFive = []
let SixTofNineSubjects = ['English', 'Sinhala', 'Religion', 'History', 'Geography', 'Civics', 'Science', 'Maths', 'Tamil', 'PTS']
let BasketSixTofNineSubjects = ['Arts', 'Eastern Music', 'WesternMusic', 'Dancing']
let TenToElevenSubjects = ['English', 'History', 'asd']
let BasketTenToElevenSubjects = ['asd','asd']
let ALSubjects = []




//status
/*/
1 - welcome
2 - enter class name
3 - enter students names
4 - class data preview
5 - PCD.popup
6 - Enter Subjects
7 - Show Templates
8 - Assign BasketGroup Subject
9 - Enter Marks
10 - Special Condition
11- Auto Report
11- Report
12- classRank
/*/
let status = 'Report'




//INtilizatiob Elements
const welcomeContainer = document.querySelector('.text-container')

//E-C-N Elements
const ECNcontainer = document.querySelector(".E-C-N-container")
const ECNtextinput = document.querySelector("#ENC-text-input-id")
const ECNafterSubmitionDiv = document.querySelector(".ECN-after-submit-div")
const ECNafterSubmitionText = document.querySelector('#ECN-after-submitiontext')
const ECNeditNameBtn = document.querySelector("#ECN-Edit-Name")
const ECNextBtn = document.querySelector("#ECN-Next")
const ECNenterBtn = document.querySelector("#ECN-Enter-Btn")

//E-S-N Elements
const ESNcontainer = document.querySelector('.E-S-N-container')
const ESNtextinput = document.querySelector('#ESN-text-input-id')
const ESNinstructions = document.querySelector('.instruction-on-submitting')
const ESNclassNUmber = document.querySelector('#ESN-Class-Number')
//notification
const ESNclassNUmberNotification = document.querySelector('#ESN-Class-Number-Notification')
const ESNStudentNameNotification = document.querySelector('#ESN-Student-Notification')
const ESNnotification = document.querySelector('#ESN-Notification')
//E-S-N notification

//PCD Notification
const PCDclassNUmberNotification = document.querySelector('#PCD-Class-Number-Notification')
const PCDStudentNameNotification = document.querySelector('#PCD-Student-Notification')
const PCDnotification = document.querySelector('#PCD-Notification')


const ESNpreview = document.querySelector('#ESN-preview')

//PCD Elements
const PCDcontainer = document.querySelector('.PCD-container-1')
const tableBody = document.querySelector('#PCD-table tbody')
const PCDnext = document.querySelector('#PCD-Next-btn')
//btns
const PCDbackbtn = document.querySelector('#PCD-Add-more-Names-btn')
const PCDCorrectionbtn = document.querySelector('#PCD-Corection-btn')
//popUpCorrection
const PCDpopUpCorrectionDiv = document.querySelector('.PCD-popUpCorrection')
const PCDpopUpCorrectionName = document.querySelector('#PCD-correction-student-name')
const PCDpopUpCorrectionNumber = document.querySelector('#PCD-correction-class-number')
const PCDcorrectionBack = document.querySelector('#PCD-correction-back')



//ES-Elements
const EScontainer = document.querySelector('.ES-Container')
const ESGrade15 = document.querySelector('#EM-Grade-1-5')
const ESGrade69 = document.querySelector('#EM-Grade-6-9')
const ESGrade1011 = document.querySelector('#EM-Grade-10-11')
const ESNew = document.querySelector('#EM-Add-Subjects')


//PST-Elements
const PSTcontainer1 = document.querySelector('.PST-Container')
const PSTcontainer = document.querySelector('.PST-Real-Container')
const PSTtable = document.querySelector('#subjectsTable')
const PSTtableHeader = document.querySelector('#PST-table-Header')
const PSTinput = document.querySelector('#PST-new-Input')
const PSTBackBtn = document.querySelector('#PST-back-btn')
const PSTNextBtn = document.querySelector('#PST-next-btn')

//GBS-Elements
const GBScontainer = document.querySelector('.GroupBasketSubjects-Container')
const GBSSubjectTable = document.querySelector('.GBS-Basket-Subject-Real')
const GBSbackBtn = document.querySelector('#GBS-Back-Btn')
const GBSDragableblocks = document.querySelector('.BS-block-Subject')
const GBSaddBaketGroups = document.querySelector('#GBS-Add-New-Group')
const GBSSelectedGroupContainer = document.querySelector('#GBS-Selected-Group')
const GBSdraggableContainers = document.querySelector('.GBS-Topic-Holder')
const SelectedSubjectDiv = document.querySelector('#Selected-Subject')
const SelectedGroupLabel = document.querySelector('#GBS-LabelToChange')

//Btn
const GBSnextBtn = document.querySelector('#GBS-Next-Btn')
/*/POP uP eLEMENTS/*/
const GBSpopUp = document.querySelector('.AddpopUp-Basket-Subjects')
const GBStable = document.querySelector('#GroupTable')
const GBSGroupDiv = document.querySelector('#DivToAddGroups')

const GBSInput = document.querySelector('#GBS-Input')
const GBSpopBlack = document.querySelector('.AddpopUp-Basket-Subjects')

//ABS Elements
const ABScontainer = document.querySelector('.Assign-Baskets-Subjects-Container')
const ABSblockHolder = document.querySelector('.block-holder')
const ABSBasketGroups = document.querySelector('#ABS-Basket-Groups')
const ABSBasketSubject = document.querySelector('#ABS-Basket-Subject')
const ABSControlsContainer = document.querySelector('#controlsContainer')
const CoverOfABS = document.querySelector('#cover')
const ABSassignedSubject = document.querySelector('#assigned-subject')
const ABSName = document.querySelector('#ABS-name')
const ABSNumber = document.querySelector('#ABS-number')
const ABSNotification = document.querySelector('#assigned-notification')
const ABSNext = document.querySelector('#ABS-next')


//EnterMarks Section
const EMcontainer = document.querySelector('.EMmain-container')
const EmSubjectLabel = document.querySelector('#Subjects-Label')
const EmNameLabel = document.querySelector('#EM-Input')
const EmNumberLabel = document.querySelector('#EM-classNumber')

const EmMarksLabel = document.querySelector('#Em-Marks')
const EmNextBtn = document.querySelector('#EmNextBtn')
const EmPreviousBtn = document.querySelector('#EmpreviousBtn')
const EmDoneBtn = document.querySelector('#Em-DoneBtn')


//Special Conditions

const SPcontainer = document.querySelector('.SP-main-Container')
const SPPopUp = document.querySelector('#SP-Pop-UP')
const Sppop2 =  document.querySelector('.pop-up-container')
const SPBlock = document.querySelector('#Critical')
const SpNext = document.querySelector('#Sp-Next')


//AutoReport
const AutoReportBtn = document.querySelector('.AutoReportContainer')
const AutoReportReport = document.querySelector('#Report')
const AutoReportClassRank = document.querySelector('#Class-Rank')
const AutoReportSubjectsRank = document.querySelector('#Subject-Rank')



//report
const report = document.querySelector('.report-Container')
const reportName = document.querySelector('#reportName')
const reportBack = document.querySelector('#report-back-btn')
const selectElement = document.getElementById('Report-Name-Selector')
//class rank
const classrank = document.querySelector('.Class-Rank-container')
const classrankBack = document.querySelector('#class-rank-back')


function IAnimations() {
    report.style.display = 'none'
    classrank.style.display = 'none'

    AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    welcomeContainer.style.display = 'flex'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut"
        } })

    tl.from("#text1", {
        opacity: 0,
        y: -50,
        duration: 1
    })
    .from("#text2", {
        delay: 1,
        opacity: 0,
        y: 50,
        duration: 1
    })
    .to("#text1, #text2", {
        opacity: 0,
        duration: 1,
        delay: 3 ,
        onComplete: changeToSetUpClassroom
    })

    
}



window.onload = function() {
    document.addEventListener('keyup', function(event) {
        const key = event.key;
        const keyCode = parseInt(key);
        if (event.ctrlKey && event.keyCode >= 49 && event.keyCode <= 54) { // Checking for Ctrl + 1 to Ctrl + 6
            switch (event.keyCode) {
                case 49: // Key '1'
                    status = "welcome";
                    IAnimations();
                    break;
                case 50: // Key '2'
                    status = "enter class name";
                    changeToSetUpClassroom();
                    break;
                case 51: // Key '3'
                    status = "enter students names";
                    StudentDataEntry();
                    break;
                case 52: // Key '4'
                    status = "Enter Subjects";
                    EnterSubjects();
                    break;
                case 53: // Key '5'
                    status = "Group Basket Subjects";
                    GroupBasketSubjects();
                    break;
                case 54: // Key '6'
                    status = 'Assign BasketGroup Subject';
                    AssignBasketGroupSubject();
                    break;
                default:
                    // Do nothing
            }
        }
    })


    ESNnotification.style.visibility = 'hidden'
    ESNclassNUmber.textContent = classnumber
    if (status === "welcome") {
        IAnimations()
    }
    else if (status == "enter class name") {
        changeToSetUpClassroom()
    }
    else if (status == "enter students names") {
        StudentDataEntry()
    }
    else if (status == "class data preview") {
        changeToClassPreview()
    }
    else if (status == "PCD.popup"){
        PopUpCorrectionSection()
    }
    else if(status == "Enter Subjects"){
        EnterSubjects()
    }
    else if(status == "Show Templates"){
        ShowTemplate()
    }
    else if (status == 'Group Basket Subjects'){
        GroupBasketSubjects()
    }
    else if (status == 'Assign BasketGroup Subject'){
        AssignBasketGroupSubject()
    }
    else if (status == 'Enter Marks'){
        EnterMarks()
    }
    else if (status == 'Special Condition'){
        SpecialConditions()
    }
    else if (status == 'Auto Report'){
        AutoReport()
    }
    else if (status == 'Report'){
        ShowReport()
    }
    else if (status == 'classRank'){
        ClassRank()
    }
    else if (status == 'subjectRank'){

    }


    
}


//Enter Class Name //

function changeToSetUpClassroom() {
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    ECNtextinput.value = ''
    ECNtextinput.style.display = 'block'
    ECNafterSubmitionDiv.style.display = 'none'
    status = "enter class name"
    ECNcontainer.style.display = "flex"
    ECNtextinput.placeholder = "Enter your Class Name"
}

// Store the timeline globally
let enterButtonTimeline;

function ECNenterButtonRevealAnim() {
   ECNenterBtn.style.display = 'block'
    if (!enterButtonTimeline) {
        enterButtonTimeline = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
        enterButtonTimeline.to("#ECN-Enter-Btn", {
            zIndex: -10,
            opacity: 1,
            y: 50,
            duration: 1,
            onComplete:function(){
                ECNenterBtn.style.zIndex = '1'
            } ,
            onReverseComplete: function(){
                ECNenterBtn.style.display = 'none'
                ECNenterBtn.style.zIndex = '-10'
            }
            
            
        }).pause(); // Pause initially
    }

    // Play the timeline
    enterButtonTimeline.play();
}

//ON ENTER
function onEnter(){
    if (className !== '') {
        ECNafterSubmitionText.textContent = className

        ECNafterSubmitionDiv.style.display = 'block'
        ECNtextinput.style.display = 'none'
        ECNextBtn.style.backgroundColor = 'rgb(129, 254, 146)'
    }
}

//Enter btn animation
ECNtextinput.addEventListener('input', function() {
    if (ECNtextinput.value !== '' && ECNtextinput.value.length < 2) {
        ECNeditNameBtn.style.backgroundColor = ' rgb(254, 129, 129)'
        ECNenterButtonRevealAnim();
    } else if (ECNtextinput.value === '') {
        if (enterButtonTimeline) {
            enterButtonTimeline.reverse()
            ECNeditNameBtn.style.backgroundColor = 'rgb(212, 212, 212)'
        }
    }
});

//placeholder control
ECNtextinput.addEventListener('focus', () => {
        ECNtextinput.placeholder = ""
});

ECNtextinput.addEventListener('blur', () => {
    if (ECNtextinput.value === '') {
        ECNtextinput.placeholder = "Enter your Class Name"

    }
})

//enter key pressed
ECNtextinput.removeEventListener('keypress', ECNtextInputEnterKey)
ECNtextinput.addEventListener('keypress', ECNtextInputEnterKey)


function ECNtextInputEnterKey(event) {
    ECNtextinput.value = ECNtextinput.value.trim()
    if (event.key === 'Enter') {
        event.preventDefault();
        className = ECNtextinput.value
        onEnter()
    }
}






//Returning enter button into fade in when edit
//clicked and chnging the state

//Edit
ECNeditNameBtn.removeEventListener('click', ESNeditBtnPressed)
ECNeditNameBtn.addEventListener('click', ESNeditBtnPressed)

function ESNeditBtnPressed() {
    ECNextBtn.style.backgroundColor = 'rgb(212, 212, 212)'
    changeToSetUpClassroom()
    enterButtonTimeline.reverse()
    ECNeditNameBtn.style.backgroundColor = 'rgb(212, 212, 212)'
}

//Enter Btn
ECNenterBtn.removeEventListener('click', ECNenterBtnPressed)
ECNenterBtn.addEventListener('click', ECNenterBtnPressed)


function ECNenterBtnPressed(){
    
    if (ECNtextinput.value.length > 0){
        className = ECNtextinput.value
        onEnter()
    }
    else{
        alert("Please enter a Name")      
    }
}

//Next Btn
ECNextBtn.removeEventListener('click' , ECNextBtnPressed)
ECNextBtn.addEventListener('click' , ECNextBtnPressed)

function ECNextBtnPressed(){
    if (className.length < 1){
        alert("Please Enter a Name")
    }
    else{
        if (className != ''){
        playChangeStateToESN()
    }else{
        return
    }
    }
}


function playChangeStateToESN(){
    gsap.to('.E-C-N-container' , {
        x: -1350,
        onComplete: function(){
            welcomeContainer.style.display = 'none'
            ECNcontainer.style.display = 'none'
            ESNcontainer.style.display = 'flex'

            gsap.from('.E-S-N-container',{
                x:700,
                onComplete: function(){
                    status = 'enter students names'
                    
                    StudentDataEntry()
                    
                }
            }
            )
        }
    })
}


//Student data entry
function StudentDataEntry(){

    if (students.length > 0){
        ESNpreview.style.backgroundColor = 'rgb(129, 254, 146)'
    }
    else{
        ESNpreview.style.backgroundColor = 'rgb(212, 212, 212)'
    }
    report.style.display = 'none'
    classrank.style.display = 'none'
    AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    ESNnotification.style.visibility = 'hidden'
    PCDcontainer.style.display = 'none'
    ESNclassNUmber.textContent = classnumber
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'flex'


}
ESNtextinput.removeEventListener('focus', () => {
    ESNtextinput.placeholder = ""
});

ESNtextinput.addEventListener('focus', () => {
    ESNtextinput.placeholder = ""
});

ESNtextinput.removeEventListener('blur', () => {
    if (ESNtextinput.value === '') {
        ESNtextinput.placeholder = "Enter a Name"
    
    }
    })

ESNtextinput.addEventListener('blur', () => {
if (ESNtextinput.value === '') {
    ESNtextinput.placeholder = "Enter a Name"

}
})

//capitalize each word first letter

function capitalizeWords(text) {
    return text.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

function handleInput(event) {
    let input = event.target;
    let cursorPosition = input.selectionStart; // Save the cursor position
    input.value = capitalizeWords(input.value);
    input.setSelectionRange(cursorPosition, cursorPosition); // Restore the cursor position


    if(input.value.length > 1){
        ESNinstructions.style.opacity = '1'
    }
    else{
        ESNinstructions.style.opacity = '0'
    }
}

ESNtextinput.removeEventListener('input', handleInput)
ESNtextinput.addEventListener('input', handleInput)

ESNtextinput.removeEventListener('keypress', ESNtextinputEnter)
ESNtextinput.addEventListener('keypress', ESNtextinputEnter)

function ESNtextinputEnter(event) {
    
    if (event.key === 'Enter' && ESNtextinput.value.length > 1) {
        ESNtextinput.value = ESNtextinput.value.trim()
        if (ESNtextinput.value != ''){
            clearTimeout(timeOut);
            students.push(
            { name: ESNtextinput.value, classNumber: classnumber }
            
        )

        }else{
            alert('Enter A Name')
        }
        
        ESNtextinput.value = '';
        ESNinstructions.style.opacity = '0';
        
        playESNSubmittedNotification()
        ESNclassNUmber.textContent = ++classnumber;

        if (students.length === 1){
            ESNpreview.style.backgroundColor = 'rgb(129, 254, 146)'
        }
    }

}
let timeOut;

function playESNSubmittedNotification() {
    gsap.killTweensOf('#ESN-Notification');
    ESNclassNUmberNotification.textContent = classnumber;
    ESNStudentNameNotification.textContent = students[classnumber - 1].name;
    ESNnotification.style.visibility = 'visible'
    
    gsap.fromTo('#ESN-Notification', 
        { opacity: 0, y: -400 }, 
        { opacity: 1, y: -200, ease: "back.out", onComplete: function() {
            timeOut = setTimeout(leave, 3000);
        }
    });
}

function leave() {
    gsap.to('#ESN-Notification', {
        opacity: 0,
        y: -400,
        ease: "back.in",
        onComplete: reset
    });
}

function reset() {
    ESNnotification.style.visibility = 'hidden';
    gsap.set('#ESN-Notification', { y: 0 });
}

//ESN-BTN
ESNpreview.addEventListener('click', changeToClassPreview)







//Class Data Preview
function changeToClassPreview(){

    PCDnotification.style.visibility = 'hidden'
    document.removeEventListener('keyup', NumberInputControl) 
    if (students.length > 0){
    status = 'class data preview'
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'flex'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    populateTable(students)


    PCDbackbtn.removeEventListener('click',StudentDataEntry)
    PCDbackbtn.addEventListener('click',StudentDataEntry)


    PCDCorrectionbtn.removeEventListener('click', PopUpCorrectionSection)
    PCDCorrectionbtn.addEventListener('click', PopUpCorrectionSection)

}else{
    return
}
}
PCDnext.removeEventListener('click', EnterSubjects)
PCDnext.addEventListener('click', EnterSubjects)

//populate table
function populateTable(dataArray) {
    tableBody.innerHTML = '';
    dataArray.forEach((item, index) => {
        const row = document.createElement("tr");

        // Class Number Cell
        const classNumberCell = document.createElement("td");
        classNumberCell.textContent = item.classNumber;
        row.appendChild(classNumberCell);

        // Name Cell
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        nameCell.style.borderLeft = '1px Black solid'
        row.appendChild(nameCell);

        // Delete Button Cell
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deletebtn')

        deleteButton.addEventListener('click', function() {
            if (classnumber > 2){
            deleteRow(index)
        } else{
            deleteRow(index)
            classnumber = 1
            StudentDataEntry()
            
            
        }
        })
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);
    });
}



function deleteRow(index) {
    // Remove the item from the array
    students.splice(index, 1);
    classnumber = classnumber - 1
    // Update the classNumber for all subsequent items
    for (let i = index; i < students.length; i++) {
        students[i].classNumber = i + 1;
    }

    // Re-populate the table
    populateTable(students);
}


function PopUpCorrectionSection(){
    status = 'PCD.popup'
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDnotification.style.visibility = 'hidden'
    PCDpopUpCorrectionDiv.style.display = 'flex'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    
    PCDpopUpCorrectionNumber.max = classnumber - 1
    PCDpopUpCorrectionName.value = students[0].name
    PCDpopUpCorrectionNumber.value = 1
    
    PCDpopUpCorrectionName.removeEventListener('input',PCDpopUpCorrectionNameInput)
    PCDpopUpCorrectionName.addEventListener('input',PCDpopUpCorrectionNameInput)

    PCDpopUpCorrectionNumber.removeEventListener('input', updateTextinput)
    PCDpopUpCorrectionNumber.addEventListener('input', updateTextinput)
    PCDpopUpCorrectionName.removeEventListener('keypress', PCDpopUpCorrectionNamePress)
    PCDpopUpCorrectionName.addEventListener('keypress', PCDpopUpCorrectionNamePress)
    document.removeEventListener('keyup', NumberInputControl)
    document.addEventListener('keyup', NumberInputControl)

    PCDcorrectionBack.removeEventListener('click', changeToClassPreview)
    PCDcorrectionBack.addEventListener('click', changeToClassPreview)
}

function PCDpopUpCorrectionNamePress(event){
    if (event.key === 'Enter'){
        event.target.value = event.target.value.trim()
        if(event.target.value != '') {
        updateCorrection()
    }else{
        alert('Please Enter Valid Name')
    }
    }
}

function PCDpopUpCorrectionNameInput(){
    PCDpopUpCorrectionName.value = capitalizeWords(PCDpopUpCorrectionName.value)
}

function NumberInputControl(event){
    if (event.key === 'ArrowUp'){
        event.preventDefault()
        if (PCDpopUpCorrectionNumber.value < classnumber-1){
            PCDpopUpCorrectionNumber.value = parseInt(PCDpopUpCorrectionNumber.value) + 1
            updateTextinput()
    }
    }
    else if (event.key === 'ArrowDown'){
        event.preventDefault()
        if (PCDpopUpCorrectionNumber.value > 1){
            PCDpopUpCorrectionNumber.value = parseInt(PCDpopUpCorrectionNumber.value) - 1
            updateTextinput()
    }
        
    }
}


function updateTextinput(){
    PCDpopUpCorrectionName.value = students[PCDpopUpCorrectionNumber.value -1].name
}

function updateCorrection(){
    if (PCDpopUpCorrectionName.value.length > 1){
    students[PCDpopUpCorrectionNumber.value-1].name = PCDpopUpCorrectionName.value
    populateTable(students)
    playPCDSubmittedCorrectionNotification()
}
else{
    alert('Please Enter a Name')
}
}

function playPCDSubmittedCorrectionNotification() {
    gsap.killTweensOf('#PCD-Notification');
    PCDclassNUmberNotification.textContent = PCDpopUpCorrectionNumber.value;
    PCDStudentNameNotification.textContent = students[PCDpopUpCorrectionNumber.value-1].name;
    PCDnotification.style.visibility = 'visible';
    
    gsap.fromTo('#PCD-Notification', 
        { opacity: 0, y: -200 }, 
        { opacity: 1, y: 20, ease: "back.out", onComplete: function() {
            timeOut = setTimeout(leaveCorrection, 3000);
        }
    });
}

function leaveCorrection() {
    gsap.to('#PCD-Notification', {
        opacity: 0,
        y: -400,
        ease: "back.in",
        onComplete: reset
    });
}

function resetCorrection() {
    PCDnotification.style.visibility = 'hidden';
    gsap.set('#PCD-Notification', { y: 0 });
}


function EnterSubjects(){
    status ='Enter Subjects'
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'flex'
    GBScontainer.style.display = 'none'
    gsap.set('.ES-levatating-card', {
        y: 40
    })

    
    gsap.fromTo('.ES-levatating-card', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, ease: "back.out"})



    ESGrade15.addEventListener('click',function(){
        BasketGroups = []
        BasketGroupsWithSubjects = []
        Subjects = []
        BasketOneToFive = ['asd']
        OneToFiveSubjects = ['Environmental Studies']

        PSTtableHeaderlabel = 'Grade 1-5'
        BasketSubjectArray = BasketOneToFive
        RelaventSubjectArray = OneToFiveSubjects
        Subjects = RelaventSubjectArray.concat(BasketSubjectArray)
        ShowTemplate()
})
    ESGrade69.addEventListener('click', function(){
        BasketGroups = []
        BasketGroupsWithSubjects = []
        Subjects = []
        BasketTenToElevenSubjects = ['asd','asd']
        TenToElevenSubjects = ['English', 'History', 'asd']


        BasketSixTofNineSubjects = ['Arts', 'Eastern Music', 'WesternMusic', 'Dancing']
        SixTofNineSubjects = ['English', 'Sinhala', 'Religion', 'History', 'Geography', 'Civics', 'Science', 'Maths', 'Tamil', 'PTS']
        PSTtableHeaderlabel = 'Grade 6-9'
        BasketSubjectArray = BasketSixTofNineSubjects
        RelaventSubjectArray = SixTofNineSubjects
        Subjects = RelaventSubjectArray.concat(BasketSubjectArray)
        ShowTemplate()
    })


    ESGrade1011.addEventListener('click',function(){
        BasketGroups = []
        BasketGroupsWithSubjects = []
        Subjects = []


        PSTtableHeaderlabel = 'Grade 10-11'
        BasketSubjectArray = BasketTenToElevenSubjects
        RelaventSubjectArray = TenToElevenSubjects
        Subjects = RelaventSubjectArray.concat(BasketSubjectArray)
        ShowTemplate()
    })

    ESNew.addEventListener('click',function(){
        BasketGroups = []
        BasketGroupsWithSubjects = []
        Subjects = []
        NewSubject = []
        NewBasketSubject = []
        PSTtableHeaderlabel = 'New Subjects'
        
        BasketSubjectArray = NewSubject
        RelaventSubjectArray = NewBasketSubject
        Subjects = RelaventSubjectArray.concat(BasketSubjectArray)
        ShowTemplate()
    })
}   



//Show Template
function ShowTemplate(){
    status = 'Show Templates'
    PSTinput.removeEventListener('keypress',PSTaddSubjectInput)
    PSTinput.addEventListener('keypress',PSTaddSubjectInput)
    PSTinput.value = ''
    createSubjectsTable(Subjects)

     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    PSTcontainer.style.display = 'flex'
    EScontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    PSTinput.addEventListener('input', function(){
       PSTinput.value = capitalizeWords(PSTinput.value)
    })
    
    PSTinput.addEventListener('focus', () => {
        PSTinput.placeholder = ""
    });
    
    PSTinput.addEventListener('blur', () => {
    if (PSTinput.value === '') {
        PSTinput.placeholder = "Enter New Subject"
    
    }
    })

    PSTBackBtn.removeEventListener('click', EnterSubjects)
    PSTBackBtn.addEventListener('click', EnterSubjects)


    PSTNextBtn.addEventListener('click', function(){
        if (Subjects == 0){
            alert('Add At Least One Subject')
        }
        else if(BasketSubjectArray.length > 0 || BasketGroupsWithSubjects.length > 0){
            GroupBasketSubjects()
        }
        else{
            DeleteBasketSubjectsFromSubjectArray()
    addSubjectsToStudents(Subjects, students)
    EnterMarks()
        }
    }

)
}


function PSTaddSubjectInput(event) {
    if (event.key === 'Enter') {
        PSTinput.value = PSTinput.value.trim();
        if (Subjects.includes(PSTinput.value) || PSTinput.value == '') {
            alert('Subject Already Exists or Not Valid');
        } else {
            Subjects.push(PSTinput.value);
            createSubjectsTable(Subjects);
            PSTinput.value = ''
            PSTcontainer1.scrollTop = PSTcontainer1.scrollHeight;
        }
    }
}



function createSubjectsTable(subjects) {

    const tableBody = document.getElementById('SubjecttableBody');
    const tableHeader = document.getElementById('SubjecttableHeader');
    tableBody.innerHTML = ''; // Clear any existing rows

    // Create table header
    tableHeader.innerHTML = ''; // Clear existing headers
    let thSubject = document.createElement('th');
    thSubject.textContent = PSTtableHeaderlabel;
    tableHeader.appendChild(thSubject);

    let thDelete = document.createElement('th');
    thDelete.textContent = '';
    tableHeader.appendChild(thDelete);

    let thBasket = document.createElement('th');
    thBasket.textContent = 'Basket Subjects';
    tableHeader.appendChild(thBasket);

    subjects.forEach((subject, index) => {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = subject;
        tr.appendChild(td);

        

        
        let groupSubject = BasketGroupsWithSubjects.find(item => item.subject === subject)
        
        if (groupSubject){
            if (groupSubject) {
                // Create div element
                let div = document.createElement('div');
                div.textContent = 'Grouped in a Basket Group';
    
                let tdDiv = document.createElement('td');
                tdDiv.colSpan = 2
                tdDiv.classList.add('grouped')
                tdDiv.appendChild(div);
                tr.appendChild(tdDiv);
            } else {
                // Add an empty cell if the subject is not in the group
                let tdEmpty = document.createElement('td');
                tr.appendChild(tdEmpty);
            }
    
            tableBody.appendChild(tr);
        }

        else{
            // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deletebtn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.removeEventListener('click', function() {
            deleteSubject(index);
            
        });
        deleteBtn.addEventListener('click', function() {
            deleteSubject(index);
        });

        // Append delete button to row
        let tdDelete = document.createElement('td');
        tdDelete.appendChild(deleteBtn);
        tr.appendChild(tdDelete);

        
            let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = BasketSubjectArray.includes(subject);
        checkbox.addEventListener('change', () => {
            toggleBasketSubject(subject)
        });

        let tdCheckbox = document.createElement('td')
        tdCheckbox.appendChild(checkbox)
        tr.appendChild(tdCheckbox)

        tableBody.appendChild(tr)
        }
        
    });
}



function deleteSubject(index) {
    const subject = Subjects[index];
    const basketIndex = BasketSubjectArray.indexOf(subject);
    if (basketIndex !== -1) {
        BasketSubjectArray.splice(basketIndex, 1);
    }
    Subjects.splice(index, 1);
    createSubjectsTable(Subjects);
}
function toggleBasketSubject(subject) {
    const index = BasketSubjectArray.indexOf(subject);
    if (index === -1) {
        BasketSubjectArray.push(subject);
    } else {
        BasketSubjectArray.splice(index, 1);
    };
}

/*/GroupBasketSubjects/*/
function GroupBasketSubjects(){
    

    gsap.set('#GBS-LabelToChange', {
        y: 40
    })

    
    gsap.fromTo('#GBS-LabelToChange', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, ease: "back.out"})




    status = 'Group Basket Subjects'
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'flex'

    GBSGroupDiv.innerHTML = ''
    //visibility of Selected Subjects
    if (BasketGroups.length > 0){
        GBSSelectedGroupContainer.style.display = 'flex'
    }else{
        GBSSelectedGroupContainer.style.display = 'none'
    }
    //pop up Control
    GBSpopUp.style.display = 'none'


    addBasketSubjectsToContainer(BasketGroups, GBSGroupDiv)
    addBasketSubjectsToContainer(BasketSubjectArray, GBSSubjectTable)
    MakeTableForSelected(BasketGroupsWithSubjects, SelectedSubjectDiv, SelectedGroupLabel.textContent)
    GBSbackBtn.removeEventListener('click', GBSBackPressed)
    GBSbackBtn.addEventListener('click', GBSBackPressed)

    GBSDragableblocks.removeEventListener('dragstart', changeApperanceWhenDragging(event))
    GBSDragableblocks.addEventListener('dragstart', changeApperanceWhenDragging(event))

    GBSaddBaketGroups.removeEventListener('click', PopUpAddBasketGroup)
    GBSaddBaketGroups.addEventListener('click',PopUpAddBasketGroup)

    function handleDragOver(event) {
        const draggingElement = document.querySelector('.dragging')
        DraggingElementTextContent = draggingElement.textContent

        DragginElementContainerId = event.currentTarget.id
        event.preventDefault()



        

        if( DragginElementContainerId == 'Selected-Subject' && ParentOftheOrigin == 'Basket-Subject'){
            if (SelectedGroupLabel.textContent !=='Drop a Group to Edit'){
                event.currentTarget.appendChild(draggingElement)
    
                const clickedTextContent = draggingElement.textContent
                const index = BasketSubjectArray.indexOf(clickedTextContent)
                BGSBasketSubjectArraySpliceingIndex = index
                
            }

                
            }
            
               
       
        else if( DragginElementContainerId == 'Basket-Subject' && ParentOftheOrigin == 'Selected-Subject'){
            event.currentTarget.appendChild(draggingElement)
        }else if(DragginElementContainerId == 'Selected-Subject' && ParentOftheOrigin == 'Selected-Subject'){
            event.currentTarget.appendChild(draggingElement)
        }else if(DragginElementContainerId == 'DivToAddGroup' && ParentOftheOrigin == 'DivToAddGroup'){
            event.currentTarget.appendChild(draggingElement)
        }else if(DragginElementContainerId == 'DivToAddGroup' && ParentOftheOrigin == 'Selected-Subject'){
            return
        }else if(DragginElementContainerId == 'Basket-Subject' && ParentOftheOrigin == 'Basket-Subject'){
            event.currentTarget.appendChild(draggingElement)
        }else{
            return
        }
    }
    
    // Select all elements with the class 'GBS-Topic-Holder'
    const topicHolders = document.querySelectorAll('.GBS-Basket-Subject-Real');
    
    // Add the dragover event listener to each container
    topicHolders.forEach(holder => {
        holder.addEventListener('dragover', handleDragOver);
    });


}

/*/POPUP ADD BASKET GROUP/*/
function PopUpAddBasketGroup(){
    GBSpopUp.style.display = 'flex'
    
    GBSGroupDiv.innerHTML = ''
}

function changeApperanceWhenDragging(){
    const draggables = document.querySelectorAll('.BS-block-Subject')

    draggables.forEach(draggable => {
        draggable.removeEventListener('dragstart', GBSDragStarts)
        draggable.removeEventListener('dragend', GBSdragStop)
        draggable.addEventListener('dragstart', GBSDragStarts)
        draggable.addEventListener('dragend', GBSdragStop)
        createGroupsTable(BasketGroups)
    })
}

function createGroupsTable(subjects) {
    const tableBody = document.getElementById('GrouptableBody');
    const tableHeader = document.getElementById('GrouptableHeader');
    tableBody.innerHTML = ''; // Clear any existing rows

    // Create table header
    tableHeader.innerHTML = ''; // Clear existing headers
    let thSubject = document.createElement('th');
    thSubject.textContent = 'Basket Groups'
    thSubject.colSpan = 3;
    tableHeader.appendChild(thSubject);

    subjects.forEach((subject, index) => {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = subject;
        tr.appendChild(td);

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deletebtn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteGroup(index);
        });

        // Append delete button to row
        let tdDelete = document.createElement('td');
        tdDelete.appendChild(deleteBtn);
        tr.appendChild(tdDelete);

        tableBody.appendChild(tr);
    });
}

function deleteGroup(index) {
    SelectedGroupLabel.textContent = 'Drop a Group to Edit'
    BasketGroups.splice(index, 1);
    createGroupsTable(BasketGroups);
}






////////////////////Dragggg Functionnnss
function GBSdragStop(event) {
    event.target.classList.remove('dragging')
    
    if (BasketSubjectArray.length < 0){
        GBSnextBtn.style.backgroundColor = '#67ee6c'
    }
    else {
    }

    if (DragginElementContainerId == 'Basket-Subject' && ParentOftheOrigin == 'Selected-Subject') {
        BasketSubjectArray.push(event.target.textContent)
        spliceBasketGroupsWithSubjects(SelectedGroupLabel.textContent, DraggingElementTextContent)
    }

    if (DragginElementContainerId == 'Selected-Subject' && ParentOftheOrigin == 'DivToAddGroups') {
        SelectedGroupLabel.textContent = event.currentTarget.textContent;
        GroupBasketSubjects()   
    }
    
    
    if (DragginElementContainerId == 'Selected-Subject' && ParentOftheOrigin == 'Basket-Subject') {
        if (SelectedGroupLabel.textContent !== 'Drop a Group to Edit') {
            BasketGroupsWithSubjects.push({
                group: SelectedGroupLabel.textContent,
                subject: event.target.textContent
            });
        }
    } else {
        return;
    }
    
    

    if (BGSBasketSubjectArraySpliceingIndex >= 0 && BGSBasketSubjectArraySpliceingIndex < BasketSubjectArray.length) {
        BasketSubjectArray.splice(BGSBasketSubjectArraySpliceingIndex, 1);
    } else {
        return
    }
    

}

function MakeTableForSelected(subjectsArray, RelaventDiv, group) {
    RelaventDiv.innerHTML = ''; // Clear the container
    let counter = 1
    SelectedGorupSubjects = []
    
    if (RelaventDiv == ABSBasketSubject){
        subjectsArray.forEach((item, index) => {
            

            if (item.group === group) {

                const containerDiv = document.createElement('div');
                containerDiv.className = 'containerdivoftheNumber';
                containerDiv.addEventListener('click', function(){

                })
                const numberDiv = document.createElement('div');
                numberDiv.className = 'subject-number';
                numberDiv.textContent = counter;
                containerDiv.appendChild(numberDiv);
    
                const subjectDiv = document.createElement('div');
                subjectDiv.className = 'ABS-subject-block';
                subjectDiv.textContent = item.subject;
                SelectedGorupSubjects.push(item.subject)
                containerDiv.appendChild(subjectDiv);
    
                RelaventDiv.appendChild(containerDiv);
    
                counter++;
            }
        })
    }
    else{
        subjectsArray.forEach(item => {
            if (item.group === group) { // Filter by the specified group
                const subjectDiv = document.createElement('div');
                subjectDiv.className = 'BS-block-Subject'; 
                subjectDiv.draggable = true;
                subjectDiv.textContent = item.subject;
                RelaventDiv.appendChild(subjectDiv)
            }
        })
    }
}

function spliceBasketGroupsWithSubjects(group, subject) {
    const index = BasketGroupsWithSubjects.findIndex(item => item.group == group && item.subject == subject);

    if (index !== -1) {
        BasketGroupsWithSubjects.splice(index, 1);
        GroupBasketSubjects()
    } else {
        return;
    }
}




function GBSDragStarts(event){
    event.target.classList.add('dragging')
    ParentOftheOrigin = event.currentTarget.parentElement.id

}

function GBSBackPressed(){
    ShowTemplate()
}

function addBasketSubjectsToContainer(subjectsArray, RelaventDiv) {
    GBSSubjectTable.innerHTML = ''
    subjectsArray.forEach(subject => {
        const subjectDiv = document.createElement('div')
        subjectDiv.className = 'BS-block-Subject' 
        subjectDiv.draggable = true

        subjectDiv.textContent = subject
        RelaventDiv.appendChild(subjectDiv)
    });

}

//placeholder control
GBSInput.addEventListener('focus', () => {
    GBSInput.placeholder = ""
});

GBSInput.addEventListener('blur', () => {
if (GBSInput.value === '') {
    GBSInput.placeholder = "Enter a New Group"

}
})
GBSInput.removeEventListener('keydown', UpdateGroupTable)
GBSInput.addEventListener('keydown', UpdateGroupTable)

GBSInput.addEventListener('input', function(){
    GBSInput.value =  capitalizeWords(GBSInput.value)
})

function UpdateGroupTable(event) {
    if (event.key === 'Enter' && GBSInput.value.length > 1) {

        GBSInput.value = GBSInput.value.trim();
        

        if (BasketGroups.includes(GBSInput.value)) {
            alert('Already There')        
        } else {
            if (GBSInput.value !== '') {
                BasketGroups.push(GBSInput.value);
                GBSInput.value = ''
                SelectedGroupLabel.textContent = 'Drop a Group to Edit'
                

                createGroupsTable(BasketGroups);
            } else {
 
                alert('Enter A Name');
            }
            
        }
    }
}


//pop up Exit
GBSpopBlack.addEventListener('click', function(){
    if(event.target.className == 'AddpopUp-Basket-Subjects'){
        GroupBasketSubjects()
    }
})


GBSnextBtn.addEventListener('click', function(){
    if (BasketSubjectArray < 1){
        AssignBasketGroupSubject()
    }
    else{
        alert('All Basket Subjects Should Be in a Group')
    }
})


//AssignBasketGroupSubject
function AssignBasketGroupSubject(){
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    ABSControlsContainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'flex'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'

    status = 'Assign BasketGroup Subject'

    gsap.set('.Assign-Baskets-Subjects-Container', {
        y: 40
    })

    
    gsap.fromTo('.Assign-Baskets-Subjects-Container', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, ease: "back.out"})

    addBasketSubjectsToSelector(BasketGroups, ABSblockHolder)
    MakeTableForSelected(BasketGroupsWithSubjects, ABSBasketSubject, SelectedGorup)
}   


    

function addBasketSubjectsToSelector(subjectsArray, RelaventDiv) {
    ABSblockHolder.innerHTML = ''
    subjectsArray.forEach(subject => {
        const subjectDiv = document.createElement('button')
        subjectDiv.className = 'ABS-subject-block' 
        subjectDiv.textContent = subject
        subjectDiv.addEventListener('click', selectTheRelaventBasketGroup)
        RelaventDiv.appendChild(subjectDiv)
    });

}

function selectTheRelaventBasketGroup(event) {
    document.querySelectorAll('.ABS-subject-block').forEach(subject => {
        subject.classList.remove('selected');
    })

    studentCount = 0
    document.removeEventListener('keyup', AcessTheNumberForTheBasketSubjects)
    document.addEventListener('keyup', AcessTheNumberForTheBasketSubjects)
    
    event.target.classList.add('selected')
    SelectedGorup = event.target.textContent
    MakeTableForSelected(BasketGroupsWithSubjects, ABSBasketSubject, SelectedGorup)
    StartShowABSControls()
    
    document.removeEventListener('keyup', NextStudent)
    document.addEventListener('keyup', NextStudent)
    StartStudentAssigning()

}

function AcessTheNumberForTheBasketSubjects(){
    if (event.key >= '0' && event.key <= SelectedGorupSubjects.length) {
        const num = parseInt(event.key, 10);
        const result = num - 1;

        gsap.set('#assigned-subject', {
            y: 40
        })
    
        
        gsap.fromTo('#assigned-subject', 
            { opacity: 0, y: 40 }, 
            { opacity: 1, y: 0, ease: "back.out"})

        ABSassignedSubject.textContent = SelectedGorupSubjects[result]
        removeSelectedSubjectsFromStudent(SelectedGorupSubjects, students, studentCount)
        Object.assign(students[studentCount], { [SelectedGorupSubjects[result]]: 0 })
        StartStudentAssigning()

}}

function removeSelectedSubjectsFromStudent(selectedBasketSubjects, students, studentIndex) {


    const student = students[studentIndex];

    for (const property in student) {

        if (selectedBasketSubjects.includes(property)) {
            delete student[property]
        }
    }
}

/*/look into this/*/
function checkWhetherAllAssigned(selectedBasketSubjects, students) {
    // Keep track of students with no matching subjects
    let noMatchStudents = [];

    // Loop through each student in the array
    students.forEach((student, index) => {
        let hasMatch = false;

        // Check each property of the student
        for (const property in student) {
            if (selectedBasketSubjects.includes(property)) {
                hasMatch = true;
                break; // Exit the loop early if a match is found
            }
        }

        // If no matching subject was found, add to noMatchStudents
        if (!hasMatch) {
            noMatchStudents.push({ index, student });
        }
    });

    

    // Log students with no matching subjects
    if (noMatchStudents.length > 0) {
        noMatchStudentsGlobal = noMatchStudents
    } else {
    }
}




function findMatchingSubject(selectedBasketSubjects, students, studentIndex) {


    const student = students[studentIndex];

    for (const property in student) {

        if (selectedBasketSubjects.includes(property)) {
            return property;
        }
    }
    return null;
}





function NextStudent(event) {
    if (event.key === 'ArrowRight') {
        if (studentCount < students.length - 1) {
            studentCount++      
            StartStudentAssigning()
            ABSassignedSubject.textContent = 'Press the Number Relavent to Subject to Assign'
        } else {
            alert('Thats all! Check!!');
        }
    } else if (event.key === 'ArrowLeft') {
        if (studentCount > 0) {
            studentCount--;
            StartStudentAssigning()
            ABSassignedSubject.textContent = 'Press the Number Relavent to Subject to Assign'
        } else {
        }
    }
}




/*/When User Select a Group /*/


function StartShowABSControls(){
    CoverOfABS.style.display = 'none'
    ABSControlsContainer.style.display = 'flex'
}

function StartStudentAssigning() {
    if (students.length > 0) {
        let IsMatched = findMatchingSubject(SelectedGorupSubjects, students, studentCount)
        if(IsMatched != null){
            ABSNotification.style.backgroundColor = 'var(--red-color)'
            ABSNotification.textContent = 'Assigned '+ IsMatched
        }
        else{
            ABSNotification.style.backgroundColor = 'var(--yellow-color)'
            ABSNotification.textContent = 'Not Assigned'
        }
        

        ABSName.textContent = students[studentCount].name;
        ABSNumber.textContent = students[studentCount].classNumber;
    } else {

    }
    checkWhetherAllAssigned(SelectedGorupSubjects, students)
}

function DeleteBasketSubjectsFromSubjectArray() {
    // Assuming BasketGroupsWithSubjects is an array of objects with a 'subject' property
    BasketGroupsWithSubjects.forEach(item => {
        const subjectIndex = Subjects.indexOf(item.subject);
        if (subjectIndex !== -1) {
            SubjectToMarks.push(Subjects[subjectIndex])
            Subjects.splice(subjectIndex, 1);
        }
    })
}


ABSNext.addEventListener('click', function(){
    alert('Check whether Every Student is Assigned With One Subject From Each Group')
    alert('You can no more edit your Subjects settings')
    DeleteBasketSubjectsFromSubjectArray()
    addSubjectsToStudents(Subjects, students)
    EnterMarks()
})

function addSubjectsToStudents(subjects, students) {
    students.forEach(student => {
        subjects.forEach(subject => {
            student[subject] = 0
        });
    });
    Subjects = Subjects.concat(SubjectToMarks)

}


//EnterMarks -------------------------------------------------



function EnterMarks(){
    document.removeEventListener('keyup', AcessTheNumberForTheBasketSubjects)
    document.removeEventListener('keyup', NextStudent)

    status = 'Enter Marks'
    report.style.display = 'none'
    classrank.style.display = 'none'
     AutoReportBtn.style.display = 'none'
    SPcontainer.style.display = 'none'
    ABSControlsContainer.style.display = 'none'
    EMcontainer.style.display = 'flex'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'

    findStudentsWithSubject(Subjects[SelectedSubject])
    generateMarksTable(SelectedSubjectStudents)
    populateItems(Subjects)
}





function findStudentsWithSubject(subject) {

    SelectedSubjectStudents = []
    students.forEach(student => {
        if (subject in student) {
            SelectedSubjectStudents.push({
                name: student.name,
                classnumber: student.classNumber,
                marks: student[subject]
            });
        }
    });
    
}

function generateMarksTable(students) {
    // Select the table body
    let tableBody = document.querySelector('#EnterMarksTable tbody');
    tableBody.innerHTML = '';
    
    // Iterate over the students array
    students.forEach(student => {
        // Create a table row
        let row = document.createElement('tr');

        // Create a cell for the name
        let nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        // Create a cell for the class number
        let classNumberCell = document.createElement('td');
        classNumberCell.textContent = student.classnumber;  // Fixed this line
        row.appendChild(classNumberCell);

        // Create a cell for the marks
        let marksCell = document.createElement('td');
        marksCell.textContent = student.marks;
        row.appendChild(marksCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // GSAP animation
    gsap.set('tr', {
        y: 40
    });

    gsap.fromTo('tr', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, ease: "back.out", stagger: 0.01 }
    );
}



function populateItems(array) {
    const container = document.querySelector('.em-SubjectHolder');
    container.innerHTML = '';
    
    array.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        
        itemDiv.className = 'Subject-selector-block';
        itemDiv.textContent = item;
        
        // Add an event listener to log the index of the item when clicked
        itemDiv.addEventListener('click', () => {
            keepcount= 0
            SelectedSubject = index
            findStudentsWithSubject(Subjects[SelectedSubject])
            generateMarksTable(SelectedSubjectStudents)
            EmSubjectLabel.textContent = Subjects[SelectedSubject]
            keeptrakofstudentInput()
            gsap.set('#Subjects-Label', {
                y: 40
            });
        
            gsap.fromTo('#Subjects-Label', 
                { opacity: 0, y: 40 }, 
                { opacity: 1, y: 0, ease: "back.out", stagger: 0.01 }
            );
        });
        
        container.appendChild(itemDiv);
    });

    
}


function keeptrakofstudentInput(){
    if (keepcount < SelectedSubjectStudents.length){
    EmNameLabel.value = SelectedSubjectStudents[keepcount].name
    EmNumberLabel.value = SelectedSubjectStudents[keepcount].classnumber
    EmMarksLabel.placeholder = SelectedSubjectStudents[keepcount].marks

    EmMarksLabel.removeEventListener('keyup', EnterMarksToStudent)
    EmMarksLabel.removeEventListener('keypress', handleKeyPress);
    EmMarksLabel.removeEventListener('keydown', handleKeyDown);
  
    EmMarksLabel.addEventListener('keyup', EnterMarksToStudent)
    EmMarksLabel.addEventListener('keypress', handleKeyPress);
    EmMarksLabel.addEventListener('keydown', handleKeyDown);

    EmNextBtn.addEventListener('click', NextStudentMarks)
    EmPreviousBtn.addEventListener('click', PreviousStudentMarks)
  
    }
}


function NextStudentMarks(){
    if (SelectedSubjectStudents.length > keepcount){
    keepcount ++
    EmMarksLabel.value = ''
    keeptrakofstudentInput()
    findStudentsWithSubject(Subjects[SelectedSubject])
    generateMarksTable(SelectedSubjectStudents)
    populateItems(Subjects)
}
}

function PreviousStudentMarks(){
    if (keepcount > 0){
    keepcount --
    EmMarksLabel.value = ''
    keeptrakofstudentInput()
    findStudentsWithSubject(Subjects[SelectedSubject])
    generateMarksTable(SelectedSubjectStudents)
    populateItems(Subjects)
}
}




function EnterMarksToStudent(){
    if (event.key == 'Enter'){
        if (EmMarksLabel.value.trim() != ''){
            if (SelectedSubjectStudents.length > keepcount){
                evaluateExpression(EmMarksLabel.value)
                assignMarks(students, EmNameLabel.value, Subjects[SelectedSubject], EmMarksLabel.value)
                keepcount ++
                EmMarksLabel.value = ''
                keeptrakofstudentInput()
                findStudentsWithSubject(Subjects[SelectedSubject])
                generateMarksTable(SelectedSubjectStudents)
                populateItems(Subjects)
        }
        else{
            keepcount --
        }
}

else{
     EmMarksLabel.value = ''
}
    }
}

function assignMarks(students, studentName, subject, marks) {
    let student = students.find(student => student.name === studentName);
    if (student && subject in student) {
        student[subject] = marks;

    } else {
    }
}



function handleKeyPress(event) {
    // Allow only numbers and arithmetic operators
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    // Check if the pressed key is allowed
    if (!allowedKeys.includes(event.key) && !(event.ctrlKey && event.key === 'a')) {
        event.preventDefault();
    }
}

// Function to handle keydown events for Ctrl + A
function handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
        event.target.value = 'Ab';
    }
}

// Function to evaluate the expression and display the result
function evaluateExpression(value) {
    const input = value;
    if (input && !input.includes('Ab')) {
        try {
            let result = eval(input); // Use eval carefully
            EmMarksLabel.value = result
        } catch (error) {
            alert('Invalid Expression')
        }
    }
}


EmDoneBtn.addEventListener('click', SpecialConditions)


//Special Conditions
function SpecialConditions(){

    
    status = 'Special Condition'
    report.style.display = 'none'
    classrank.style.display = 'none'
    AutoReportBtn.style.display = 'none'
    SPPopUp.style.display = 'none'
    SPcontainer.style.display = 'flex'
    ABSControlsContainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    populateAable(Subjects)
}



function populateAable(array) {
    const tbody = document.querySelector('#Sp-table tbody');
    tbody.innerHTML = ''; // Clear existing rows
    
    array.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" data-index="${index}"></td>
            <td>${item}</td>
        `;
        tbody.appendChild(row);
    });

    // Add event listener for checkboxes
    tbody.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const index = event.target.getAttribute('data-index');
            if (event.target.checked) {
                // Add item to selectedItems array
                if (!selectedItems.includes(array[index])) {
                    selectedItems.push(array[index]);
                }
            } else {
                // Remove item from selectedItems array
                const itemIndex = selectedItems.indexOf(array[index]);
                if (itemIndex !== -1) {
                    selectedItems.splice(itemIndex, 1);
                }
            }
        });
    });
}

SPPopUp.addEventListener('click', function(event){
    if (event.target.id === 'SP-Pop-UP'){
        SPPopUp.style.display = 'none';
    }
});

SPBlock.addEventListener('click', function(){
    SPPopUp.style.display = 'flex'
})

SpNext.addEventListener('click', function(){
    students = calculateMarksAndRank(students, selectedItems)
    AutoReport()
})



/*/Auto Report */
function AutoReport(){
    status = 'Auto Report'
    report.style.display = 'none'
    classrank.style.display = 'none'
    AutoReportBtn.style.display = 'flex'
    SPPopUp.style.display = 'none'
    SPcontainer.style.display = 'none'
    ABSControlsContainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
}


SPBlock.addEventListener('mouseenter', function(){
    gsap.set('.Sp-Instructions', {
        y: 40,
        opacity: 0
    });

    gsap.fromTo('.Sp-Instructions', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, ease: "back.out" }
    )
})

SPBlock.addEventListener('mouseleave', function(){

    gsap.fromTo('.Sp-Instructions', 
        { opacity: 1, y: 0 }, 
        { opacity: 0, y: 40, ease: "back.out" }
    )
})

AutoReportClassRank.addEventListener('click', ClassRank)
AutoReportReport.addEventListener('click', ShowReport)




/*/Class rank/*/
function ClassRank(){
    report.style.display = 'none'
    classrank.style.display = 'flex'
    AutoReportBtn.style.display = 'none'
    SPPopUp.style.display = 'none'
    SPcontainer.style.display = 'none'
    ABSControlsContainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'
    populaterankTable(students)
    BestRankers= getTopRankers(students)
    assignRanksToToprankers()
    console.log(BestRankers)
}

classrankBack.addEventListener('click', AutoReport)



        function populaterankTable(students) {
            const tableBody = document.querySelector('#rankTable tbody');
            tableBody.innerHTML= ''
            students.forEach(student => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = student.name;
                row.appendChild(nameCell);

                const rankCell = document.createElement('td');
                rankCell.textContent = student.rank;
                row.appendChild(rankCell);

                

                tableBody.appendChild(row);
            });
        }

        function getTopRankers(students) {
            students.sort((a, b) => a.rank - b.rank);

            let topRankers = students.slice(0, 3).map(student => {
                return { name: student.name, rank: student.rank };
            });

            return topRankers;
        }

        function assignRanksToToprankers(){
            const FirstName = document.querySelector('#one-rank-name')
            const SecondName = document.querySelector('#second-rank-name')
            const ThirdName = document.querySelector('#third-rank-name')

            const Firstrank = document.querySelector('#first')
            const Secondrank = document.querySelector('#seconds')
            const Thirdrank= document.querySelector('#third')

            
            Firstrank.textContent = BestRankers[0].rank
            Secondrank.textContent = BestRankers[1].rank
            Thirdrank.textContent = BestRankers[2].rank
            FirstName.textContent = BestRankers[0].name
            SecondName.textContent = BestRankers[1].name
            ThirdName.textContent = BestRankers[2].name
        }








































const totalStudents = document.querySelector('#total-student')
/*  Show Report/*/
function ShowReport(){
    totalStudents.textContent = students.length 
    report.style.display = 'flex'
    classrank.style.display = 'none'
    AutoReportBtn.style.display = 'none'
    SPPopUp.style.display = 'none'
    SPcontainer.style.display = 'none'
    ABSControlsContainer.style.display = 'none'
    EMcontainer.style.display = 'none'
    ABScontainer.style.display = 'none'
    PSTcontainer.style.display = 'none'
    PCDcontainer.style.display = 'none'
    EScontainer.style.display = 'none'
    PCDpopUpCorrectionDiv.style.display = 'none'
    welcomeContainer.style.display = 'none'
    ECNcontainer.style.display = 'none'
    ESNcontainer.style.display = 'none'
    GBScontainer.style.display = 'none'


    populateSelect(students)

    createStudentTableForSpecificStudent(students, students[0].name)
    console.log(students)
    
    selectElement.removeEventListener('change', changeSelector)
    selectElement.addEventListener('change', changeSelector)
}

function calculateMarksAndRank(students, criticalSubjects) {
    // Step 1: Determine the maximum number of subjects any student has
    let maxSubjectsCount = 0;
    students.forEach(student => {
        const subjectCount = Object.keys(student).filter(key => key !== "name" && key !== "classNumber").length;
        if (subjectCount > maxSubjectsCount) {
            maxSubjectsCount = subjectCount;
        }
    });

    // Step 2: Calculate total, average marks, and critical subject pass status for each student
    const studentsWithTotals = students.map(student => {
        const { name, classNumber, ...subjects } = student;
        
        let total = 0;
        let validMarksCount = 0;
        let passedCriticalSubjects = true; // Assume student passes all critical subjects
        
        for (let subject in subjects) {
            const mark = subjects[subject];
            if (mark !== "Ab" && !isNaN(parseInt(mark, 10))) {
                total += parseInt(mark, 10);
                validMarksCount++;
                
                // Check if the subject is a critical subject and if the student failed
                if (criticalSubjects.includes(subject) && parseInt(mark, 10) < 40) {
                    passedCriticalSubjects = false;
                }
            }
        }

        // Calculate the average using the maximum number of subjects
        const average = maxSubjectsCount > 0 ? parseFloat((total / maxSubjectsCount).toFixed(2)) : 0;

        return { ...student, total, average, passedCriticalSubjects };
    });

    // Step 3: Sort students by critical subject pass status and then by average marks in descending order
    const sortedStudents = [...studentsWithTotals].sort((a, b) => {
        if (a.passedCriticalSubjects !== b.passedCriticalSubjects) {
            // Students who passed critical subjects should come first
            return a.passedCriticalSubjects ? -1 : 1;
        }
        // If both have the same critical subject pass status, sort by average score
        return b.average - a.average;
    });

    // Step 4: Assign ranks
    let currentRank = 1;
    let lastAverage = null;
    let rankIncrement = 1;

    const studentsWithRanks = sortedStudents.map((student, index) => {
        if (student.average !== lastAverage) {
            currentRank = rankIncrement;
        }
        
        rankIncrement++;
        lastAverage = student.average;
        
        return { ...student, rank: currentRank };
    });

    return studentsWithRanks;
}



function createStudentTableForSpecificStudent(students, studentName) {
    reportName.textContent = studentName
    const table = document.getElementById('student-table-report');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // Clear any existing content
    thead.innerHTML = '';
    tbody.innerHTML = '';

    // Find the specific student
    const student = students.find(s => s.name === studentName);
    if (!student) {
        return;
    }

    // Step 1: Determine all unique subject names for the student
    const { name, classNumber, total, average, rank, ...subjects } = student;

    // Step 2: Create the header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Subject</th><th>Marks</th>';
    thead.appendChild(headerRow);

    // Step 3: Populate the table body with the student's subject marks
    Object.keys(subjects).forEach(subject => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${subject}</td><td>${subjects[subject]}</td>`;
        tbody.appendChild(row);
    });


        const totalRow = document.createElement('tr')
    totalRow.innerHTML = `<td>Total</td><td>${total}</td>`
    tbody.appendChild(totalRow)

    const averageRow = document.createElement('tr')
    averageRow.innerHTML = `<td>Average</td><td>${average.toFixed(2)}</td>`
    tbody.appendChild(averageRow)

    const rankRow = document.createElement('tr')
    rankRow.innerHTML = `<td>Rank</td><td>${rank}</td>`
    tbody.appendChild(rankRow);
}




let selectorindex
function populateSelect(array) {
    array.sort((a, b) => a.classNumber - b.classNumber);


    selectElement.innerHTML = '';


    array.forEach(item => {
        const optionElement = document.createElement('option');
        optionElement.value = item.name.toLowerCase().replace(/ /g, '-');
        optionElement.textContent = `(${item.classNumber}) ${item.name}`;
        selectElement.appendChild(optionElement);
    });
}

let selectedIndex

function getSelectedOptionIndex() {
    const selectedValue = selectElement.value;
    selectedIndex = students.findIndex(item => item.name.toLowerCase().replace(/ /g, '-') === selectedValue)

  }





function changeSelector(){
    getSelectedOptionIndex()
    createStudentTableForSpecificStudent(students, students[selectedIndex].name)
}

reportBack.addEventListener('click', AutoReport)

