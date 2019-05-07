const $ = document.querySelector.bind(document);
const controller = new Controller();
$('.form__create').addEventListener('click', controller.createClick.bind(controller));
$('.form__empty').addEventListener('click', controller.emptyForm.bind(controller));
$('.form__delete').addEventListener('click', controller.deleteAllClick.bind(controller));
$('.view').addEventListener('click', controller.removeClick.bind(controller));