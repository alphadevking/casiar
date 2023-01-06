import React from 'react'
import { CardTypes } from './index';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Buttons/Button';
import { BiHeart } from 'react-icons/bi';
import { RiHeartFill } from 'react-icons/ri';

export const ArtCard: React.FC<CardTypes> = ( 
    {
        artPrice,
        src,
        title,
        subTitle,
        alt,
    }
 ) => {

    const [liked, setLiked] = React.useState(false);

    function handleClick() {
        setLiked(!liked);
    }

    return (
        <div>
            
            {/* Card */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><StaticImage src={'../../assets/images/cover-image.jpg'} alt="" /></figure>
                <div className="card-body relative">
                    <h2 className="card-title">{title}</h2>
                    <p>{subTitle}</p>
                    <div className="card-actions justify-start px-5">
                        <Button title='Claim free'/>
                    </div>
                    <div className='absolute right-5 top-5'>
                        <p>Floor Price: <span className='font-bold text-lg'>{artPrice}</span></p>
                    </div>
                    <div className='absolute bottom-5 right-10 text-center'>
                        <button onClick={handleClick}>
                            {liked ? (
                                <RiHeartFill size={20} color="#004267" />
                            ) : (
                                <BiHeart size={20} />
                            )}
                        </button>
                        <label className='block'>Add to wishlist</label>
                    </div>
                </div>
            </div>
            
        </div>
    )
}