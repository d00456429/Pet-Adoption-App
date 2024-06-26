const URL = "http://localhost:8080";

Vue.createApp({
  data() {
    return {
      page: 1,
      searchInput: "",
      applications: [
        {
          name: "alec",
          phoneNum: "123456789",
          email: "searle.alec@gmail.com",
          petId: "abc123",
        },
        {
          name: "saul",
          phoneNum: "00000000",
          email: "saul@gmail.com",
          petId: "123abc",
        },
      ],
      listings: [
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
      newListing: {
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
  computed: {
    filteredListings: function () {
      return this.listings.filter((listing) => {
        return (
          "breed" in listing &&
          listing.breed.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      });
    },
  },
  created: function () {
    console.log("Created");
  },
}).mount("#app");
//pet breed name or species
