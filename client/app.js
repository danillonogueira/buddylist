const $ = document.querySelector.bind(document);
const controller = new Controller();
$('.form__create').addEventListener('click', controller.requestContactRegistering.bind(controller));
$('.form__empty').addEventListener('click', controller.emptyForm.bind(controller));
$('.form__delete').addEventListener('click', controller.requestContactsRemoval.bind(controller));
$('.view').addEventListener('click', controller.requestContactRemoval.bind(controller));
