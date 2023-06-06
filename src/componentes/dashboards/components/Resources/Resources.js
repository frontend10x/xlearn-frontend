import React from 'react'
import { Image } from 'react-bootstrap'
import { fileZip } from '../../../../assets/img'

export const Resources = ({title, data, download,}) => {
  const renderTitle = () => data.some(e => e?.type === title) && title
  return (
    <>
      <h3>{renderTitle()}</h3>
      {data?.map((item, index) => (
        (title === item?.type ) && (
          <div key={index}>
            <h3 className='mt-3' >Leccion: {index + 1} </h3>
          <Image src={fileZip} alt='zip' className="zipFile" style={{ width: '9%' }} />
          <a className="mt-5 ms-3" type="button" onClick={download} id={index} rel="noreferrer">{item?.name}</a>
        </div>
        )
      ))}
    </>
  )
}
