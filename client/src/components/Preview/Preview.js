 import React from 'react';

 const Preview = ({ children }) => {
 	return (
 		<div style="previewImg">
 			{ children }
 		</div>
 	);
 };

 const style = {
  previewImg: {
    width: '80%',
    height: 'auto',
    padding:'1%',
    margin:'1%' 
  }
};