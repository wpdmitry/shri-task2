let selectMembersMember = document.getElementsByClassName('select-members__member');
selectMembersMember = Array.from(selectMembersMember);

selectMembersMember.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('select-members__member_chosen');
    })
});