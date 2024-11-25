import { Html, useProgress} from "@react-three/drei";

const CanvasLoader = () => {

    const {progress} = useProgress()

    return (
        <Html
        as="div"
        center
        style={{
            display: 'outside',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
            <span className="canvas-loader" />
            <p style={{ color: '#f1f1f1', fontSize: '24px', fontWeight: 800, marginTop: 40 }}>
                {progress != 0 ? `${progress.toFixed(2)}%` : 'Loading ...'}</p>
        </Html>
    )
}
export default CanvasLoader
