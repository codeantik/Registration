import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './homepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Modal from '../Modal/Modal';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0%'
    }
  },
  input: {
    display: 'none'
  }
}));

export default function Homepage() {
  const arr = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
		{
			id:7
		},
		{
			id:8
		},
		{
			id:9
		},
		{
			id:10
		}
  ];
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState()
  const [box, setBox] = useState(false);
 
 
 

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file)
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     }
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     }
  //   })
  // }

  const encodeFileBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var url = reader.result;
        console.log(url);
        setImage(url)
        localStorage.clear()
        localStorage.setItem('url', url)
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0])
    console.log(event.target.files[0].name);
    console.log(event.target.files[0].size);
    console.log(event.target.files[0].type);
    setSelectedFile(event.target.files[0]);
    let img = event.target.files[0]
    encodeFileBase64(img)
   
    // console.log(localStorage.getItem('url'))
    
  };

  const handleUpload = () => {
    if (selectedFile != null) {
      const formData = new FormData();

      formData.append('File', selectedFile);
      // console.log(file)
      // window.localStorage.setItem('File', "1 " + file + "")
      // console.log(window.localStorage.getItem('File'))
        // console.log(image)

    } else {
      alert('please choose file first');
    }
  };

  const handlebox = () => {
    if (!box) {
      setBox(true);
    }
    if (box) {
      setBox(false);
    }
  };

  const handleSearch = () => {
    // search on button click
    alert('you serached something')
  }

  return (
    <>
      <h1 className="company-name">Magnifio</h1>
      
      <Paper className="search">
        <input type="serach" placeholder="search here" className="file" />
        <button type="search" className="searchBtn" onClick={handleSearch}>Search</button>
        
      </Paper>
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="outlined"
            color="primary"
            component="span"
            className="btn"
          >
            choose file
          </Button>
        </label>
        <div className="upload-btn">
          <Button variant="contained" color="secondary" onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </div>
      <div className="boxes">
        {arr.map((r, index) => {
          return (
            <>
              <div className="box" onClick={handlebox}>
								<div className="info">
               <h1>The Ultimate Guide to Paragraphs | Grammar</h1>


							<h3> From Grammar and Spelling To Style and Tone, Eliminate All Kinds Of Writing Mistakes. Write Text That Is Not Just Grammatically Correct Writing, But Clear and Concise. Easily Improve Any Text.</h3>
							</div>
              </div>
              {box && <div className="modal">how are you?</div>}
            </>
          );
        })}
      </div>
    </>
  );
}