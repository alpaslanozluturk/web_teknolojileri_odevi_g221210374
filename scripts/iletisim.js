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
                alert('Mesajınız İletildi!');
                this.clearForm();
            } else {
                alert('Email hatalı Veya Girdiğiniz mesaj 500 karakterden fazla!');
            }
        }
    }
});