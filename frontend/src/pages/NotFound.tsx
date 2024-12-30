import nfp from '../assets/nfp.jpg'

const NotFound = () => {
    return <>
        <div style={{
            'display': 'flex',
            'align-items': 'center',
            'flex-direction': 'column'
        }}>
            <h1>Ooops страница не найдена</h1>
            <img src={ nfp as string } alt='nfp'/>
        </div>
    </>
}

export default NotFound