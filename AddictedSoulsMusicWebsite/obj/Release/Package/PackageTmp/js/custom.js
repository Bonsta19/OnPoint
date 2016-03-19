$('.majorpoints').click(function () {
  $(this).find('.hiders').toggle();
});

function toggleHeight(e, maxHeight, elementname) {
    e = document.getElementById(elementname); // e = the gray div

    if (e.style.height != '28px') {
        e.style.height = '28px'; // height of one line: 20px
    } else {
        e.style.height = maxHeight + 'px';
    }
}
