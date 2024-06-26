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
		getListings: async function () {
			let response = await fetch(`${URL}/listings`);
			let data = await response.json();
			this.listings = data;
		},
		createListing: async function () {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

			let encodedData =
				"name=" +
				encodeURIComponent(this.newListing.name) +
				"&species=" +
				encodeURIComponent(this.newListing.species) +
				"&breed=" +
				encodeURIComponent(this.newListing.breed) +
				"&age=" +
				encodeURIComponent(this.newListing.age) +
				"&gender" +
				encodeURIComponent(this.newListing.gender);

			let requestOptions = {
				method: "POST",
				body: encodedData,
				headers: myHeaders,
			};

			let response = await fetch(`${URL}/listings`, requestOptions);

			if (response.status === 201) {
				let data = await response.json();
				this.listings.push(data);
				this.newListing.name = "";
				this.newListing.species = "";
				this.newListing.breed = "";
				this.newListing.age = "";
				this.newListing.gender = "";
			} else {
				alert("Failed to create listing");
			}
		},
		deleteListing: async function (index) {
			let requestOptions = {
				method: "DELETE",
			};
			let listingId = this.listings[index]._id;
			let response = await fetch(
				`${URL}/listings/${listingId}`,
				requestOptions
			);
			if (response.status == 200) {
				this.listings.splice(index, 1);
			} else {
				alert("Failed to delete listing");
			}
		},

		getApplications: async function () {
			let response = await fetch(`${URL}/applications`);
			let data = await response.json();
			this.applications = data;
			console.log(data);
		},

		createApplication: function () {
			let newApp = {
				name: this.name,
				phoneNum: this.phoneNum,
				email: this.email,
				petId: this.petId,
			};
			this.applications.push(newApp);
		},

		createapplication: async function () {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

			let encodedData =
				"name=" +
				encodeURIComponent(this.newApplication.name) +
				"&phoneNum=" +
				encodeURIComponent(this.newApplication.phoneNum) +
				"&email=" +
				encodeURIComponent(this.newApplication.email) +
				"&petId=" +
				encodeURIComponent(this.newApplication.petId);

			let requestOptions = {
				method: "POST",
				body: encodedData,
				headers: myHeaders,
			};

			let response = await fetch(`${URL}/applications`, requestOptions);

			if (response.status === 201) {
				let data = await response.json();
				this.applications.push(data);
				this.newApplication.name = "";
				this.newApplication.phoneNum = "";
				this.newApplication.email = "";
				this.newApplication.petId = "";
			} else {
				alert("Failed to create application");
			}
		},
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
