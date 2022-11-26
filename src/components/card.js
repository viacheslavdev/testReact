import React from 'react'

export default function Card(p) {
    let badgeText
    if (p.openSpots === 0) {
        badgeText = 'SOULD OUT'
    } else if (p.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
            <div className='card'>
                    {badgeText && <div className="card-availiable">{badgeText}</div>}
                    <img className='photo' src={`../images/${p.coverImg}`} alt=''/>
                    <div>
                        <img className='star' src="../images/Star.png" alt=''/>
                        <span>{p.stats.rating}</span>
                        <span className='silver-text'>({p.stats.reviewCount})·</span>
                        <span className='silver-text'>{p.location}</span>
                    </div> 
                    <p className='promo'>{p.title}</p>
                    <p><span className='bold'>From ${p.price}</span> / person</p>
            </div>
    )
}