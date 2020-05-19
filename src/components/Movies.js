import React from 'react';
import '../styles/Movies.css';
import { connect } from 'react-redux';
import { IMG_URL } from '../constants/constants';

const onDrag = (event, element) => {
    event.preventDefault()
}

const Movies = (props) => {
    console.log(props.data)
    let data = props.data
    return (
        <div>
            <h2 id="recomMov">Recommended Movies</h2>
            <div className="row">
                {data.map((el,i) => {
                    return (
                        <div className="column" key={i} draggable on>
                            <img src={IMG_URL + el.poster_path} alt={el.title} draggable />
                            <div className="title" title={el.title}>{el.title}</div>
                            <div className="overview">{el.overview}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, null)(Movies)