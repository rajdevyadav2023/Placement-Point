// Jai Sri Ganesh 🛕
const dateTime = document.getElementById('date-time');
const eduList = document.getElementById('edu-list');
const addEdu = document.getElementById('addEdu');
let eduNum = 2;

const skiList = document.getElementById('ski-list');
const addSki = document.getElementById('addSki');
const userSki = document.getElementById('user-ski');

const expList = document.getElementById('exp-list');
const addExp = document.getElementById('addExp');
let expNum = 2;
// function for time and date 
function getToday() {
    const monShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let hrs = today.getHours();
    let mns = today.getMinutes();

    let sign;
    if (hrs <= 12) {
        sign = "AM";
    } else {
        sign = "PM";
    }
    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `${monShort[month]}`;
    }
    if (hrs < 10) {
        hrs = `0${hrs}`;
    }
    if (mns < 10) {
        mns = `0${mns}`;
    }

    return { day, month, year, hrs, mns, sign };
}

setInterval(() => {
    let { day, month, year, hrs, mns, sign } = getToday();
    dateTime.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${day} ${month} ${year} <span>${hrs}:${mns} ${sign}</span>`;
}, 500);

addEdu.addEventListener('click', function(){
eduList.innerHTML += `
<li>
<div class="edu-box-form">
    <span>${eduNum}</span>
    <div class="full-form-control">
        <input type="text" placeholder="Degree">
    </div>
    <div class="full-form-control">
        <input type="text" placeholder="University Name">
    </div>
    <div class="form-controls">
        <div class="form-control">
            <input type="number" placeholder="Started Year">
        </div>
        <div class="form-control">
            <input type="number" placeholder="Completed Year">
        </div>

    </div>
</div>
</li>
`;

eduNum++;
});

// function to add skills 
addSki.addEventListener("click", function(){
    let skill = userSki.value.trim() ;
    if(skill!==""){
        skiList.innerHTML += `<li>${skill}</li>`;
    }
    userSki.value = '';
});

// function to add experience 

addExp.addEventListener('click', function(){
    expList.innerHTML += `
    <li class="exp-box-form">
    <span>${expNum}</span>
    <div class="full-form-control">
    <input type="text" placeholder="Job Profile">
    </div>
    <div class="full-form-control">
    <input type="text" placeholder="Company Name">
    </div>

    <div class="form-controls">
        <div class="form-control">
        <input type="text" placeholder="Year">
        </div>
        <div class="form-control">
        <input type="text" placeholder="Company Address">
        </div>
    </div>
    <div class="full-form-control">
        <textarea placeholder="What did you did there?"></textarea>
    </div>
   
</li>
    `;

    expNum++;
})
