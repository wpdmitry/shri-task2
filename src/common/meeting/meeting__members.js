import {inputTextMembers} from "../../common/input/input__text";
import {selectMembersChoose} from "../select-members/select-members__choose";
import {selectMembersChosen} from "../select-members/select-members__chosen";
import {inputArrow} from "../input/input__arrow";

let meetingMembers = document.getElementsByClassName('meeting__members')[0];

inputTextMembers.addEventListener('focus', function () {
    selectMembersChoose.classList.add('select-members__choose_active');
    selectMembersChosen.classList.add('select-members__chosen_inactive');
    inputArrow.classList.add('input__arrow_openly');
});


document.addEventListener('click', function (e) {
    if (!meetingMembers.contains(e.target)) {
        selectMembersChoose.classList.remove('select-members__choose_active');
        selectMembersChosen.classList.remove('select-members__chosen_inactive');
        inputArrow.classList.remove('input__arrow_openly');
    }

    if (e.target === inputArrow || inputArrow.contains(e.target)) {
        selectMembersChoose.classList.toggle('select-members__choose_active');
        selectMembersChosen.classList.toggle('select-members__chosen_inactive');
        inputArrow.classList.toggle('input__arrow_openly');
    }
});
