import {AxiosInstance} from './AxiosInstance'


export const API ={

  //Login User
   async login(params){
    try {
      const response = await AxiosInstance.post("/user/login",{...params})
      // console.log(response.data)
      return response?.data

    } catch (error) {
      console.log("error", error);
      return error?.response?.data;
    }
  },


  //Creating user
  async createUser(params){
    try{
      // console.log(params,"slsk")
      const response = await AxiosInstance.post("/user/create",{...params})
      // console.log(response,"djskdjs") 
      return response?.data
    }
    catch (error) {
      console.log(error.response.data.message, "error from APIS");
      return error?.response?.data;
      // return error?.response?.data?.message;
    }
  },
  
    //Forgot Password
  async forgotPassword(params){
    try{
      const response = await AxiosInstance.post("user/forgot_password",{...params})
      return response?.data
    }
    catch (error) {
      console.log(error.response.data.message, "error from APIS");
      return error?.response?.data;
    }
  },


  //Restaurant List
  async restaurantList(token){
    try {
      const response = await AxiosInstance.post("/restaurant/LIST")
      // console.log(response?.data?.data?.[0]?.address,"5")
      return response?.data
  
    } catch (error) {
      // console.log(error.response.data.mesaage,"error from APIS")
      return error?.response?.data;
    } 
  },


  //Cateogry List
  async categoryList (params,token){
    try {
      const response = await AxiosInstance.get("/category/list", {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(response);
      return response?.data;
    }
  catch(error){
    return error?.response?.data;

  }
},


//Cuisine list
async cuisineList (params,token){
  try {
    const response = await AxiosInstance.get("/cuisine/list",{
      headers:{
        "x-access-token":token,
      },
    });
      console.log(response)
      return response?.data
  } catch (error) {
    return error?.response?.data;
  }
},


//Update Profile
async updateProfile(params,token){
  // console.log(params.file,"3")
  const formData = new FormData()
    formData.append("file", params?.file);
    formData.append("name", params?.name);
    formData.append("phone", params?.phone);
    // formData.append("email", params?.email);

    // console.log(formData,"4");

  try {
    const response = await AxiosInstance.post("/user/update_profile",formData,
    {
      headers: {
        "x-access-token": token,
      },
    }
    )
    console.log(response,"5");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
},


//Get Profile Details
async getProfile(token){

  try{
    const response = await AxiosInstance.get("/user/detail",
      {
        headers:{
          "x-access-token":token,
        },
      }
    )
    // console.log(response)
    return response?.data
  }
  catch(error){
    return error?.response?.data;

    console.log(error)
  }
},

// Change Password
async ChangePassword(params,token){
  console.log(params,"3")
  try {
    const response = await AxiosInstance.post("user/change_password",{...params},
    {
      headers:{
        "x-access-token":token
      },
    }
    )
    console.log(response?.data?.message,"4")
    return response?.data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

}





