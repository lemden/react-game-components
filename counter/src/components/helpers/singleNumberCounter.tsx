import * as React from "react";
import NumberPresentation from "./number";

interface ISingleNumberCounterState {
    currentValue: number;
    inProgress: boolean;
}

interface ISingleNumberCounterProps {
    value: number;
}

export default
class SingleNumberCounter extends React.Component<ISingleNumberCounterProps, ISingleNumberCounterState> {
    
    private timeoutInProgress: any;

    constructor(props: ISingleNumberCounterProps) {
        super(props);
        this.state = {
            currentValue: props.value,
            inProgress: false,
        };
    }

    public componentWillReceiveProps(props: ISingleNumberCounterProps) {
        this.updateState(props.value, false);
    }

    private updateState(newValue: number, inProgress: boolean){
        if (this.timeoutInProgress) {
            clearTimeout(this.timeoutInProgress);
        }
        let currentValue;
        if (newValue !== this.state.currentValue) {
            if (this.state.currentValue === 9) {
                currentValue = 0;
            } else {
                currentValue = this.state.currentValue + 1;
            }
            this.setState({ 
                currentValue, 
                inProgress: !inProgress }, () => {
                    this.timeoutInProgress = setTimeout(() => {
                        this.updateState(newValue, !inProgress);
                    }, 25);
                }
            );
        } else {
            this.setState({ inProgress: false });
        }
    }
    
    public render(){
        return (
            <NumberPresentation 
                inProgress={this.state.inProgress}
                value={this.state.currentValue} 
            />
        );
    }
}