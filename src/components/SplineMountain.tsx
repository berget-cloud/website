import Spline from '@splinetool/react-spline'

export function SplineMountain() {
  return (
    <Spline
      scene="/mountain.spline"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}
