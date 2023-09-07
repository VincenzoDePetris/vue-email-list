const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
    };
  },
  methods: {
    generateMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const generateMail = response.data.response;
            this.mails.push(generateMail);
          });
      }
    },
  },

  mounted() {
    this.generateMail();
  },
}).mount("#app");
