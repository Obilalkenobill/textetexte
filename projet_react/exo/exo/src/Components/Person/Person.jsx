import React from 'react';
import MonStyle from './Person.module.css';
import PropTypes from 'prop-types';


const Person = function (props)
{
    let className=MonStyle.div1;
    if(props.age<18){
        className += " "+MonStyle.warn;
    }

    return(
        <div className={className}>
          <p class={MonStyle.p1}>Je suis {props.name}</p>
          <p class={MonStyle.p1}>et j'ai {props.age} ans</p>
        </div>
    );
};
Person.propTypes =
{
    name: PropTypes.string
}
Person.defaultProps=
{
  name:"Hugo"
}
export default Person;