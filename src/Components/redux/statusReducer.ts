import axios from "axios"
import { Dispatch } from "redux"
import towns from '../../cities.json'

export interface statusType {
    text: string
    university: string
    city: string
}

export interface citiesType {
    city: string,
    population: string
}
export interface universitiesType {
    alpha_two_code: string
    domains: string[]
    country: string
    'state-province': null
    web_pages: string[]
    name: string

}

export interface initialStoreType {
    status: statusType
    cities: citiesType[],
    universities: universitiesType[]
}

let initialStore: initialStoreType = {
    status: {
        text: 'Сделал тестовое задание',
        university: "University of the Arts London",
        city: "Енисейск"
    },
    cities: [],
    universities: []
}

type actionType = setUniversitiesACType | setCitiesACType | setCityACType | setUniversityACType | setStatusACType

const statusReducer = (state: initialStoreType = initialStore, action:actionType): initialStoreType => {

    switch (action.type) {
        case "SET_UNIVERITIES":
            return {
                ...state,
                universities: action.data
            }
        case "SET_CITIES":
            return {
                ...state,
                cities: action.data
            }

        case "SET_CITY":
            return {
                ...state,
                status: {
                    ...state.status,
                    city: action.city
                }
            }
        case "SET_UNIVERSITY":
            return {
                ...state,
                status: {
                    ...state.status,
                    university: action.univer
                }
            }
        case "SET_STATUS":
            return {
                ...state,
                status: {
                    ...state.status,
                    text: action.text
                }
            }
        default:
            return state;
    }

}

export interface setUniversitiesACType {
    type: 'SET_UNIVERITIES'
    data: universitiesType[]
}

export const SET_UNIVERITIES = (data: universitiesType[]): setUniversitiesACType => {
    return {
        type: 'SET_UNIVERITIES',
        data
    }
}

export interface setCitiesACType {
    type: 'SET_CITIES'
    data: citiesType[]
}


export const SET_CITIES = (data: citiesType[]): setCitiesACType => {
    return {
        type: 'SET_CITIES',
        data
    }
}

export interface setCityACType {
    type: 'SET_CITY'
    city: string
}

export const SET_CITY = (city: string): setCityACType => {
    return {
        type: "SET_CITY",
        city
    }
}

export interface setUniversityACType {
    type: 'SET_UNIVERSITY'
    univer: string
}

export const SET_UNIVERSITY = (univer:string): setUniversityACType => {
    return {
        type: "SET_UNIVERSITY",
        univer
    }
}

export interface setStatusACType {
    type: 'SET_STATUS'
    text: string
}

export const SET_STATUS = (text: string): setStatusACType => {
    return {
        type: "SET_STATUS",
        text
    }
}




export const getUniversityTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        axios.get('http://universities.hipolabs.com/search?country=United+Kingdom')
            .then((response) => {
                dispatch(SET_UNIVERITIES(response.data));
            })
    }
}

export const getCitiesTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(SET_CITIES(towns))
    }
}

export default statusReducer;