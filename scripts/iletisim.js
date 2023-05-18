new Vue({
    el: '#contact-form',
    data: {
        name: '',
        email: '',
        message: ''
    },
    methods: {
        clearForm: function() {
            this.name = '';
            this.email = '';
            this.message = '';
        },
        submitForm: function() {
            if (this.email.includes('@') && this.message.length <= 500) {
                alert('Form Gönderildi!');
                this.clearForm();
            } else {
                alert('Girdilerinizi Kontrol ediniz!');
            }
        }
    }
});