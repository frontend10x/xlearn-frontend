import React from 'react'
import { Image } from 'react-bootstrap'
import { fileZip } from '../../../../assets/img'
import { useState } from 'react'
import { useEffect } from 'react'

export const Resources = ({title, data, download,}) => {
  const renderTitle = () => data.some(e => e?.type === title) && title
  
  return (

    <>
      <h3>{renderTitle()}</h3>
      {data?.map((item, index) => (
        (title === item?.type ) && (
          <div key={index}>
            {item?.description ?
              <h3 className='mt-3' > {item?.description} </h3>
              :
              <></>
            }
          <Image src={fileZip} alt='zip' className="zipFile" style={{ width: '9%' }} />
          <button className="mt-3 ms-5 btn" style={!item?.file_path ? {backgroundColor:"E1E1E1", color:"#fff"} : {backgroundColor:"#002333", color:"#fff"}} type="button" disabled={!item?.file_path} onClick={download} id={index} rel="noreferrer" dangerouslySetInnerHTML={{ __html: item?.name}} ></button>
        </div>
        )
      ))}
    </>
  )
}
