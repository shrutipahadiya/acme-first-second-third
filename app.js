const slots = ['first', 'second', 'third'];

const users = [
    { id: 1, name: 'moe', slot: 'first' },
    { id: 2, name: 'larry', slot: 'second' },
    { id: 3, name: 'curly', slot: 'third' },
    { id: 4, name: 'lucy', slot: 'third', selected: true },

];


var firstSlotUserList = document.querySelector('#firstUsers');
var secondSlotUserList = document.querySelector('#secondUsers');
var thirdSlotUserList = document.querySelector('#thirdUsers');

/*console.log(firstSlotUserList); //no li
console.log(secondSlotUserList);
console.log(thirdSlotUserList);*/

function getUser(slots, users) {
    // console.log("getUsers is called ~~~~"+users.length);
    //console.log(users);
    var firstSlotUserList = document.querySelector('#firstUsers');
    firstSlotUserList.innerHTML = "";
    var secondSlotUserList = document.querySelector('#secondUsers');
    secondSlotUserList.innerHTML = "";
    var thirdSlotUserList = document.querySelector('#thirdUsers');
    thirdSlotUserList.innerHTML = "";
    /*console.log(firstSlotUserList);
    console.log(secondSlotUserList);
    console.log(thirdSlotUserList);*/

    for (var j = 0; j < users.length; j++) {
        if (slots[0] == users[j].slot) {
            var elem = document.createElement("li");
            elem.innerHTML = users[j].name;
            elem.id = users[j].id;
            if (users[j].selected == true) {
                elem.classList.add("selectedli");
            }
            firstSlotUserList.appendChild(elem);
        }

        if (slots[1] == users[j].slot) {
            var elem1 = document.createElement("li");
            elem1.innerHTML = users[j].name;
            elem1.id = users[j].id;
            if (users[j].selected) {
                elem1.classList.add("selectedli");
            }
            secondSlotUserList.appendChild(elem1);
        }

        if (slots[2] == users[j].slot) {
            var elem2 = document.createElement("li");
            elem2.innerHTML = users[j].name;
            elem2.id = users[j].id;
            if (users[j].selected == true) {
                elem2.classList.add("selectedli");
            }
            thirdSlotUserList.appendChild(elem2);
        }
    }

}


getUser(slots, users);




firstSlotUserList.addEventListener("click", (ev) => {
    if (ev.target && ev.target.nodeName == "LI") {
        // console.log("List item II ", ev.target.id, " was clicked!");
        // console.log("List item II ", ev.target.value, " was clicked!");
        // console.log("List item innerhtml II ", ev.target.innerHTML);
        let id = ev.target.id;

        for (let i = 0; i < users.length; i++) {
          if (users[i].id == id) {
            if (users[i].selected == true) {
                    users[i].selected = false;
                } else {
                     users[i].selected = true;
                }

            }
        }
        this.users = users;
       getUser(slots, users);
    }
})


secondSlotUserList.addEventListener("click", (ev) => {
    if (ev.target && ev.target.nodeName == "LI") {
       let id = ev.target.id;
       for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
               if (users[i].selected == true) {
                    users[i].selected = false;
                } else {
                   users[i].selected = true;
                }

            }
        }
        this.users = users;
        getUser(slots, users);
    }
})



thirdSlotUserList.addEventListener("click", (ev) => {
    if (ev.target && ev.target.nodeName == "LI") {
       let id = ev.target.id;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                if (users[i].selected == true) {
                    users[i].selected = false;
                } else {
                    users[i].selected = true;
                }

            }
        }
        this.users = users;
        getUser(slots, users);
    }
})

var btnShiftRight1 = document.querySelector('#shiftRight1');
var btnShiftLeft2 = document.querySelector('#shiftLeft2');
var btnShiftRight2 = document.querySelector('#shiftRight2');
var btnShiftLeft3 = document.querySelector('#shiftLeft3');


btnShiftRight1.addEventListener("click", (ev) => {
   // console.log("btnShiftRight1 is called ~~~~");
    for (let i = 0; i < users.length; i++) {
        if (users[i].slot == 'first' && users[i].selected == true) {
          //  console.log("btnShiftRight1 if condition is called==");
            users[i].slot = 'second';
        }
    }
    this.users = users;
   // console.log(users);
   //return users;
    getUser(slots, users);

})


btnShiftLeft2.addEventListener("click", (ev) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].slot == 'second' && users[i].selected == true) {
          users[i].slot = 'first';
        }
    }
    this.users = users;
    getUser(slots, users);

})


btnShiftRight2.addEventListener("click", (ev) => {
   for (let i = 0; i < users.length; i++) {
        if (users[i].slot == 'second' && users[i].selected == true) {
           users[i].slot = 'third';
        }
    }
    this.users = users;
    getUser(slots, users);

})

btnShiftLeft3.addEventListener("click", (ev) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].slot == 'third' && users[i].selected == true) {
            users[i].slot = 'second';
            //return true;
        }
    }
    this.users = users;
    //return users;
    getUser(slots, users);

})
