#API
  * functionName(params)
    => Url endpoint
    => Example Response

  * getLatestImg(cameraId)
    => '/:camera_id/latest'
    => {
      cameraId: Integer,
      latestImgUrl: String,
      latestImgId: Integer
    }
  * getNextImg(cameraId, prevImgId)
    => '/:camera_id/?prev_img=:prev_id'
    => {
      cameraId: Integer,
      imgUrl: String,
      imgId: Integer,
      prevImgId: Integer
    }
  * getCamIds()
    => '/cameras'
    => {
      cameras: [id1, id2, id3, ...]
    }

