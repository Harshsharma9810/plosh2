Profile with plus icon on left working fine
.loginbox{
    // height: max-content;
    width: 38%;
    // border: 1px solid black;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    font-family: 'Lorin';
    border-radius: 10px;
    margin-top: 130px;

    @media screen and (max-width:890px) {
        width: 60%;
        border: none;
    }
    @media screen and (max-width:450px) {
        width: 80%;
    }
   
    .bigimgbox {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      
        .imgbox {
          border: 2px solid #4B0082;
          overflow: hidden;
          width: 130px; 
          height: 130px;
          border-radius: 50%; 
      
          .img {
            margin: 0;
            padding: 0; 
            height: 100%;
            width: 100%;
            object-fit: cover; 
          }
        }
      
        .addFile {
          position: absolute;
          top: 0; 
          .input1 {
            visibility: hidden;
          }
      
          .plus {
            height: 30px;
            width: 30px;
          }
        }
      }
      
      
      
      
      
      
    .heading{
        font-weight: 800;
        font-size: 40px;
        line-height: 40px;
        @media screen and (max-width:400px) {
            font-size: 30px;
        }
    }
    .input{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 20px;
        .in1{
            width: 100%;
            margin: 0 auto;
        }
    }

    .form{
        .inputs{
            .address{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin:0 10px;
                // margin-top: 20px;
                // margin-bottom: 35px;
                .showhide{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    position: relative;
                    .hideimg{
                        // margin-right: 20px;
                        position: absolute;
                        right: 10px;
                        cursor: pointer;
                    }
                }

                .label{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 18px;
                    color: #232323;
                    // margin-bottom: 4px;
                }
            }
        }
    }
   
    .btndiv{
        margin-top: 50px;
        cursor: pointer;
        margin-bottom: 30px;
    }
}
.error{
    color: red;
}
.loader{
    color: #4B0082;
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    font-size: 20px;
}
