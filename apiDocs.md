#API
  * functionName(params)
    => Url endpoint
    => Example Response

  * getLatestImg(camera)
    => '/:camera_id/latest'
    => {
      cameraId: Integer,
      latestImg: String of url,
      latestImgId: Integer
    }
  * getNextImg(camera, prevImgId)

