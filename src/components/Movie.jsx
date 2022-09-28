
function Movie(props) {
    //props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div
            id={id}
            classNameName="row movie"
        >
            <div classNameName="col s12 m7">
                <div classNameName="card">
                    <div classNameName="card-image">
                        {poster === 'N/A' ? (
                            <img
                                alt="filmPost"
                                src={
                                    `https://via.placeholder.com/300x350.png?text=${title}`
                                }
                            /> //вставляем картинку в качестве заглушки и текст с нашим title
                        ) : (
                            <img
                                alt="filmPost"
                                src={poster}
                            />
                        )}
                    </div>
                    <div classNameName="card-content">
                        <span classNameName="card-title">{title}</span>
                    </div>
                    <div classNameName="card-action">
                        <p>
                            {year} <span classNameName="right">{type}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Movie };
