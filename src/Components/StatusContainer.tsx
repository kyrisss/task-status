import { connect } from "react-redux";
import { appStateType } from "./redux/redux-store";
//@ts-ignore
import { getUniversityTC, getCitiesTC, SET_CITY, SET_UNIVERSITY,SET_STATUS } from "./redux/statusReducer.ts";
//@ts-ignore
import Status from './Status.tsx'


const StatusContainer = (props) => {
    
    return(
        <Status status={props.status.status} 
                getUniversityTC={props.getUniversityTC} 
                universities={props.status.universities} 
                getCitiesTC={props.getCitiesTC}
                cities={props.status.cities}
                setCity={props.SET_CITY}
                setUniversity={props.SET_UNIVERSITY}
                setStatus={props.SET_STATUS}
                >
        </Status>
    )
}

const mapStateToProps = (state: appStateType) => {
    return {
        status: state.status
    }
}




export default connect(mapStateToProps,{getUniversityTC, getCitiesTC, SET_CITY, SET_UNIVERSITY,SET_STATUS})(StatusContainer)