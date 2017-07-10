import React, { Component } from 'react';
import LoaderHOC from '../HOC/LoaderHOC'


const RoasterHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>/</th>
        {
          props.titles.map((title) => {
            return <th key={title}> {title} </th>
          })
        }
      </tr>
    </thead>
  );
}

const RoasterRow = (props) => {
  return (
    <tr>
      <td>{props.shift}</td>
      {
        props.days.map((day) => {
          return (
            <td key={day.day}>
              <select multiple style={{width: "80%"}} onChange={() => console.log(day.day)}>
              {
                day.employees.map((employee) => {
                  return <option key={employee} value={employee}>{employee}</option>
                })
              }
              </select>
           </td>)
        })
      }
    </tr>
  );
}

class Roaster extends Component {

  render() {
    return (
      <table style={{width: "100%"}}>
        <RoasterHeader titles={["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]} />
        <tbody>
          <RoasterRow shift="shift1" days={[
                                {day: "01-01-2017", employees: ["A1", "B1", "C1", "D1", "E1", "F1", "G1"]},
                                {day: "02-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "03-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "04-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "05-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "06-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "07-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]}
                                ]} />
          <RoasterRow shift="shift2" days={[
                                {day: "01-01-2017", employees: ["A1", "B1", "C1", "D1", "E1", "F1", "G1"]},
                                {day: "02-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "03-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "04-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "05-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "06-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "07-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]}
                                ]} />
          <RoasterRow shift="shift3" days={[
                                {day: "01-01-2017", employees: ["A1", "B1", "C1", "D1", "E1", "F1", "G1"]},
                                {day: "02-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "03-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "04-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "05-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "06-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]},
                                {day: "07-01-2017", employees: ["A2", "B2", "C2", "D2", "E2", "F2", "G2"]}
                                ]} />
        </tbody>
      </table>
    );
  }

}

export default LoaderHOC('days')(Roaster);
