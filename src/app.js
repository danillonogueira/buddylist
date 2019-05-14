const $ = document.querySelector.bind(document);
const controller = new Controller();
$('.form__clear').addEventListener('click', controller.clearClick.bind(controller));
$('.form__delete').addEventListener('click', controller.deleteAllClick.bind(controller));
$('.form__create').addEventListener('click', controller.createClick.bind(controller));
$('.form__edit').addEventListener('click', controller.editClick.bind(controller));
$('.view').addEventListener('click', controller.contactListClick.bind(controller));