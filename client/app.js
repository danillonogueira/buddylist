const $ = document.querySelector.bind(document);

const controller = new Controller();
$('.form__create').addEventListener('click', controller.registerContact.bind(controller));
$('.form__clear').addEventListener('click', controller.clearForm.bind(controller));
$('.form__delete').addEventListener('click', controller.removeContacts.bind(controller));