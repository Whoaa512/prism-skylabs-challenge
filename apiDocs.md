#API
  * functionName(params)
    => Url endpoint
    => Example Response

  * getLatestImg(cameraId)
    => '/:camera_id/latest'
    => {
      cameraId: Integer,
      imgUrl: String,
      imgId: Integer
    }
  * getNextImg(cameraId, curImgId)
    => '/:camera_id/?cur_img=:cur_img_id&next=1'
    => {
      cameraId: Integer,
      imgUrl: String,
      imgId: Integer
    }
  * getPrevImg(cameraId, curImgId)
    => '/:camera_id/?cur_img=:cur_img_id&next=0'
    => {
      cameraId: Integer,
      imgUrl: String,
      imgId: Integer
    }
  * getCamIds()
    => '/cameras'
    => {
      cameras: [id1, id2, id3, ...]
    }

