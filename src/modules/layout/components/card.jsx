export default function Card({color}) {
    return(
        <>
        <div className="card" style={{ backgroundColor: color }}>
            <p className="p">Card: {color}</p>
        </div>
        <style jsx>{`
            .card {
                width: 200px;
                height: 200px;
                border: 1px solid ${color};
                display: flex;
                justify-content: center;
                align-items: center;
            }
      `}</style>
        </>
    )
}