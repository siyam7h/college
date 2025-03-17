import { Image } from 'next/image';

export function createImage1(props) {
    return (
        <div>
            <Image src={props.src} alt={props.alt}></Image>
        </div>
    )
}

export function createImage2() {
    return(
        <Image src='' alt=''></Image>
    )
}
