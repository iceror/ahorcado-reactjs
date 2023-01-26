import image0 from '../assetss/0.png';
import image1 from '../assetss/1.png';
import image2 from '../assetss/2.png';
import image3 from '../assetss/3.png';
import image4 from '../assetss/4.png';
import image5 from '../assetss/5.png';
import image6 from '../assetss/6.png';
import image7 from '../assetss/7.png';
import image8 from '../assetss/8.png';
import image9 from '../assetss/9.png';

let images: string[] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
]

interface Props {
    imageNumber: number;
}

export function HangImage({ imageNumber }: Props) {
    if (imageNumber >= 9) {
        imageNumber = 9;
    }

    return (
        <img
            src={images[imageNumber]}
            alt=" HangImage "
            style={{ width: 250 }}
        />

    ) //JSX Element

}