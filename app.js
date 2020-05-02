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

console.log(firstSlotUserList);
console.log(secondSlotUserList);
console.log(thirdSlotUserList);

//for(var i =0;i<slots.length;i++){
 /*for (var j = 0; j < users.length; j++) {
    if (slots[0] == users[j].slot) {
        var elem = document.createElement("li");
        elem.innerHTML = users[j].name;
        if (users[j].selected == true) {
            elem.classList.add("selectedli");
        }

        firstSlotUserList.appendChild(elem);
    }
    if (slots[1] == users[j].slot) {
        var elem = document.createElement("li");
        elem.innerHTML = users[j].name;
        if (users[j].selected) {
            elem.classList.add("selectedli");
        }
        secondSlotUserList.appendChild(elem);
    }
    if (slots[2] == users[j].slot) {
        var elem = document.createElement("li");
        elem.innerHTML = users[j].name;
        if (users[j].selected) {
            elem.classList.add("selectedli");
        }
        thirdSlotUserList.appendChild(elem);
    }

}*/
//}


function getUsers(slots,users) {
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
            var elem = document.createElement("li");
            elem.innerHTML = users[j].name;
            elem.id = users[j].id;
            if (users[j].selected) {
                elem.classList.add("selectedli");
            }
            secondSlotUserList.appendChild(elem);
        }
        if (slots[2] == users[j].slot) {
            var elem = document.createElement("li");
            elem.innerHTML = users[j].name;
            elem.id = users[j].id;
            if (users[j].selected) {
                elem.classList.add("selectedli");
            }
            thirdSlotUserList.appendChild(elem);
        }
    
    }
}


getUsers(slots,users);


var btnShiftRight1 = document.querySelector('#shiftRight1');
var btnShiftLeft2 = document.querySelector('#shiftLeft2');
var btnShiftRight2 = document.querySelector('#shiftRight2');
var btnShiftLeft3 = document.querySelector('#shiftLeft3');


