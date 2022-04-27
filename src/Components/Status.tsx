import { useState, useEffect } from "react";

import { statusType, citiesType, universitiesType, setUniversitiesACType, setCitiesACType, setCityACType, setUniversityACType, setStatusACType } from "../Components/redux/statusReducer"

interface Props {
    status: statusType
    universities: universitiesType[]
    cities: citiesType[]
    getUniversityTC: ()=> universitiesType[]
    getCitiesTC: () => citiesType[]
    setCity: (city: string) => setCityACType
    setUniversity: (university: string) => setUniversityACType
    setStatus: (status: string) => setStatusACType
}


const Status: React.FC<Props> = ({ status, universities, cities, getUniversityTC, getCitiesTC, setCity, setUniversity,setStatus }) => {

    const [editMode, setEditMode] = useState(false);
    
    const changeEditMode = () => {
        if(editMode){
            console.log(JSON.stringify(status))
        }
        setEditMode(!editMode)
    }

    useEffect(() => {
        getUniversityTC()
        getCitiesTC()
    }, []);

    const showUniversities = () => {

        const univers = universities.slice()
        
        univers.sort((a, b) => {
            if (a.name < b.name) //сортируем строки по возрастанию
                return -1
            if (a.name > b.name)
                return 1
            return 0 // Никакой сортировки
        })

        return univers.map((univer, index) => {
            return (
                <option key={index}>{univer.name}</option>
            )
        })
    }

    const showCities = () => {

        const towns = cities.slice()
        let maxPopulation = 0
        let maxIndex = 0
        

        towns.sort((a, b) => {
            if (a.city < b.city)
                return -1
            if (a.city > b.city)
                return 1
            return 0
        })

        const mapTowns = towns.filter(city => +city.population > 5000).map((city, index) => {
            if(+city.population > maxPopulation){
                maxPopulation = +city.population
                maxIndex = index
            }
            return (
                <option key={index}>{city.city}</option>
            )
        })
         
        const first = mapTowns.splice(maxIndex,1)
        return [...first, ...mapTowns]

    }

    const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setCity(e.target.value)
    }

    const changeUniversity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUniversity(e.target.value)
    }

    const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    return (
        <>
            <div className="status-container">
                {!editMode &&
                    <div className="status">
                        <div className="grid">
                            <p className="status__title">Статус:</p>
                            <p className="status__value">{status.text}</p>
                            <p className="status__title">Город:</p>
                            <p className="status__value">{status.city}</p>
                            <p className="status__title">Университет:</p>
                            <p className="status__value">{status.university}</p>
                        </div>
                        <button className="status-button" onClick={changeEditMode}>Редактировать</button>
                    </div>
                }
                {editMode &&
                    <div className="status">
                        <form action="/">
                            <div className="grid">
                                <label className="status__title" htmlFor="status">Статус:</label>
                                <input className="status__value" id="status" value={status.text} onChange={changeStatus}/>
                                <label className="status__title" htmlFor="city">Город:</label>
                                <select className="status__value" id="city" value={status.city} onChange={changeCity}>{showCities()}</select>
                                <label className="status__title" htmlFor="university">Университет:</label>
                                <select className="status__value" id="university" value={status.university} onChange={changeUniversity}>{showUniversities()}</select>
                            </div>
                        </form>
                        <button className="status-button" onClick={changeEditMode}>Сохранить</button>
                        </div>
                }
            </div>
        </>
    )
}

export default Status