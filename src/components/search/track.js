import React from 'react'

export default function Track({track}) {
  console.log(track.album)
  return (
    <div className="d-flex m-2 align-items-center" >
        <img src={track.imgUrl} style={{ height: "64px", width: "64px" }} />
        <div className="ml-3">
          <div>{track.name}</div>
          <div className="text-muted">{track.artist}</div>
        </div>
      </div>
  )
}
