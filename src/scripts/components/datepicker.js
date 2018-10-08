// import flatpickr from "flatpickr";

// console.dir(flatpickr);

// flatpickr('[datepicker]');

$(() => {
    const $datepicker = $('[datepicker]');
    const options = {
        placeholder: '',
    };

    $datepicker.datepicker(options);
});
