import React from "react";

const UploadWidget = () => {
  const cloudinaryRef = React.useRef();
    const widgetRef = React.useRef(); 

  React.useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget( {
        cloudName: 'dvg8flzpt', 
        uploadPreset: 'ftsml2js',
    }, function( error, result ) {
        console.log( result );
    }) 
  }, []);

  return (
    <button className="bg-black text-white px-8 py-4 rounded-md my-4" onClick={ () => {} }>
        Upload Image
    </button>
  );
};

export default UploadWidget;
