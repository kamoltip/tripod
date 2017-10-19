
import axios from "axios";

// Cloudinary help files
const Cloudinary_Url = '    https://api.cloudinary.com/v1_1/tripod/upload';
const API_Key = '447781538358186';
const Coudinary_Upload_preset = 'mtmzmtt5';

const delete_Url = 'https://api.cloudinary.com/v1_1/tripod/'

export default {
	//Cloudinary upload
	postCloudinary: function( picData ) {
	  console.log(picData.file.coords);
	  const formData = new FormData();
	  formData.append("file",picData.file);
	  formData.append("tags", `codeinfuse, medium, gist`);
	  formData.append("upload_preset", Coudinary_Upload_preset);
	  formData.append("api_key", API_Key);
	  formData.append("timestamp", (Date.now() / 1000) | 0);

	  return axios.post(Cloudinary_Url, formData, {
      	  sheaders: { "X-Requested-With": "XMLHttpRequest" },
      });
	},

	// Delete from Cloudinary
	deleteCloudinary: function( pubId ) {
	  return axios.delete(delete_Url, pubId, {
	  	sheaders: { "X-Requested-With": "XMLHttpRequest" },
	  });
	},

	// Read from Mongo
	getPicDetails: () => {
	  return axios.get("/api/activity")
		.then(function(res){
		  console.log("axios resutls",res);
		  return res;
		})
	},

	// Save in Mongo
	savePicDetails: ( url, lat, long, pid, pin ) => {
	  const newPic = {
			pic_url: url,
			pic_latitude: lat,
			pic_longitude: long,
			pic_public_id: pid,
			pin: pin,
		};
	  console.log("Save Mongo : " + url);
	  return axios.post("/api/activity", newPic)
	  	.then(function(res) {
	  		console.log("axios result" , res.data._id);
	  		return res.data_id;
	  	})
	},

	//Delete from Mongo
	deletePicDetails: (id) => {
	  return axios.delete("/api/activity/" + id )
		// .then(function(res){
		// 	console.log("deleted");
		// 	return res;
		// })
	},

	// Edit rotation
	editPicDetails: (id,url) => {
		const newUrl = {pic_url: url};
		return axios.put("/api/activity/" + id , newUrl )
		.then(function(res){
			console.log("Rotated", res.data._id);
			return res.data_id;
		})
	},

	//Register User
	registerUser: (input) => {
		return axios.post("/api/authentication/register", input)
			.then(function(res) {
				return res;
			});
		},

	//Register User
	loginUser: (input) => {
		return axios.post("/api/authentication/login", input)
			.then(function(res) {
					return res;
			});
	},
};
