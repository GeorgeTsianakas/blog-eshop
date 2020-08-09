import './Image.css';

const image = props => (
    < div
        className="image"
        style={
            {
                `url('${props.imageUrl}')`,
            backgroundSize
            :
            props.contain ? 'contain' : 'cover',
            backgroundPosition
            :
            props.left ? 'left' : 'center'
        }
        }
    />
)


export default image;
