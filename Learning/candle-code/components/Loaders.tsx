import loaderStyle from '@utils/loading.module.css'

export function LoaderBlockout({ width, height }: { width: number, height: number }) {
    return (
        <div style={{ width: `${width}px`, height: `${height}px` }}>
            <div className={loaderStyle.blockout}></div>
        </div>
    )
}

export function LoaderBoundingBox() {
    return <div className={loaderStyle.loader}></div>
}