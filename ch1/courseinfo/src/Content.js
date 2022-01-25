import React from 'react'
import Part from './Part.js'
const Content = (props) => {
    return (
        <div>
            <Part partName={props.part1} exerciseNum={props.exercises1}/>
            <Part partName={props.part2} exerciseNum={props.exercises2}/>
            <Part partName={props.part3} exerciseNum={props.exercises3}/>

        </div>

    )
}
export default Content;