import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addCrow } from '../reducers/actions/index'


const Main = (props) => {

  const addCrow = () =>{
    props.addCrow(props.crows.count)
  }

  return(
    <>     

      <img 
        onClick={() => { addCrow() }} 
        src="http://static.pokemonpets.com/images/monsters-images-800-800/430-Honchkrow.png"
      ></img>

      <p>
        Times clicked: {props.crows.count}
      </p>

    </>
  )
}

function mapStateToProps(state){
  return{
    crows: state.crows
  }
}

function matchDispatchtoProps(dispatch){
  return bindActionCreators({addCrow : addCrow}, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(Main);