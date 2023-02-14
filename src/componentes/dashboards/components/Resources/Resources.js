import React from 'react'
import { Image } from 'react-bootstrap'

export const Resources = ({file, data, download, index}) => {
  return (
    <div className="w-50" >
        <Image src={file} alt='zip' className="zipFile" />
        <a className="mt-5 ms-3" type="button" onClick={download} id={index} >{data?.name}</a>
    </div>
  )
}
