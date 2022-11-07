const markAllAsReadBtn = document.querySelector('.header__mark-button');
const newMessages = document.querySelectorAll('.msg-card--unread');
const numberOfNotifications = document.querySelector('#numOfNotifications');

markAllAsReadBtn.addEventListener('click',() => {
  newMessages.forEach(e => {
    e.classList.remove('msg-card--unread');
  });
  numberOfNotifications.innerHTML = 0;
})