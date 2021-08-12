import React from 'react'
import Gallery from 'react-grid-gallery';
import Image1 from './images/Nibbāna Bodhi (Front Side) Vol1.jpg'
import Image2 from './images/Nibbāna Bodhi (Front Side) Vol2.jpg'
import Image3 from './images/Nibbāna Bodhi (Front Side) Vol3.jpg'
import Image4 from './images/Nibbāna Bodhi (Front Side) Vol4.jpg'
import Image5 from './images/Nibbāna Bodhi (Front Side) Vol5.jpg'
import Image6 from './images/Nibbāna Bodhi (Front Side) Vol6.jpg'
import Image7 from './images/Nibbāna Bodhi (Front Side) Vol7.jpg'
import Image8 from './images/Nibbāna Bodhi (Front Side) Vol8.jpg'
import Image9 from './images/Nibbāna Bodhi (Front Side) Vol9.jpg'
import Image10 from './images/Nibbāna Bodhi (Front Side) Vol10.jpg'
import Image11 from './images/Nibbāna Bodhi (Front Side) Vol11.jpg'
import Image12 from './images/Nibbāna Bodhi (Front Side) Vol12.jpg'
import Image13 from './images/Nibbāna Bodhi (Front Side) Vol122.jpg'




function Photos() {
    const IMAGES =
[{
        src: './images/Nibbāna Bodhi (Front Side) Vol1.jpg',
        thumbnail: './images/Nibbāna Bodhi (Front Side) Vol1.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: {Image2},
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
    return (
        <div>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Photos
