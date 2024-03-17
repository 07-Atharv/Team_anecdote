import React from "react";

const UploadWidget = (props) => {
  const { field, idx, handleChangeQuestion } = props.props
  const cloudinaryRef = React.useRef();
    const widgetRef = React.useRef(); 

  React.useEffect( () => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget( {
        cloudName: 'dvg8flzpt', 
        uploadPreset: 'ftsml2js',
    }, function  ( error, result ) {
        // console.log("Upload REsult :", result );
        if(result.event === "success"){
          const imgurl =   result['info']['secure_url']
          handleChangeQuestion(idx,field,imgurl)
        }
    }) 
  }, []);

  return (
    <button className="bg-black text-white px-8 py-4 rounded-md my-4" onClick={ () => {widgetRef.current.open()} }>
        Upload Image
    </button>
  );
};

export default UploadWidget;
