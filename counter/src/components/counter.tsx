import * as React from "react";
import "./counter.styles.css";
import NumberPresentation from "./helpers/number";
import SingleNumberCounter from "./helpers/singleNumberCounter";

export default
class Counter extends React.Component<{value: number, numberOfSymbols: number}> {

    private getNumbers() {
        let value = this.props.value + "";
        if (value.length < this.props.numberOfSymbols) {
            value = new Array(
                this.props.numberOfSymbols - value.length 
            ).fill("0").join("") + value;
        }
        return value
                .substr(- this.props.numberOfSymbols)
                .split("")
                .map((v) => parseInt(v));
    }

    public render(){
        console.log(this.getNumbers())
        return (
            <div className={"counter"}>
                {this.getNumbers()
                    .map( (v,k) => (
                        <SingleNumberCounter
                            key={`v_${k}`}
                            value={v} />
                    ))}
            </div>
        );
    }
}