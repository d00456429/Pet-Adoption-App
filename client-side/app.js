const URL = "http://localhost:8080";

Vue.createApp({
	data() {
		return {
			page: 1,
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
			pets: [],
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
