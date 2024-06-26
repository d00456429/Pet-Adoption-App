const URL = "http://localhost:8080";

Vue.createApp({
  data() {
    return {
      page: 1,
      applications: [],
      pets: [
        {
          name: "Arma",
          species: "Armadillo",
          breed: "Armadillo",
          age: "27",
          gender: "Male",
        },
        {
          name: "Bandit",
          species: "Gecko",
          breed: "Leopard-tail",
          age: "1",
          gender: "Male",
        },
      ],
      newPet: {
        name: "",
        species: "",
        breed: "",
        age: "",
        gender: "",
      },
      newApplication: {
        name: "",
        phoneNum: "",
        email: "",
        petId: "",
      },
    };
  },
  methods: {
    setPage: function (page) {
      this.page = page;
    },
    getListings: function () {},
    createListing: function () {},
    deleteListing: function (listingId) {},
    getApplications: function () {},
    createApplication: function () {},
    changePage: function (page) {},
  },
  created: function () {
    console.log("Created");
  },
}).mount("#app");
