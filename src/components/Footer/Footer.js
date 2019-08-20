import React from 'react';

export default function Footer() {
	const footerStyle = {
      padding: "4%",
      position: "fixed",
      left: "0",
      bottom: "7%",
      height: "10px",
      width: "100%"
    };    

    const phantomStyle = {
      display: "fixed",
      padding: "0%",
      height: "0%",
      width: "100%"
    };

	return(
	       <div style={phantomStyle}>
	       <div style={footerStyle}>
         {'FOOTER'}
	       </div>
	       </div>
  )
}