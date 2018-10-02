import React from 'react'
import { cloudinary } from '../lib'
import Dropzone from 'react-dropzone'

class CloudinaryFinder extends React.Component {
  constructor(props) {
    super(props)
  }

  handleUpload = async (files) => {
    console.log('files ->', files)
    // const uploaded = await cloudinary.upload(files[0], 'restaurant')

    // console.log('uploaded ->', uploaded)
  }

  render () {
    return <Dropzone
      onDrop={(accepted) => this.handleUpload(accepted)}
      accept="image/*"
      className={`dropzone-uploader restaurant-gallery margin-bottom-10`}
    >
      <p>drop or click to upload new picture into gallery</p>
    </Dropzone>
  }
}

export default CloudinaryFinder
