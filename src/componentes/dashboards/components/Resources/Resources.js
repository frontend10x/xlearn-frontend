import React from 'react'
import { Image } from 'react-bootstrap'
import { fileZip } from '../../../../assets/img'

export const Resources = ({title, data, download, type = "default"}) => {
  const renderTitle = () => data.some(e => e?.type === type) && title
  return (
    <>
      <h3>{renderTitle()}</h3>
      {data?.map((item, index) => (
        (type === item?.type ) && (
          <div className="w-50" key={index}>
          <Image src={fileZip} alt='zip' className="zipFile" />
          <a className="mt-5 ms-3" type="button" onClick={download} id={index} >{item?.name}</a>
        </div>
        )
      ))}
    </>
  )
}
