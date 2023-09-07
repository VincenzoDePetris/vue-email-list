const { createApp } = Vue;

createApp({
  data() {
    return {
      randomMail: [],
    };
  },
  methods: {
    generateMail() {
      this.randomMail = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const Mail = response.data.response;
            this.randomMail = Mail;
          });
        this.randomMail.push(this.Mail);
        console.log(this.randomMail);
      }
    },
  },

  mounted() {
    this.generateMail();
  },
}).mount("#app");
