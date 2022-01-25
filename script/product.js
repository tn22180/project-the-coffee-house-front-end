const btnHide = document.querySelector(".product__story-hide");
const btnSee = document.querySelector(".product__story-see");

btnSee.onclick = function()
{
    divParagrap.style.maxHeight = 'unset';
    this.style.display = 'none';
    btnHide.style.display = 'block';
}
btnHide.onclick = function()
{
    divParagrap.style.maxHeight = '150px';
    this.style.display = 'none';
    btnSee.style.display = 'block';
}