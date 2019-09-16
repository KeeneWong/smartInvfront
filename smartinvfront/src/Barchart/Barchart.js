import React, { Component } from 'react';
import './Barchart.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Barchart extends Component {

    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    render() {
        console.log(this.props.items.filter(each => each.catergory == 1).length)
        console.log(this.props.items.length)
        console.log(this.props.items.filter(each => (each.catergory == 1).length / this.props.items.length) * 100)
        const options = {
            theme: "light",
            animationEnabled: true,
            backgroundColor: "rgba(243, 243, 243, 0.247)",
            // width: 600,
            title: {
                text: "Number of item"
            },
            dataPointWidth: 40,
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "Electronic Device", y: this.props.items.filter(each => each.catergory == 1).length },
                        { label: "Furniture", y: this.props.items.filter(each => each.catergory == 2).length },
                        { label: "Cleaning", y: this.props.items.filter(each => each.catergory == 3).length },
                        { label: "Clothes && Accessory", y: this.props.items.filter(each => each.catergory == 4).length },
                        { label: "Kitchen Product", y: this.props.items.filter(each => each.catergory == 5).length },
                        { label: "Movies", y: this.props.items.filter(each => each.catergory == 6).length },
                        { label: "Books", y: this.props.items.filter(each => each.catergory == 7).length },
                        { label: "Toys, Kids & Baby", y: this.props.items.filter(each => each.catergory == 8).length },
                        { label: "Sport and Outdoor", y: this.props.items.filter(each => each.catergory == 9).length },
                        { label: "Pet Supplies", y: this.props.items.filter(each => each.catergory == 10).length }
                    ]
                }
            ]
        }
        const options2 = {
            theme: "light",
            backgroundColor: "rgba(243, 243, 243, 0.247)",
            animationEnabled: true,
            exportFileName: "New Year Resolutions",
            exportEnabled: true,
            title: {
                text: "Percentage of Different Catergory"
            },
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{label}",
                toolTipContent: "{label}: <strong>{y}%</strong>",
                indexLabel: "{y}%",
                indexLabelPlacement: "inside",
                dataPoints: [
                    { y: (this.props.items.filter(each => each.catergory == 1).length / this.props.items.length) * 100, label: "Electrionic Device" },
                    { y: (this.props.items.filter(each => each.catergory == 2).length / this.props.items.length) * 100, label: "Furniture" },
                    { y: (this.props.items.filter(each => each.catergory == 3).length / this.props.items.length) * 100, label: "Cleaning" },
                    { y: (this.props.items.filter(each => each.catergory == 4).length / this.props.items.length) * 100, label: "Clothes && Accessory" },
                    { y: (this.props.items.filter(each => each.catergory == 5).length / this.props.items.length) * 100, label: "Kitchen Product" },
                    { y: (this.props.items.filter(each => each.catergory == 6).length / this.props.items.length) * 100, label: "Movies" },
                    { y: (this.props.items.filter(each => each.catergory == 7).length / this.props.items.length) * 100, label: "Books" },
                    { y: (this.props.items.filter(each => each.catergory == 8).length / this.props.items.length) * 100, label: "Toys, Kids & Baby" },
                    { y: (this.props.items.filter(each => each.catergory == 9).length / this.props.items.length) * 100, label: "Sport and Outdoor" },
                    { y: (this.props.items.filter(each => each.catergory == 10).length / this.props.items.length) * 100, label: "Pet Supplies" }
                ]
            }]
        }
        return (
            <div className="barchartMain">
                {/* <div className="firstbarchart"> */}
                <CanvasJSChart options={options2}
                /* onRef={ref => this.chart = ref} */
                />
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                {/* </div> */}
            </div>
        );
    }

}
export default Barchart;