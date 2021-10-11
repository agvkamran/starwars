import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import search from '../../assets/search.gif';
import ch from '../../assets/ch.png';
import { Link } from 'react-router-dom';
import { setFilteredAC, setPageAC, setPagesAC, setPeopleAC } from '../../redux/reducer';
import { connect } from 'react-redux';
import './people.css';

const People = (props) => {
    console.log(props);
    // const [page, setPage] = useState(1);
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    // const dispatch = useDispatch();
    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/?page=${props.page}`)
            .then((peopleData) => peopleData.json()).catch(e => console.log('swApi', e));
        props.setData(response.results);
        props.setPages(response.count);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [props.page]);

    useEffect(() => {
        props.setFiltered("");
    }, [props.people])

    const prevPage = () => {
        // console.log("prevPage");
        // dispatch({ type: "PREV", page: page - 1 });
        if (props.page > 1) {
            props.setPage(props.page - 1);
            setEvt("");
        }
    }

    const nextPage = () => {
        // console.log("nextPage");
        // dispatch({ type: "NEXT", page: page + 1 });
        if (props.page < props.pages) {
            props.setPage(props.page + 1);
            setEvt("");
        }
    }

    const onChangePeopleValue = (e) => {
        setEvt(e.target.value);
    }

    const searchPeople = () => {
        props.setFiltered(evt);
    }

    let result = loading
        ? (<Preloader />)
        : (
            <div className='people_page'>
                <div className='input_elements'>
                    <input type="text" onChange={onChangePeopleValue} value={evt} className='search_input' placeholder='Search character' />
                    <button className='button_search' onClick={searchPeople}><img src={search} alt="search" className='search' /></button>
                </div>
                <div className='people'>
                    {props.filtered?.map((item, index) => {
                        let urlParts = item.url.split('/');
                        let id = urlParts[urlParts.length - 2];
                        return (
                            <div key={index} className='people_block'>
                                <img src={ch} className='people_image' alt='people_image' />
                                <div key={index} className='text_block_people'>
                                    <div className='people_name'>Name: {item.name}</div>
                                    <Link to={`/people/${id}`} className='more_info'>MoreInfo</Link>
                                </div>
                            </div>
                        )
                    })}
                </div >
                <div className='navigation_buttons'>
                    <button className='navigation' onClick={prevPage}><i className="fas fa-arrow-left"></i></button>
                    <button className='navigation' onClick={nextPage}><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    return result;
}

const mapStateToProps = (state) => {
    return {
        people: state.dataPage.people,
        pages: state.dataPage.pages,
        filtered: state.dataPage.filtered,
        page: state.dataPage.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (people) => {
            dispatch(setPeopleAC(people));
        },
        setPages: (pages) => {
            dispatch(setPagesAC(pages));
        },
        setFiltered: (query) => {
            dispatch(setFilteredAC(query));
        },
        setPage: (page) => {
            dispatch(setPageAC(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
